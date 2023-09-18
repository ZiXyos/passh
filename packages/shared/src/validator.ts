import { z } from 'zod';

export const ZodError = z.ZodError;

const signupReqSchema = z.object({
	email: z.string().email({ 
		message: 'content must be an email'
	}),
	password: z.string().min(8, { 
		message: 'Password to short'
	})
});

const signinReqSchema = z.object({
	email: z.string().email({
		message: 'must be an email'
	}),
	password: z.string().min(8, {
		message: 'password to short'
	})
});

const userJwtBodySchema = z.object({
	id: z.string(),
	email: z.string().email()
})

const authenticatedUserResSchema = z.object({
	name: z.string(),
	accessToken: z.string().min(16),
	refreshToken: z.string(),
	credential: userJwtBodySchema 
});

export {
	signupReqSchema,
	signinReqSchema,
	authenticatedUserResSchema
}
