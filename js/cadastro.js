//JS principal do projeto MVC
const url = 'https://go-wash-api.onrender.com/api/user'
async function cadastro(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let cpf_cnpj = document.getElementById('cpf_cnpj').value
    let password = document.getElementById('password').value
    let telefone = document.getElementById('telefone').value
    let birthday = document.getElementById('birthday').value
    let terms = document.getElementById('terms').checked
    let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify(
            {
                "name":name,
                "email": email,
                "user_type_id":1,
                "password": password,
                "cpf_cnpj": cpf_cnpj,
                "terms": 1,
                "birthday": birthday    
            }
        ),
        headers:{
            'Content-Type': 'application/json'
        }  

    });

    if (api.ok){
        let resposta = await api.json();
        console.log(resposta);
        return;
    }
    let respostaErro = await api.json();
    alert(respostaErro.data.errors.cpf_cnpj[0])

}



