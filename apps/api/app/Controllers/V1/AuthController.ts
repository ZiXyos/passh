import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { authenticatedUserResSchema, signinReqSchema, signupReqSchema } from '@passh/shared'

import LocalCredential from 'App/Models/LocalCredential'

export default class AuthController {
  public async signup({ request, auth, response }: HttpContextContract) {
    const { email, password } = await signupReqSchema.parseAsync(request.body())
    let localCredential: LocalCredential

    try {
      localCredential = await LocalCredential.create({ email, password })
    } catch (err) {
      return response.status(404).send('User Not found')
    }

    await auth.login(localCredential)
    return response.json({
      data: authenticatedUserResSchema.parse(localCredential),
    })
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = await signinReqSchema.parseAsync(request.body())

    let localCredential: Promise<LocalCredential>

    try {
      localCredential = (await auth.use('web').attempt(email, password)) as Promise<LocalCredential>
      return response.json({
        data: authenticatedUserResSchema.parse(localCredential),
      })
    } catch {
      return response.badRequest('Invalid Credentials')
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.noContent()
  }
}