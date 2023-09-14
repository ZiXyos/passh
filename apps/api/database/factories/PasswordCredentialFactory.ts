import PasswordCredential from 'App/Models/PasswordCredential'
import Factory from '@ioc:Adonis/Lucid/Factory'
import PasswordFactory from './PasswordFactory'

export default Factory.define(PasswordCredential, ({ faker }) => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
})
  .relation('entity', () => PasswordFactory)
  .build()
