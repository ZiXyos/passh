import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
// import LocalCredential from 'App/Models/LocalCredential'
// import Password from 'App/Models/Password'
// import PasswordCredential from 'App/Models/PasswordCredential'
// import User from 'App/Models/User'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
    /*
    this.app.container.bind('App/Models/LocalCredential', () => LocalCredential)
    this.app.container.bind('App/Models/User', () => User)
    this.app.container.bind('App/Models/Password', () => Password)
    this.app.container.bind('App/Model/PasswordCredential', () => PasswordCredential)
    */
  }

  public async boot() {
    const { BaseModel } = await import('@ioc:Adonis/Lucid/Orm')
    const { CustomNamingStrategy } = await import('App/Models/utils')

    BaseModel.namingStrategy = new CustomNamingStrategy()
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
