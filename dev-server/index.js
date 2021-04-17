import express from 'express'
import { registerRoutes } from './routes.js'
import { setEnviroment } from './config/env.js'
import { connectToDB } from './config/db'

const app = express()
const PORT = process.env.PORT || 8080

setEnviroment(app)
connectToDB()
registerRoutes(app)

app.get('/', (req, res) => {
  res.json({ message: `Welcome to the compukitchen api. Running in ${process.env.NODE_ENV} mode.` })
})

app.listen(PORT, () => {
  console.log(`CompuKitchen listening at http://localhost:${PORT}`)
})
