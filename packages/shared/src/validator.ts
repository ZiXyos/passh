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

const authenticatedUserResSchema = z.object({
	id: z.string(),
	email: z.string().email(),
	password: z.string().min(8),
	localCredential: z.any().nullable(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date()
});

export {
	signupReqSchema,
	authenticatedUserResSchema
}
