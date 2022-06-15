import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
  public home({ view }: HttpContextContract) {
    return view.render("home");
  }

  public about({ view }: HttpContextContract) {
    return view.render("about");
  }

  public contact({ view }: HttpContextContract) {
    return view.render("contact");
  }
}
