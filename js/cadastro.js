const url = 'https://go-wash-api.onrender.com/api/user'

async function cadastrousuario(){
    try{
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let cpf_cnpj = document.getElementById('cpf_cnpj').value;
        let birthday = document.getElementById('birthday').value;
        let terms = document.getElementById('terms');
        
        if (terms.checked == true){

            if (password.length > 8){
                document.getElementById('password').style.border = '1px solid red';
                document.getElementById('spanPassword').style.display = 'block';
                return
            }else{
                document.getElementById('password').style.border = 'none';
                document.getElementById('spanPassword').style.display = 'none';
            }

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
                        "birthday": birthday  
                    }
                ),
                headers:{
                    'Content-Type': 'application/json'
                }
            });
        
            if(api.ok){
                let resposta = await api.json();
                // console.log(resposta);

                swal.fire({
                    icon: 'success',
                    title: 'Cadastrado com sucesso!'
                });

                window.location.href = "../index.html"
                return;
            }
            
            let respostaErro = await api.json();
            console.log(respostaErro);

            if(respostaErro.data.errors.name){
                document.getElementById('name').style.border = '1px solid red';
                document.getElementById('spanName').style.display = 'block';
                document.getElementById('spanName').textContent = respostaErro.data.errors.name[0];
                return;
            }else{
                document.getElementById('name').style.border = 'none';
                document.getElementById('spanName').style.display = 'none';
            }

            if(respostaErro.data.errors.email){
                document.getElementById('email').style.border = '1px solid red';
                document.getElementById('spanEmail').style.display = 'block';
                document.getElementById('spanEmail').textContent = respostaErro.data.errors.email[0];
                return;
            }else{
                document.getElementById('email').style.border = 'none';
                document.getElementById('spanEmail').style.display = 'none';
            }

            if(respostaErro.data.errors.password){
                document.getElementById('password').style.border = '1px solid red';
                document.getElementById('spanPassword').style.display = 'block';
                document.getElementById('spanPassword').textContent = respostaErro.data.errors.password[0];
                return;
            }else{
                document.getElementById('password').style.border = 'none';
                document.getElementById('spanPassword').style.display = 'none';
            }
            
            if(respostaErro.data.errors.cpf_cnpj[0]){
                document.getElementById('cpf_cnpj').style.border = '1px solid red';
                document.getElementById('spanCpf').style.display = 'block';
                document.getElementById('spanCpf').textContent = respostaErro.data.errors.cpf_cnpj[0];
                return;
            }else{
                document.getElementById('cpf_cnpj').style.border = 'none';
                document.getElementById('spanCpf').style.display = 'none';
            }

        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Aceite os termos de uso!'
            });
        }
    }catch(error){
        console.error(error);
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Ocorreu um erro inesperado. Tente novamente mais tarde.'
        });
    }
}
    