const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

// const me = new User({
//   name: '     Alex      ',
//   email: 'ALK9MM@GMAIL.COM      ',
//   password: 'password',
// })

// me.save()
//   .then(() => {
//     console.log(me)
//   })
//   .catch((error) => {
//     console.log('Error!', error)
//   })

// const task1 = new Task({ description: 'Clean room', completed: false })

// task1
//   .save()
//   .then(() => {
//     console.log(task1)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
