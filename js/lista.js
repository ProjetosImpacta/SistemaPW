const url = "https://go-wash-api.onrender.com/api/auth/address";

async function mostrar_enderecos() {
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
          <td><button onclick='atualizarEndereco("${endereco.title}" , "${endereco.cep}" , "${endereco.address}" , "${endereco.number}", "${endereco.complement}")'>Atualizar </button></td>
        </tr>
      `;
    });

  } else {
    console.log(`Erro: ${api.status}`);
    alert(`Erro: ${api.status}`);
  }
}
function atualizarEndereco(titulo, cep, address, number, complement){

document.getElementById('ModalTitulo').value = titulo
document.getElementById('ModalCep').value = cep
document.getElementById('ModalAddress').value = address
document.getElementById('ModalNumber').value = number
document.getElementById('ModalComplement').value = complement


 $('#ModalAtt').modal('show');
  };

function substituirEndereco(atualizarEndereco){


  
}


mostrar_enderecos();