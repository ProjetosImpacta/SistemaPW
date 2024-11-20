async function sair() {
    const url = 'https://go-wash-api.onrender.com/api/auth/logout'

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (!userData || !userData.access_token) {
        console.error('Nenhum usuário logado.');
        alert('Nenhum usuário logado.');
        return;
    }

        try {
            let api = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + userData.access_token,
                },
              });
    
            
            if (!api.ok) {
                throw new Error('Falha ao realizar logout');
            }
            alert("LogOut realizado com sucesso, até mais!");
            // Limpa os dados de autenticação do localStorage
            localStorage.removeItem('userData');
            
            window.location.href = '../index.html'; 
            
        } catch (error) {
            console.error('Erro ao tentar fazer o logout:', error);
        }
    }