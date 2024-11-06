

async function mostrar_enderecos() {
  const url = "https://go-wash-api.onrender.com/api/auth/address";
  const userData = JSON.parse(localStorage.getItem('userData'));
  
  let api = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + userData.access_token,
    },
  });

  if (api.ok) {
    let resposta = await api.json();
    console.log(resposta);

    let tabelaUsuarios = document.getElementById("tabela-usuarios");
    let corpoTabela = tabelaUsuarios.tBodies[0];

    corpoTabela.innerHTML = "";
    resposta.data.forEach(endereco => {
      corpoTabela.innerHTML += `
        <tr>
          <td>${endereco.title}</td>
          <td>${endereco.cep}</td>
          <td>${endereco.address}</td>
          <td>${endereco.number}</td>
          <td>${endereco.complement}</td>
          <td><button onclick='modaOpenAtt("${endereco.title}" , "${endereco.cep}" , "${endereco.address}" , "${endereco.number}", "${endereco.complement}", "${endereco.id}")'>Atualizar </button></td>
        </tr>
      `;
    });

  } else {
    console.log(`Erro: ${api.status}`);
    alert(`Erro: ${api.status}`);
  }
  
}
function modaOpenAtt(titulo, cep, address, number, complement, id){
  document.getElementById('modalIdEndereco').value = id
  document.getElementById('ModalTitulo').value = titulo
  document.getElementById('ModalCep').value = cep
  document.getElementById('ModalAddress').value = address
  document.getElementById('ModalNumber').value = number
  document.getElementById('ModalComplement').value = complement

  $('#ModalAtt').modal('show');
};

async function atualizarEndereco(){
  const userData = JSON.parse(localStorage.getItem('userData'));
  const id = document.getElementById('modalIdEndereco').value;
  const titulo = document.getElementById('ModalTitulo').value;
  const cep = document.getElementById('ModalCep').value;
  const address = document.getElementById('ModalAddress').value;
  const number = document.getElementById('ModalNumber').value;
  const complement = document.getElementById('ModalComplement').value;
  
  const urlAtt = "https://go-wash-api.onrender.com/api/auth/address/" + id;
  console.log("Teste", titulo, cep, address, number, complement);


  let api = await fetch(urlAtt, {
    method: "POST",
    body: JSON.stringify({
      "title": titulo,
      "cep": cep,
      "address": address,
      "number": number,
      "complement": complement
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + userData.access_token,
    },
  });

  if (api.ok) {
    let resposta = await api.json();
    console.log('resposta', resposta);

    $('#ModalAtt').modal('hide');
    mostrar_enderecos();

  } else {
    console.log(`Teste`);
    alert(`Erro: ${api.status}`);
  }


}

mostrar_enderecos();