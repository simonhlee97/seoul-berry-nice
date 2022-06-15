import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task';
import { schema, rules } from '@ioc:Adonis/Core/Validator';



export default class TodosController {
  public index({ view }: HttpContextContract) {
    return view.render("things/index");
  }

  public async store({ request, response }: HttpContextContract) {
    const validationSchema = schema.create({
      title: schema.string({ trim: true }, [
        rules.maxLength(200)
      ])
    })

    const validatedData = await request.validate({
      schema: validationSchema,
      messages: {
        'title.required': 'Enter the title',
        'title.maxLength': 'Title cannot exceed 200 characters'
      }
    })
    
    await Task.create({
      title: validatedData.title,
      description: request.input("description"),
    });

    return response.redirect('back')
  }

 
}
