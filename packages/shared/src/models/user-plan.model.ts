import { z } from 'zod'

export const userPlanDbName = 'UserPlan' as const

export const userPlanSchema = z.enum([
	'FREE',
	'ADVANCED',
	'PREMIUM',
	'FAMILY'
]);
export type UserPlan = z.infer<typeof userPlanSchema>;
