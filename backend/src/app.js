const express = require("express")
const app = express()
const { errors } = require('celebrate')
const routes = require("./routes")
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(errors())


module.exports = app
