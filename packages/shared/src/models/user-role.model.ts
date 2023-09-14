import { z } from 'zod'

export const userRoleDBName = 'UserRole' as const

export const userRoleSchema = z.enum(['ADMIN', 'USER', 'DEV', 'COMPAGNIES'])
export type UserRole = z.infer<typeof userRoleSchema>
