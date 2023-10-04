import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AdminsController {
  public async getAllUsers({ response, auth }: HttpContextContract) {
    if (!auth.user) return response.unauthorized()

    const users = await User.query().preload('passwords').preload('localCredential').paginate(1, 25)
    const dataJson = users.serialize()
    return response.json(dataJson)
  }

  public async getUser({ request, response }: HttpContextContract) {
    const params = request.params()
    const user = await User.findBy('id', params['id'])
    const dataJson = user?.serialize()

    return response.json(dataJson)
  }
}
