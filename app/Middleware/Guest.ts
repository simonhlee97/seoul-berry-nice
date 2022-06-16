import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Guest {
  public async handle({auth, response}: HttpContextContract, next: () => Promise<void>) {
    if (auth.isLoggedIn) {
      return response.redirect('/')
    }
    
    // code for middleware goes here. ABOVE THE NEXT CALL
    await next()
  }
}
