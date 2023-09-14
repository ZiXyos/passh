import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { userPlanDbName, userPlanSchema, userRoleDBName, userRoleSchema } from '@passh/shared'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.raw(`DROP TYPE IF EXISTS "${userRoleDBName}"`)
    this.schema.raw(`DROP TYPE IF EXISTS "${userPlanDbName}"`)

    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))
      table.string('username', 25).nullable().unique()
      table.string('avatar_url').nullable()
      table
        .enum(
          'role',
          [
            userRoleSchema.Values.USER,
            userRoleSchema.Values.DEV,
            userRoleSchema.Values.ADMIN,
            userRoleSchema.Values.COMPAGNIES,
          ],
          {
            useNative: true,
            existingType: false,
            enumName: userRoleDBName,
          }
        )
        .defaultTo(userRoleSchema.Values.USER)
        .notNullable()

      table
        .enum(
          'plan',
          [
            userPlanSchema.Values.FREE,
            userPlanSchema.Values.ADVANCED,
            userPlanSchema.Values.PREMIUM,
            userPlanSchema.Values.FAMILY,
          ],
          {
            useNative: true,
            existingType: false,
            enumName: userPlanDbName,
          }
        )
        .defaultTo(userPlanSchema.Values.FREE)
        .notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.schema.alterTable(this.tableName, (table) => {
      table.uuid('local_credential_id').references('local_credentials.id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
    this.schema.raw(`DROP TYPE "${userRoleDBName}"`)
    this.schema.raw(`DROP TYPE "${userPlanDbName}"`)
  }
}
