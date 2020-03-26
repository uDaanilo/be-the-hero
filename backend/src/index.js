const express = require("express")
const app = express()
const routes = require("./routes")
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use(routes)



const PORT = 3003
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
