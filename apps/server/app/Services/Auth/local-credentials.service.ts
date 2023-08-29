import { PrismaClient, type LocalCredentials } from "@prisma/client"

export default class AuthService {

  constructor(private readonly prismaLocalCredential: PrismaClient['localCredentials']) {}
  
   async signup(input: { email: string, password: string }): Promise<LocalCredentials> {

    return await this.prismaLocalCredential.create({ 
      data: {
        email: input.email,
        password: input.password,
        account: { create: {} }
      } 
    })
  }

}
