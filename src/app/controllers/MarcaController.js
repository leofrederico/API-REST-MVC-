import MarcaRepository from '../repositories/MarcaRepository.js'


class MarcaController {

    async index(req, res){
        const result = await MarcaRepository.findAll()

        res.status(200).send(result);
    } 



    async show(req, res){
        const id = req.params.id
        const row = await MarcaRepository.findById(id)

        res.json(row)
    } 



    async store(req, res){
        const marca = req.body
        const row = await MarcaRepository.create(marca)

        res.json(row)
    }



    async update(req, res){ 
        const id = req.params.id
        const marca = req.body
        const row = await MarcaRepository.update(marca, id)

        res.json(row)
    }



    async delete(req, res){
        const id = req.params.id
        const row = await MarcaRepository.delete(id)

        res.json(row)
    
    }

}
export default new MarcaController()