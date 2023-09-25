import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { authenticatedUserResSchema, signinReqSchema, signupReqSchema } from '@passh/shared'
import * as dto from '@passh/shared'
import DatabaseErrorException from 'App/Exceptions/DatabaseErrorException'

import LocalCredential from 'App/Models/LocalCredential'

export default class AuthController {
  public async signup({ request, auth, response }: HttpContextContract) {
    const { email, password } = await signupReqSchema.parseAsync(request.body())
    let localCredential: LocalCredential

    try {
      localCredential = await LocalCredential.create({ email, password })
      await auth.use('jwt').login(localCredential)

      return response.json({
        data: authenticatedUserResSchema.parse(localCredential),
      })
    } catch (err) {
      throw new DatabaseErrorException(err)
    }
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const { email, password } = await signinReqSchema.parseAsync(request.body())
    const localCredential = (await auth.attempt(email, password)) as Promise<typeof LocalCredential>

    const token = await auth.use('jwt').login(await localCredential.user)

    const responseJwt: dto.AuthenticatedResDto = {
      name: token.name,
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
      credential: token.user,
    }

    response.json({
      data: responseJwt,
    })
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('jwt').revoke()
    return response.redirect('/login')
  }
}
