import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { authenticatedUserResSchema, signinReqSchema, signupReqSchema } from '@passh/shared'
import DatabaseErrorException from 'App/Exceptions/DatabaseErrorException'

import LocalCredential from 'App/Models/LocalCredential'

export default class AuthController {
  public async signup({ request, auth, response }: HttpContextContract) {
    const { email, password } = await signupReqSchema.parseAsync(request.body())
    let localCredential: LocalCredential

    try {
      localCredential = await LocalCredential.create({ email, password })
    } catch (err) {
      throw new DatabaseErrorException(err)
    }

    await auth.use('web').login(localCredential)
    return response.json({
      data: authenticatedUserResSchema.parse(localCredential),
    })
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = await signinReqSchema.parseAsync(request.body())

    let localCredential: Promise<LocalCredential>

    try {
      localCredential = (await auth.use('web').attempt(email, password)) as Promise<LocalCredential>
      console.log(localCredential)
      return response.json({
        data: authenticatedUserResSchema.parse(localCredential),
      })
    } catch {
      return response.status(404).send('Ivalid Credential')
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.redirect('/login')
  }
}
