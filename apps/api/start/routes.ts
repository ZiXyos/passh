/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // - AUTH ROUTES
  Route.group(() => {
    Route.post('signup', 'AuthController.signup')
    Route.post('login', 'AuthController.login')
    Route.post('logout', 'AuthController.logout')
  }).prefix('auth')

  // - ADMIN ROUTES
  Route.group(() => {
    // USERS ROUTES
    Route.group(() => {
      Route.get('get-info', 'AdminController.getAllUsers')
      //Route.get('get-user', 'getUser')
      // Route.delete('delete', 'deleteUser')
    }).prefix('users')

    // COMPAGNIES ROUTES
    /*Route.group(() => {
      Route.post('create', 'createCompagnies')
    }).prefix('compagnies')*/
  }).prefix('admin')
})
  .prefix('api/v1')
  .namespace('App/Controllers/V1')
