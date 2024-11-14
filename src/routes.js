import { Router } from "express"
import MarcaController from "./app/controllers/MarcaController.js"

const router = Router()


// ROTAS

// Criando a ROTA POST (Para Criar uma nova Marca)
router.post('/Marcas', MarcaController.store)


// Criando a ROTA GET (Para Listar todas as Marcas)
router.get('/Marcas', MarcaController.index)


// Criando a ROTA GET (Para Buscar uma Marca por ID)
router.get('/Marcas/:id', MarcaController.show)


// Criando a ROTA PUT (Para atualizar uma Marca por ID)
router.put('/Marcas/:id', MarcaController.update)


// Criando a ROTA DELETE (Para Apagar uma Marca por ID)
router.delete('/Marcas/:id', MarcaController.delete)



export default router