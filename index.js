const express = require('express')
const app = express()
const logger = require('./loggerMiddleware')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use(logger)

let reseñas = [
  {
    'nombreResenador': 'Juan Pérez',
    'id': 1,
    'resena': 'Excelente película, muy recomendada',
    'fecha': '2023-04-13'
  },
  {
    'nombreResenador': 'María Gómez',
    'id': 2,
    'resena': 'La trama es interesante pero el final fue decepcionante',
    'fecha': '2023-04-12'
  },
  {
    'nombreResenador': 'Pedro Rodríguez',
    'id': 3,
    'resena': 'No me gustó, la historia es predecible',
    'fecha': '2023-04-11'
  }
]

// const app = http.createServer((request, response) =>{
//     response.writeHead(200,{'Content-Type':'application/json'})
//     response.end(JSON.stringify(reseñas))
// })

app.get('/', (request, response) =>{
  response.send('<h1>Hellow World</h1>')
})

app.get('/api/resenas',(request, response, next)=>{
  response.json(reseñas)
  next()
})

app.get('/api/resenas/:id',(request, response)=>{
  const id = request.params.id
  const reseña = reseñas.find(reseña => reseña.id == id)
  if (reseña){
    response.json(reseña)
  } else{
    response.status(404).end()
  }
})

app.delete('/api/resenas/:id',(request, response)=>{
  const id  = request.params.id
  reseñas = reseñas.filter(resena => resena.id != id)
  response.status(204).end()
})

app.post('/api/resenas',(request, response)=>{
  const reseña = request.body

  if (!reseña || !reseña.resena){
    return response.status(400).json({
      error: 'reseña.resena is missing'
    })
  }

  const ids = reseñas.map(reseña => reseña.id)
  const maxId = Math.max(... ids)

  const newResena = {
    id:maxId+1,
    resena: reseña.resena,
    nombreResenador: reseña.nombreResenador,
    date: new Date().toISOString()
  }

  reseñas = [... reseñas, newResena]

  response.status(201).json(newResena)
})

app.use((reques, response)=>{
  response.status(404).json({
    error:'Not found'
  })
})

const PORT = 3001
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})