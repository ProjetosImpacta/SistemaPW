const loginurl = 'https://go-wash-api.onrender.com/api/login';

async function fazerLogin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    try {
        let api = await fetch(loginurl, {
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "password": password,
                "user_type_id": 1
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (api.ok) {
            let resposta = await api.json();
            alert("Login realizado com sucesso:");
    
            localStorage.setItem('userData', JSON.stringify(resposta));

        
            window.location.href = "home.html"; 

        } else {
       
            let errorResponse = await api.json();

            if (errorResponse.data && errorResponse.data.errors) {
                alert(errorResponse.data.errors);
            }
        }
    } catch (error) {
        console.error("Erro na execução da requisição:", error);
        alert("Erro ao conectar ao servidor. Tente novamente mais tarde.");
    }
}
