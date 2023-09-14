import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class CreateDev extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'dev:create'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Create a new Developper User'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    const { default: LocalCredential } = await import('App/Models/LocalCredential')
    const { default: User } = await import('App/Models/User')

    this.logger.info('🔥 New Developper creation!')

    const email = await this.prompt.ask('Enter email')
    const password = await this.prompt.secure('Choose a password')

    const username = await this.prompt.ask('Choose an username')

    this.logger.info(' Loading...')

    const localCredential = await LocalCredential.create({
      email,
      password,
    })

    await User.create({
      username,
      role: 'DEV',
      plan: 'PREMIUM',
      localCredentialId: localCredential.id,
    })

    this.logger.success('✅ Finished!')
  }
}
