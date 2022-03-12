const express = require("express")
const config = require('./config')


const port = 3000
const serverLog = config.log.serverLog

const app = express()

// middleware
app.use(express.json())

// request path
app.get('/', (req, res) => {
    serverLog('\'/\' requested')
    res.send(`<h1>Hello from Tao's Server</h1>`)
})


app.listen(port, () => {
    serverLog(`server started and listening on port: ${port}`)
})