import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

import LocalCredentialFactory from './LocalCredentialFactory'
import PasswordFactory from './PasswordFactory'

export default Factory.define(User, ({ faker }) => {
  return {
    username: faker.internet.userName().slice(0, 15),
    avatarURL: faker.internet.avatar(),
  }
})
  .relation('localCredential', () => LocalCredentialFactory)
  .relation('passwords', () => PasswordFactory)
  .build()
