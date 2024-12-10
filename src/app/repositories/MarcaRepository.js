import { consulta } from'../database/conexao.js'


class MarcaRepository {

    create(marca){
        const sql = "INSERT INTO marcas SET ?;"

        return consulta(sql, marca, 'Não foi possivel Cadastrar')
    }



    findAll(){
        const sql = "SELECT * FROM marcas;"
    
        return consulta(sql, 'Não foi possivel Encontrar')
    }



    findById(id){
        const sql = "SELECT * FROM marcas WHERE idmarcas=?;"
    
        return consulta(sql, id, 'Não foi possivel Encontrar')
    }



    update(marca, id){
        const sql = "UPDATE marcas SET ? WHERE idmarcas=?;"
    
        return consulta(sql, id, 'Não foi possivel Atualizar')
    }



    delete(id){
        const sql = "DELETE FROM marcas WHERE idmarcas=?;"
    
        return consulta(sql, id, 'Não foi possivel Apagar')
    }

}

export default new MarcaRepository()