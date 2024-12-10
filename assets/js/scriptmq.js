//Um código servirá para munitorar o tamanho de tela. quando a tela chegar em um certo tamanho, o menu será exibido//

function mudouTamanho() {
    if(window.innrWidth >= 768){
        itens.style.display = 'block'
     } else {
        itens.style.display = 'none'
     }
}

function clickMenu() {
   if (itens.style.display == 'block') {
       itens.style.display = 'none'
   } else {
       itens.style.display = 'block'
   }
}
