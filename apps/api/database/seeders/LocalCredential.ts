import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import LocalCredentialFactory from 'Database/factories/LocalCredentialFactory'

export default class LocalCredentialSeeder extends BaseSeeder {
  public static count = 30

  public async run() {
    await LocalCredentialFactory.createMany(LocalCredentialSeeder.count)
  }
}
