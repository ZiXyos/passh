import { prisma, PrismaSeederBase } from '@ioc:Adonis/Addons/Prisma';
import { faker } from '@faker-js/faker';
import { Prisma } from '@prisma/client';
import { getSecureRandomString } from '../../common/helpers/random.helper';


export default class UserSeeder extends PrismaSeederBase {
  public static developmentOnly = false

  public async run() {
    // Write your database queries inside the run method
    const users: Prisma.UserCreateInput[] = Array.from({
      length: 30 
    }).map(() => ({  
      username: faker.internet.userName().toLowerCase(),
      passwords_lists: { create: [] },
      local_credentials: { 
        create: {
          email: faker.internet.email(),
          password: faker.internet.password(),
          rememberMeToken: getSecureRandomString(8),
        } 
      }
    }));

    await Promise.all(
      users.map( async (user) => {
        await prisma.user.create({
          data: user
        })
      })
    );
  }
}
