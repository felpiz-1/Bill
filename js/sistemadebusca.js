let produto = [
    {id:1,
     nome:"Bomba de Pistão",
     img:"img/bomba1.webp",
     legenda:"Caso tenha alguma dúvida sobre esse item, por gentileza entrar em contato conosco através do whatsapp",
     valor:2500.00
    },
    {id:1,
     nome:"Bomba de Engrenagem",
     img:"img/bomba2.webp",
     legenda:"Caso tenha alguma dúvida sobre esse item, por gentileza entrar em contato conosco através do whatsapp",
     valor:2400.00
    },
    {id:1,
     nome:"Bomba DYNAPAC",
     img:"img/bomba3.webp",
     legenda:"Caso tenha alguma dúvida sobre esse item, por gentileza entrar em contato conosco através do whatsapp",
     valor:3100.00
    },
    {id:1,
     nome:"Bomba ESCAVADEIRA",
     img:"img/bomba4.webp",
     legenda:"Caso tenha alguma dúvida sobre esse item, por gentileza entrar em contato conosco através do whatsapp",
     valor:4500.00
    },
    {id:1,
     nome:"Bomba A15VSO",
     img:"img/bomba5.webp",
     legenda:"Caso tenha alguma dúvida sobre esse item, por gentileza entrar em contato conosco através do whatsapp",
     valor:2900.00
    },
]

const btn = document.getElementById("btnbusca")
const tituloCard = document.getElementById("tituloCard") 
const caixaInformacoes = document.getElementById("caixaInformacaoes") 
const pesquisa = document.getElementById("pesquisa")

btn.addEventListener('click', (event) =>{
    event.preventDefault();
    caixaInformacoes.innerHTML = `
        <h1>Consulta de Bombas</h1>
        <form id="pesquisa">
            <input type="text" id="inputPesquisa" placeholder="Digite um ID">
            <button>Consultar</button>
        </form>
    `;
    
})