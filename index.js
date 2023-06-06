const express = require('express')
const app = express()

let reseñas = [
    {
      "nombreResenador": "Juan Pérez",
      "id": 1,
      "resena": "Excelente película, muy recomendada",
      "fecha": "2023-04-13"
    },
    {
      "nombreResenador": "María Gómez",
      "id": 2,
      "resena": "La trama es interesante pero el final fue decepcionante",
      "fecha": "2023-04-12"
    },
    {
      "nombreResenador": "Pedro Rodríguez",
      "id": 3,
      "resena": "No me gustó, la historia es predecible",
      "fecha": "2023-04-11"
    }
  ]

// const app = http.createServer((request, response) =>{
//     response.writeHead(200,{'Content-Type':'application/json'})
//     response.end(JSON.stringify(reseñas))
// })

app.get('/', (request, response) =>{
    response.send('<h1>Hellow World</h1>')
})

app.get('/api/notes',(request, response)=>{
    response.json(reseñas)
})

const PORT = 3001
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})