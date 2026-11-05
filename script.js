const API_URL = "http://localhost:3000"

const cadastrar = document.getElementById("cadastrar")
const cancelar = document.getElementById("cancelar")
const modal = document.getElementById("modalCadastro")
const form = document.getElementById("formulario")
const lista = document.getElementById("listarjogos")
const mensagemVazia = document.getElementById("mensagemVazia")

cadastrar.addEventListener("click", ()=>{
    modal.showModal()
})
cancelar.addEventListener("click", ()=>{
    modal.close()
})

//Listar jogos(GET)
async function listarJogos() {
    try{
        const resposta = await fetch(API_URL + '/listar')
        const jogos = await resposta.json()

        lista.innerHTML=""

        if(jogos.length == 0){
            mensagemVazia.hidden = false
            lista.appendChild(mensagemVazia)
            return
        }

        mensagemVazia.hidden = true
        //Renderizar os jogos encontrados
        jogos.forEach(jogo => {
            criarCard(jogo.nome, jogo.plataforma, jogo.desenvolvedora, jogo.imagem, jogo.preco, jogo.data)
        });
    }catch (erro){
        alert("Erro ao listar jogos, veja se o server está ligado")
    }
}

//Cadastrar jogo (POST)
form.addEventListener("submit",async (evento)=>{
    evento.preventDefault()

        const novoJogo = {
        nome: document.getElementById("nome").value.trim(),
        plataforma: document.getElementById("artista").value.trim(),
        desenvolvedora: document.getElementById("genero").value.trim(),
        imagem: document.getElementById("imagem").value.trim(),
        preco: Number(document.getElementById("preco").value)
    }
    try{
        const resposta = await fetch(API_URL + '/cadastrar', {
            method: "POST",
            headers: {"Content-TYPE": "application/json"},
            body: JSON.stringify(novoJogo)
        })
        if(resposta.ok){
            form.reset()
            modal.close()
            listarJogos()
        }else{
            alert("Erro ao salvar jogos")
        }
    }catch{
        alert("Erro de conexão com o servidor")
    }
})

function criarCard(nome, plataforma, desenvolvedora, imagem, preco){

    const card = document.createElement("article")
    card.classList.add("card-jogo")

    const capa = document.createElement("div")
    capa.classList.add("capa")

    const imagemCapa = document.createElement("img")
    imagemCapa.src = imagem
    capa.appendChild(imagemCapa)

    const info = document.createElement("div")
    info.classList.add("info-disco")

    const titulo = document.createElement("h3")
    titulo.textContent = nome

    const nomeArtista = document.createElement("p")
    nomeArtista.textContent = "Plataforma:" + plataforma

    const nomeGenero = document.createElement("p")
    nomeGenero.textContent = "Desenvolvedora: " + desenvolvedora

    const valor = document.createElement("strong")
    valor.textContent = preco.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})

    info.append(titulo, nomeArtista, nomeGenero, valor)
    card.append(capa, info)
    lista.appendChild(card)
}

listarJogos()