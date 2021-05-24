require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('60a00659e0cfef39d8dbe7d9')
//   .then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
//   })
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('60a143d4ce6ed8088c3e6614')
  .then((count) => {
    console.log(count)
  })
  .catch((e) => {
    console.log(e)
  })
