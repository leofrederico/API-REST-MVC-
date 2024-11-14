import MarcaRepository from '../repositories/MarcaRepository.js'


class MarcaController {

    // Para Listar Tudo
    async index(req, res){
        const result = await MarcaRepository.findAll()

        res.status(200).send(result);
    } 



    // Para Listar por ID
    async show(req, res){
        const id = req.params.id
        const row = await MarcaRepository.findById(id)

        res.json(row)
    } 



    // Para Criar Dados
    async store(req, res){
        const marca = req.body
        const row = await MarcaRepository.create(marca)

        res.json(row)
    }



    // Para Atualizar Dados
    async update(req, res){ 
        const id = req.params.id
        const marca = req.body
        const row = await MarcaRepository.update(marca, id)

        res.json(row)
    }


    
    // Para Apagar Dados
    async delete(req, res){
        const id = req.params.id
        const row = await MarcaRepository.delete(id)

        res.json(row)
    
    }



}




// Padrão singleton
export default new MarcaController()