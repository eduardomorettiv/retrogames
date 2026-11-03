const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "atividade"
})

//Testar a conexão
db.connect((erro)=>{
    if(erro){
        console.error("Erro ao conectar:", erro)
    }else{
        console.log("Conectao ao BD")
    }
})

//Listar jogos
const mostrarJogos = (req, res) => {
    const sql = "SELECT nome, plataforma, desenvolvedora, imagem, preco, data FROM jogos"
    db.query(sql,(erro, resultado)=>{
        if(erro){
            return res.status(500).send("Erro ao consultar o BD")
        }
        res.send(resultado)
    })
}

//Cadastrar Jogos
const novoJogo = (req, res)=>{
    const{nome, plataforma, desenvolvedora, imagem, preco, data} = req.body

    if(nome && plataforma && desenvolvedora && imagem && preco && data){
        const sql = "INSERT INTO jogos (nome, plataforma, desenvolvedora, imagem, preco, data) VALUES (?, ?, ?, ?, ?, ?)"
        const valores = [nome, plataforma, desenvolvedora, imagem, preco, data]

        db.query(sql, valores,(erro, resultado)=>{
            if(erro){
                return res.status(500).send("Erro ao inserir jogo")
            }
            res.send("Jogo cadastrado com sucesso")
        })
    }else{
        res.status(400).send("Erro: Preencha todos os campos")
    }
}

//Middlewares
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const porta = 3000

//Routes
app.get("/listar", mostrarJogos)
app.post("/cadastrar", novoJogo)

app.listen(porta, ()=>{
    console.log(`Servidor rodando: http://localhost:${porta}/listar`)
    console.log(`Página http: http://127.0.0.1:5500/index.html`)
})