'use strict'

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage()
{
    count++;
     if(count > 4){
        count = 1;
}
    document.getElementById("radio"+count).checked = true;
}

// const roupas = [
//     {
//         id: 1,
//         descricao:"Double Crazy Zíper Glamour Vestido",
//         preco: 'R$99.95',
//         parcelamento: ' 6x de R$16,66 sem juros',
//         imagem:'./img/vestido1.webp'
//     },
//     {
//         id: 2,
//         descricao:"Ocasional Agasalhos",
//         preco:'R$131,95',
//         parcelamento:'6x de R$21,99 sem juros',
//         imagem:'./img/casaco1.webp'

//     },
//     {
//         id:3,
//         descricao:"Cordão Bordado Calça Feminina",
//         preco:'R$89,90',
//         parcelamento:'6x de R$14,98 sem juros ',
//         imagem: './img/cla1.webp'
//     }


// ]

// const criarCard = (produto) =>{

//     const card = document.createElement('section')
//     card.classList('card')
//     card.innerHTML =
//     `
//     <ul class="card">
//             <li class="card_items">
//                <img src="${produto.imagem}" alt="vestido1" class="card_imagem">
//                 <span class="descricao">
//                     ${produto.descricao}
//                 </span>
//                 <span class="preco">
//                     ${produto.preco}
//                 </span>
//                 <span class="parcelamento">
//                     ${produto.parcelamento}
//                 </span>
//             </li>
//         </ul>
    
    
//     `
//     return card

// }

// const carregarProdutos = (produto) => {

//     const container = document.querySelector('.container-card')
//     const cards = produto.map(criarCard)

//     container.replaceChildren(...cards)
// }

// carregarProdutos(roupas)


