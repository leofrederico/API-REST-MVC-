
import express from "express";
import routes from './routes.js'

const app = express(); 


app.use(express.json()) 

// Usando o Router
app.use(routes)




export default app 


