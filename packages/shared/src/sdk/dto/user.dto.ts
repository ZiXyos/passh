import { z } from "zod"
import { signupReqSchema, signinReqSchema } from "../../validator"


export type SigninReqDto = z.infer<typeof signinReqSchema>;
export type SignupReqDto = z.infer<typeof signupReqSchema>;
