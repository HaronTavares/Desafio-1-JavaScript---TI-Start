function criarLista(listaFonte, listaNova) {
    for(let objeto of listaFonte) {
        const li = document.createElement('li');

        for(let propriedade in objeto){
            if(propriedade == 'preco'){
                listaNova.appendChild(li).setAttribute('data-preco', objeto[propriedade]);

            } else {
                listaNova.appendChild(li).textContent = `${objeto[propriedade]}`;
            }
        }
    }
}

function addNaCesta(listaDeProdutos, idCesta, total){
    let totalParcial = 0;
    let listaCesta = document.querySelector(`#${idCesta}`);

    for(let linha of listaDeProdutos){
        linha.addEventListener('click', function(){
            let itensDaCesta = document.querySelectorAll(`#${idCesta} > li`);
            let flag = 0;

            for(let item of itensDaCesta){ 
                if(item.innerHTML === linha.innerHTML){
                    alert(`O item ${item.innerHTML} já está na sua cesta!`);
                    flag = 1;
                }            
            }

            if(flag != 1){
                        const li = document.createElement('li');
                        listaCesta.appendChild(li).textContent = linha.innerHTML;
            
                        totalParcial += +(linha.dataset.preco);
                        total.value = `R$ ${totalParcial.toFixed(2).replace('.',',')}`;
                    }
        })
    }
}

export {criarLista, addNaCesta}