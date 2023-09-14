import LocalCredential from 'App/Models/LocalCredential'
import Factory from '@ioc:Adonis/Lucid/Factory'
import UserFactory from './UserFactory'

export default Factory.define(LocalCredential, ({ faker }) => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
})
  .relation('user', () => UserFactory)
  .build()
