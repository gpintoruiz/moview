const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const { response, request } = require('express')
const User = require('../models/User')


usersRouter.get('/', async(request,response) =>{
  const users = await User.find({})
  response.json(users)
})

// usersRouter.get('/:id', async(request, response,next)=>{
//   const {id} = request.params

//   await User.findById(id).then(user =>{
//     if (user) return response.json(user)
//     response.status(404).end()
//   }).catch(err => (err))
// })

usersRouter.post('/', async (request, response) =>{
    const {body} = request
    const {name, username, password, pais, email} = body 

    const passwordHash = await bcrypt.hash(password, 10)

    const user = new User({
        username,
        name,
        passwordHash,
        email
    })

    const savedUser = await user.save()
     
    response.status(201).json(savedUser)
})

module.exports = usersRouter