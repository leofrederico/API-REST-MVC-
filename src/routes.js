import { Router } from "express"
import MarcaController from "./app/controllers/MarcaController.js"

const router = Router()



router.post('/Marcas', MarcaController.store)



router.get('/Marcas', MarcaController.index)



router.get('/Marcas/:id', MarcaController.show)



router.put('/Marcas/:id', MarcaController.update)



router.delete('/Marcas/:id', MarcaController.delete)



export default router