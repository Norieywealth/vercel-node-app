require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.get("/testing", async(req,res) => {
    res.send(true)
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log('Vercel app is listening on port ' + port))