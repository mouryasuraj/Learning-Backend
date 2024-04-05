
import express from 'express'
const port = process.env.PORT || 4000
const app = express()


app.get('/', (req, res) => {
    res.send('<h1>Hello from Backend</h1>')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login through your email</h1>')
})

app.get('/user', (req, res) => {
    res.send('<h1>No user Found</h1>')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})