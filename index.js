const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors());

const courses = require('./data/all_courses.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:courseId', (req, res) => {
    const id = parseInt(req.params.courseId);
    res.send(courses[id])
})
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selected_course = courses.find(course => course.id == id);
    res.send(selected_course)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})