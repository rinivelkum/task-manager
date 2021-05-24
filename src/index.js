const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('App is under maintenance!')
// })

app.use(express.json()) // Automatically parse JSON data into an object.
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
  const token = await jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {
    expiresIn: '1 day',
  })
  console.log(token)

  const data = jwt.verify(token, 'thisismynewcourse')

  console.log(data)
}
myFunction()
