import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { userRoleSchema } from '@passh/shared'

export default class Admin {
  protected redirectTo = 'http://localhost:8000/auth/admin'

  public async handle({ request, auth }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const authorization = request.header('Authorization')
    console.log(authorization, auth.use('jwt').payload)

    console.log(auth.use('jwt').isLoggedIn)
    /*const user = localCred.user

    if (!user) {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
        'web',
        this.redirectTo
      )
    }

    if (user.role === userRoleSchema.Values.DEV || user.role === userRoleSchema.Values.ADMIN) {
      await next()
    } else {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
        'web',
        this.redirectTo
      )
    }*/
  }
}
