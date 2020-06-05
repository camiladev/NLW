//console.log();
//UFs
//https://servicodados.ibge.gov.br/api/v1/localidades/estados
//Municipios por UFs
//https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios


/*document
    .querySelector('select[name=uf]')
    .addEventListener('change',() => {
        console.log()
    })*/

function populateUFs(){
    const ufSelect = document.querySelector('select[name=uf]')
        
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then((res)=>{ return res.json()})
        .then(states => {
            for(state of states){
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector('select[name=city]')
    const stateInput = document.querySelector('input[name=state]')
    console.log(event.target.value)
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url =`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then((res)=>{ return res.json()})
        .then(cities => {
            
            for(city of cities){
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false
        })
}

document
    .querySelector('select[name=uf]')
    .addEventListener('change', getCities)




//Itens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
    
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    
    const itemLi = event.target

    //adicionae ou remover uma classe em javascript
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id

    console.log("Item ID: ",itemId)

    //verificar se existem itens selecionados, se sim pegar os item
    const alreadySelected = selectedItems.findIndex(function(item){
        const itemFound = item == itemId
        
        return itemFound
    })
    console.log(alreadySelected)
    //se já estiver selecionado
    if(alreadySelected >= 0){

        //tirar da selecao
        const filteredItems = selectedItems.filter(function(item){
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })
        console.log(filteredItems)
        selectedItems = filteredItems

    }else {
        //se não tiver selecionado
        //adicionar a selecao
        selectedItems.push(itemId)
        console.log(selectedItems)
    }

    console.log("selected Items: ",selectedItems)

    collectedItems.value = selectedItems


}

