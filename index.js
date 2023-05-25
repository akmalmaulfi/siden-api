require("dotenv").config()
const express = require("express")
const app = express()
const routers = require("./routers/index")
const helmet = require("helmet")
const PORT = process.env.PORT

// Middlewares
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routers
app.use(routers)

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT)
})
