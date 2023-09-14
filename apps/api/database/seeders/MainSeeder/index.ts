import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
    console.log(`[LOG::SEEDER] -> Running: ${seeder.default.name}`)
    await new seeder.default(this.client).run()
    console.log(`[LOG::SEEDER] -> Done: ${seeder.default.name}`)
  }

  public async run(): Promise<void> {
    await this.runSeeder(await import('../LocalCredential'))
    await this.runSeeder(await import('../User'))
    await this.runSeeder(await import('../Password'))
  }
}
