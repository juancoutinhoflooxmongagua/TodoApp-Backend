const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
.then(() => console.log('MongoDB conectado 🎉'))
.catch(err => {
  console.error('Erro ao conectar no MongoDB 💥');
  console.error(err);
  process.exit(1);
});
