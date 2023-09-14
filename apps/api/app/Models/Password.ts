import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import PasswordCredential from './PasswordCredential'

export default class Password extends BaseModel {
  public static table = 'passwords'

  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @hasOne(() => PasswordCredential, {
    foreignKey: 'passwordId',
  })
  public passwordCredential: HasOne<typeof PasswordCredential>

  @column()
  public tags: string[]

  @column()
  public userId: string

  @belongsTo(() => User, {
    foreignKey: 'userId',
  })
  public author: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
