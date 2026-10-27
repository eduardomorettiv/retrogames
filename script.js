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

form.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    const nome = document.getElementById("nome").value.trim()
    const plataforma = document.getElementById("artista").value.trim()
    const desenvolvedora = document.getElementById("genero").value.trim()
    const imagem = document.getElementById("imagem").value.trim()
    const preco = Number(document.getElementById("preco").value)
    const data = document.getElementById("data").value.trim()

    criarCard(nome, plataforma, desenvolvedora, imagem, preco, data)
    form.reset()
    modal.close()
})
function criarCard(nome, plataforma, desenvolvedora, imagem, preco,data){
    mensagemVazia.hidden = true;

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
    const data_registro = document.createElement("p")
    data_registro.textContent = "data do registro:" + data
    info.append(titulo, nomeArtista, nomeGenero, valor, data_registro)
    card.append(capa, info)
    lista.appendChild(card)
}