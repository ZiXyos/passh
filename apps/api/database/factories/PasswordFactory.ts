import Password from 'App/Models/Password'
import Factory from '@ioc:Adonis/Lucid/Factory'
import UserFactory from './UserFactory'
import PasswordCredentialFactory from './PasswordCredentialFactory'

export default Factory.define(Password, ({ faker }) => {
  return {
    title: faker.company.name().concat(" password's"),
    tags: [],
  }
})
  .relation('author', () => UserFactory)
  .relation('passwordCredential', () => PasswordCredentialFactory)
  .build()
