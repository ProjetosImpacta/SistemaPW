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
          <td><button onclick="atualizarEndereco(${endereco.id})">Atualizar</button></td>
        </tr>
      `;
    });

  } else {
    console.log(`Erro: ${api.status}`);
    alert(`Erro: ${api.status}`);
  }
}



mostrar_enderecos();