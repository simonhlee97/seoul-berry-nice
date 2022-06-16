import Route from '@ioc:Adonis/Core/Route'

Route.get("/", "PagesController.home").as("home");
Route.get('/about', 'PagesController.about').as('about')
Route.get("/contact", "PagesController.contact").as('contact')

// Route.get("/things", "TodosController.index").as("things");
// Route.post("/things", "TodosController.store")

Route.get("/bites", "BitesController.index")
Route.post("/bites", "BitesController.store");

Route.get('register', 'AuthController.registerShow').as('auth.register.show')
Route.post('register', 'AuthController.register').as('auth.register')
Route.get('login', 'AuthController.loginShow').as('auth.login.show')
Route.post('login', 'AuthController.login').as('auth.login')
Route.get('logout', 'AuthController.logout').as('auth.logout')
