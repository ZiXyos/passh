import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import { generateRandomNumber, getUniqueRandomItemsFromArray } from 'App/Utils/seeder.utils'
import PasswordFactory from 'Database/factories/PasswordFactory'

export default class PasswordSeeder extends BaseSeeder {
  public static percentOfUsersWithPass = 0.73
  public static maxPassPerUser = 7

  public async run() {
    const users = await User.all()
    const numbOfUserWithPass = users.length * PasswordSeeder.percentOfUsersWithPass
    const userWithPass = getUniqueRandomItemsFromArray({
      items: users,
      count: numbOfUserWithPass,
    })

    for (let user of userWithPass) {
      const nbOfPass = generateRandomNumber({ min: 1, max: PasswordSeeder.maxPassPerUser })

      for (let i = 0; i < nbOfPass; i++) {
        await PasswordFactory.merge({ userId: user.id.toString() })
          .with('passwordCredential', 1)
          .create()
      }
    }
  }
}
