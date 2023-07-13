require('dotenv').config()
require('./mongo') //Esto ejecuta todo el fichero de mongo que se conecta a la Base de datos

const User = require('./models/User')

const express = require('express');
const Sentry = require('@sentry/node');
const app = express()
const logger = require('./loggerMiddleware')
const cors = require('cors')
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')
const bcrypt = require('bcrypt')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const jwt = require('jsonwebtoken')
const userExtractor = require('./middleware/userExtractor')

app.use(cors())
app.use(express.json())

//Sentry sirve para el manejo de errores en gran escala, ya que en su plataforma nos proporciona información de cada petición con error
Sentry.init({
  dsn: "https://bcbedbb8fca54318afc2c7879d9a2c85@o4505512890925056.ingest.sentry.io/4505512892235776",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    // Automatically instrument Node.js libraries and frameworks
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context, so that all
// transactions/spans/breadcrumbs are isolated across requests
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use(logger)

app.get('/', (request, response) =>{
  response.send('<h1>Hellow World</h1>')
})

//Para obtener un solo usuario
app.get('/api/users/:id', async(request, response,next)=>{
  const {id} = request.params

  await User.findById(id).then(user =>{
    if (user) return response.json(user)
    response.status(404).end()
  }).catch(err => next(err))
})

//Para hacer actualizaciones a los datos del usuario
app.put('/api/users/:id', async(request, response, next) => {
  const {id} = request.params
  const user = request.body

  const passwordHash = await bcrypt.hash(user.password, 10)

  const newUserInfo = {
    passwordHash: passwordHash,
    name: user.name,
    username: user.username,
    email: user.email
  }

  await User.findByIdAndUpdate(id, newUserInfo, {new: true})
    .then(result => {
      response.json(result)
    }).catch(err => next(err))
})

//Para hacer eliminar a un usuario
app.delete('/api/users/:id', async (request, response,next)=>{
  const {id}  = request.params
  
  await User.findByIdAndDelete(id).then(() =>{
    response.status(204).end()
  }).catch(err => next(err))
})

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use(userExtractor);

app.use(notFound)

app.use(Sentry.Handlers.errorHandler()); 

app.use(handleErrors)

const PORT = process.env.PORT
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})