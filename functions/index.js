//import tools
import { onRequest } from 'firebase-functions/v2/https'
import express from 'express'
import cors from 'cors'
import { getAllCoffee, addCoffee } from './src/coffees.js'
//start express app
const app = express()
app.use(cors())
app.use(express.json())
// create route
app.get("/test",(req ,res) => res.send("It is  working!"))

app.get("/coffees", getAllCoffee)
app.post("/coffees", addCoffee)
//tell google to create port function and point to api

export const api = onRequest(app)