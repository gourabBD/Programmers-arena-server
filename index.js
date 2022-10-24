const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors())


const courses=require('./data/courses.json');
app.get('/', (req, res) => {
  res.send('Enjoy!')
})
app.get('/courses/:id', (req, res) => {
  
    const id=parseInt(req.params.id);
    const selectedCourses= courses.find(n=> n.id===id);
    res.send(selectedCourses);
  })



app.get('/courses', (req, res) => {
  res.send(courses)
})

app.listen(port, () => {
  console.log(` running on port: ${port}`)
})