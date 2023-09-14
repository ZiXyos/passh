import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import LocalCredential from 'App/Models/LocalCredential'
import UserFactory from 'Database/factories/UserFactory'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const localCredentials = await LocalCredential.all()

    for (let localCredential of localCredentials) {
      await UserFactory.merge({ localCredentialId: localCredential.id }).create()
    }
  }
}
