import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { passwordStatusDbName, passwordStatusSchema } from '@passh/shared'

export default class extends BaseSchema {
  protected tableName = 'passwords'

  public async up() {
    this.schema.raw(`DROP TYPE IF EXISTS "${passwordStatusDbName}"`)

    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))
      table.string('title', 50).notNullable()
      table.jsonb('tags').defaultTo({ value: [] })
      table
        .enum(
          'status',
          [
            passwordStatusSchema.Values.WEAK,
            passwordStatusSchema.Values.MEDIUM,
            passwordStatusSchema.Values.STRONG,
          ],
          {
            useNative: true,
            existingType: false,
            enumName: passwordStatusDbName,
          }
        )
        .defaultTo(passwordStatusSchema.Values.WEAK)
        .notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.schema.alterTable(this.tableName, (table) => {
      table.uuid('user_id').references('users.id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
    this.schema.raw(`DROP TYPE "${passwordStatusDbName}";`)
  }
}
