import { args, BaseCommand } from '@adonisjs/core/build/standalone'
import { join } from 'path'

export default class Factory extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'factory'
  public static description = ''

  public static settings = {
    loadApp: false,
    stayAlive: false,
  }

  @args.string({
    description: 'Factory file name',
    name: 'fname',
  })
  public fname: string

  public async run() {
    const name = this.fname

    const file = this.generator.addFile(name, {
      form: 'singular',
      extname: '.ts',
      pattern: 'camelcase',
      suffix: 'Factory',
    })

    file.appRoot(this.application.appRoot)
    file.destinationDir(this.application.directoriesMap.get('factories')!)
    file.useMustache().stub(join(__dirname, './templates/factory.txt'))

    file.apply({ name, resourceful: true })

    try {
      await this.generator.run()
      this.logger.action('create').succeeded(file.toJSON().filepath)
    } catch (error) {
      this.logger.action('create').failed('error', error)
    }
  }
}
