//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objt de bd para nossas operações
/*
db.serialize(() => {
    //criar uma tabela ` crasse
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //inserir dados na tabela
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);    
    `
    const values = [
        "http://localhost:3000/img/Recycle.jfif",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "nº 260",
        "Santa Catarinha",
        "Rio do Sul",
        "Papeis e papelão"
    ]

    function afterInsertData(err){
        if (err) {
            return console.log(err)
        }
    
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    //db.run(query, values, afterInsertData)

    //consultar os dados
    db.all(`SELECT * FROM places`, function(err, rows){
        if (err) {
            return console.log(err)
        }
        console.log("Aqui estão os registros")
        console.log(rows)
    })


    //deletar um dado

    
    db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
        if (err) {
            return console.log(err)
        }
        console.log("Registro Deletado")
    })
    

    
}) */