let produto = [
    {id: 1, nome: "Bomba de Pistão", img: "img/bomba1.webp", legenda: "Caso tenha alguma dúvida sobre esse item, por gentileza entrar em contato conosco através do whatsapp", valor: 2500.00},
    {id: 2, nome: "Bomba de Engrenagem", img: "img/bomba2.webp", legenda: "Caso tenha alguma dúvida sobre esse item, por gentileza entrar em contato conosco através do whatsapp", valor: 2400.00},
    {id: 3, nome: "Bomba DYNAPAC", img: "img/bomba3.webp", legenda: "Caso tenha alguma dúvida sobre esse item, por gentileza entrar em contato conosco através do whatsapp", valor: 3100.00},
    {id: 4, nome: "Bomba ESCAVADEIRA", img: "img/bomba4.webp", legenda: "Caso tenha alguma dúvida sobre esse item, por gentileza entrar em contato conosco através do whatsapp", valor: 4500.00},
    {id: 5, nome: "Bomba A15VSO", img: "img/bomba5.webp", legenda: "Caso tenha alguma dúvida sobre esse item, por gentileza entrar em contato conosco através do whatsapp", valor: 2900.00},
];

const btn = document.getElementById("btnbusca");
const tituloCard = document.getElementById("tituloCard"); 
const caixaInformacoes = document.getElementById("caixaInformacaoes");

btn.addEventListener('click', (event) => {
    event.preventDefault();
    caixaInformacoes.innerHTML = `
        <h1>Consulta de Bombas</h1>
        <form id="pesquisa">
            <input type="text" id="inputPesquisa" placeholder="Digite um ID">
            <button>Consultar</button>
        </form>
    `;
});

document.addEventListener('submit', (event) => {
    if (event.target && event.target.id === 'pesquisa') {
        event.preventDefault();
        
        const input = document.getElementById('inputPesquisa');
        
        if (input) {
            buscarProduto(input.value);
        }
    }
});

function buscarProduto(idDigitado) {
    let produtoEncontrado = produto.find((u) => u.id == idDigitado);

    if (produtoEncontrado) {
        // Injeta os dados da bomba DIRETO no HTML
        caixaInformacoes.innerHTML = `
            <h1>Consulta de Bombas</h1>
            <form id="pesquisa">
                <input type="text" id="inputPesquisa" placeholder="Digite um ID">
                <button>Consultar</button>
            </form>
            <div>
                <img src="${produtoEncontrado.img}" alt="Foto da ${produtoEncontrado.nome}" id="imagemProduto">
                <h2 id="nomeProduto">${produtoEncontrado.nome}</h2>
                <p id="legendaProduto">${produtoEncontrado.legenda}</p>
                <h3 id="valorProduto">R$ ${produtoEncontrado.valor.toFixed(2)}</h3>
            </div>
        `;    
        
    } else {
        // Se não encontrar, recria o formulário e mostra o erro
        caixaInformacoes.innerHTML = `
            <h1>Consulta de Bombas</h1>
            <form id="pesquisa">
                <input type="text" id="inputPesquisa" placeholder="Digite um ID">
                <button>Consultar</button>
            </form>
            <div>
                <h2 style="color: red;">Bomba não encontrada</h2>
                <p>Verifique o ID digitado e tente novamente.</p>
            </div>
        `;
    }
}