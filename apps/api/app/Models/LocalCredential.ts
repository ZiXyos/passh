import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class LocalCredential extends BaseModel {
  public static table = 'local_credentials'

  @column({ isPrimary: true })
  public id: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => User, {
    foreignKey: 'localCredentialId',
  })
  public user: HasOne<typeof User>

  @beforeSave()
  public static async hashPassword(localCredential: LocalCredential) {
    if (localCredential.$dirty.password) {
      localCredential.password = await Hash.make(localCredential.password)
    }
  }
}
