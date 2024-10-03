async function viaCep() {
    let api = await fetch("https://viacep.com.br/ws/01001000/json/");
    
    if(api.ok){
        let resposta = await api.json();
        localStorage.setItem('via_cep', JSON.stringify(resposta))
        return
    }
}

function getInfoViaCep(){

    let viaCep = JSON.parse(localStorage.getItem('via_cep'));
    console.log(viaCep.logradouro);

}

getInfoViaCep();
