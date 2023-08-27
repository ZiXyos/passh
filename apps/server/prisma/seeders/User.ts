import { prisma, PrismaSeederBase } from '@ioc:Adonis/Addons/Prisma'

export default class UserSeeder extends PrismaSeederBase {
  public static developmentOnly = false

  public async run() {
    // Write your database queries inside the run method
  }
}
