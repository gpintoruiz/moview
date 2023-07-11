require('dotenv').config()
require('./mongo') //Esto ejecuta todo el fichero de mongo que se conecta a la Base de datos

const Usuario = require('./models/Usuario')

const express = require('express')
const app = express()
const logger = require('./loggerMiddleware')
const cors = require('cors')
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')

app.use(cors())
app.use(express.json())

app.use(logger)

app.get('/', (request, response) =>{
  response.send('<h1>Hellow World</h1>')
})

app.put('/api/usuarios/:id', (request, response, next) => {
  const {id} = request.params
  const usuario = request.body

  const newUserInfo = {
    password: usuario.password,
    nombre: usuario.nombre,
    email: usuario.email,
    pais: usuario.pais
  }

  Usuario.findByIdAndUpdate(id, newUserInfo, {new: true})
    .then(result => {
      response.json(result)
    }).catch(err => next(err))
})

app.get('/api/usuarios',(request, response, next)=>{
  Usuario.find({}).then(usuarios =>{
    response.json(usuarios)
  }).catch(err => next(err))
})

app.get('/api/usuarios/:id',(request, response,next)=>{
  const {id} = request.params

  Usuario.findById(id).then(usuario =>{
    if (usuario){
      return response.json(usuario)
    } else{
      response.status(404).end()
    }
  }).catch(err => next(err))
})

app.delete('/api/usuarios/:id',(request, response,next)=>{
  const {id}  = request.params
  
  Usuario.findByIdAndRemove(id).then(() =>{
    response.status(204).end()
  }).catch(err => next(err))
})

app.post('/api/usuarios',(request, response, next)=>{
  const usuario = request.body

  if (!usuario || !usuario.password){
    return response.status(400).json({
      error: 'usuario.password is missing'
    })
  }

  const newUsuario = new Usuario({
    nombre: usuario.nombre,
    pais: usuario.pais,
    password: usuario.password,
    email: usuario.email
  })

  newUsuario.save().then(savedUser => {
    response.status(201).json(savedUser)
  }).catch(err => next(err))
})

app.use(notFound)

app.use(handleErrors)

const PORT = process.env.PORT
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})