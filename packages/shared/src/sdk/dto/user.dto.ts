import { z } from "zod"
import { signupReqSchema, signinReqSchema, authenticatedUserResSchema } from "../../validator"


export type SigninReqDto = z.infer<typeof signinReqSchema>;
export type SignupReqDto = z.infer<typeof signupReqSchema>;
export type AuthenticatedResDto = z.infer<typeof authenticatedUserResSchema>
