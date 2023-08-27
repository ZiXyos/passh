 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({} : HttpContextContract) {
     return {
       username: 'dev',
       password: 'password'
     }
   }
}
