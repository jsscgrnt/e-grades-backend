const connection = require('../models/db');

module.exports = {

    async Create(req, res){

        let body = req.body;

        let insertNotas = 
        
        // `INSERT INTO alunos
        // (nome, idade, email, senha, uf, escola, anoEscolar)
        // VALUES
        // ("${body.nome}", ${body.idade}, "${body.email}", "${body.senha}", "${body.uf}", "${body.escola}", "${body.anoEscolar}")`;

        connection.query(insertNotas, err => {
            if(err) console.log(err);
            console.log('Nota inserida no banco');
            return res.status(200).send({'result': 'success'});
        })

    }
}