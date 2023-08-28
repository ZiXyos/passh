import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { prisma } from '@ioc:Adonis/Addons/Prisma';
import { type LocalCredentials } from '@prisma/client';
import { authenticatedUserResSchema, signupReqSchema } from '@passh/shared';

export default class AuthController {

  public async signup({ 
    request,
    auth,
    response
  }: HttpContextContract) {

    const { email, password } = await signupReqSchema.parseAsync(request.body());
    let localCredential: LocalCredentials; 

    try {
      localCredential = await prisma.localCredentials.create({ data: {
        email: email, 
        password: password,
        account: { create: {} }
      }});
    } catch(err) {
      throw new Error(err);
    }
    
    await auth.login(localCredential);
    return response.json({
      data: authenticatedUserResSchema.parse(localCredential)
    })
  }
}
