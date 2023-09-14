import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { type UserRole, type UserPlan, userRoleSchema, userPlanSchema } from '@passh/shared'
import Password from './Password'
import LocalCredential from './LocalCredential'

export default class User extends BaseModel {
  public static table = 'users'

  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public avatarURL: string | null = null

  @column()
  public role: UserRole = userRoleSchema.Values.USER

  @column()
  public plan: UserPlan = userPlanSchema.Values.FREE

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @hasMany(() => Password, {
    foreignKey: 'userId',
  })
  public passwords: HasMany<typeof Password>

  @column()
  public localCredentialId: number

  @belongsTo(() => LocalCredential)
  public localCredential: BelongsTo<typeof LocalCredential>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
