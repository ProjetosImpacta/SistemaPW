const url = 'https://go-wash-api.onrender.com/api/user'

async function cadastrousuario(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpf_cnpj = document.getElementById('cpf_cnpj').value;
    let birthday = document.getElementById('birthday').value;
    let terms = document.getElementById('terms');

    if (password > 8){
        alert('máximo de caracteres atingido!');
        return
    }
    
    if (terms.checked == true){
        let api = await fetch(url,{
            method:"POST",
            body:JSON.stringify(
                {
                    "name":name,
                    "email":email,
                    "user_type_id":1,
                    "password": password,
                    "cpf_cnpj": cpf_cnpj,
                    "terms": 1,
                    "birthday":"2000-10-12"    
                }
            ),
            headers:{
                'Content-Type': 'application/json'
            }
        });
    
        if(api.ok){
            let resposta = await api.json();
            console.log(resposta);
            alert('Cadastrado com sucesso!');
            window.location.href = "../index.html"
            return;
        }
        let respostaErro = await api.json();
        alert(respostaErro.data.errors.cpf_cnpj);
        alert(respostaErro.data.errors.email);
        alert(respostaErro.data.errors.password);
    }else{
        alert('Aceite os termos de uso!');
    }
}
    