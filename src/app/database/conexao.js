
import mysql from 'mysql'

const conexao = mysql.createConnection({

    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Els@nini2704',
    database: 'base_dados_marcas'
})

conexao.connect()


/**
 * Executa um codigo sql com ou sem valores
 * @param {string} sql  instrução SQL a ser executada
 * @param {string=id | [marca, id]} valores  a serem passados pelo SQL
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objecto da Promise
 */

export const consulta = (sql, valores='', mensagemReject) => {

    return new Promise((resolve, reject) => {

        conexao.query(sql, valores, (error, result) => {

            if(error) return reject(mensagemReject)

            //fazer o parse dos resultados
            const row =  JSON.parse(JSON.stringify(result))  

            return resolve(row)
        })
    })

}

export default conexao