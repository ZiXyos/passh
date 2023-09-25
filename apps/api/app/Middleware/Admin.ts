import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { userRoleSchema } from '@passh/shared'
import User from 'App/Models/User'

export default class Admin {
  protected redirectTo = 'http://localhost:8000/auth/admin'

  public async handle({ auth }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    await auth.check()

    const localCred = auth.user?.serialize()

    if (!localCred) {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
        'api',
        this.redirectTo
      )
    }

    const user = await User.findByOrFail('local_credential_id', localCred.id)
    console.log(user)

    if (user.role === userRoleSchema.Values.DEV || user.role === userRoleSchema.Values.ADMIN) {
      await next()
    } else {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
        'web',
        this.redirectTo
      )
    }
  }
}
