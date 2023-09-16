import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { userRoleSchema } from '@passh/shared'

export default class Admin {
  protected redirect = 'http://localhost:8000/auth/admin'

  public async handle({ auth }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const localCred = auth.user
    console.log(localCred)
    if (
      localCred?.user.role === userRoleSchema.Values.DEV ||
      localCred?.user.role === userRoleSchema.Values.ADMIN
    ) {
      await next()
    } else {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
        'web',
        this.redirect
      )
    }
  }
}
