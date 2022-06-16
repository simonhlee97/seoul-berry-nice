import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Task from 'App/Models/Task';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class TodosController {
  // display list of all Todos
  public async index({ view, auth }: HttpContextContract) {
    // const things = await Task.all();
    const user = auth.user;
    await user?.load('tasks')
    return view.render("things/index", {tasks: user?.tasks});
  }

  public async store({ request, response, session, auth }: HttpContextContract) {
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
    
    await auth.user?.related('tasks').create({
      title: validatedData.title,
      description: request.input("description"),
    });

    session.flash('notification', 'thing to do added successfully 😀')

    return response.redirect('back')
  }

  

 
}
