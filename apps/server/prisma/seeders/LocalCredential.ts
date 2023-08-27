import { prisma, PrismaSeederBase } from '@ioc:Adonis/Addons/Prisma'

export default class LocalCredentialSeeder extends PrismaSeederBase {
  public static developmentOnly = false

  public async run() {
    // Write your database queries inside the run method
  }
}
