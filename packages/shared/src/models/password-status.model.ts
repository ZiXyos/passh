import { z } from 'zod'

export const passwordStatusDbName = 'PasswordStatus' as const 

export const passwordStatusSchema = z.enum([
  'WEAK',
  'MEDIUM',
  'STRONG',
]);

export type PasswordStatus = z.infer<typeof passwordStatusSchema>

