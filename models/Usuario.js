const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    nombre: String,
    email: String,
    password: String,
    pais: String
  })

  userSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  const Usuario = model('Usuarios', userSchema)
 
module.exports = Usuario;