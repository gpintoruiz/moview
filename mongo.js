const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://majinka:Vamos123@vibrant.fihcpie.mongodb.net/moview?retryWrites=true&w=majority'

// conexión a mongodb
mongoose.connect(connectionString)
  .then(() =>
  {
    console.log('Database connected')
  }).catch(err => {
    console.error(err)
  }) 