async function login(){
let api = await fetch(url,{
    method:"POST",
    body:JSON.stringify(
        {   
            "email":email,
            "user_type_id":1,
            "password": password,
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    if(api.ok){
        let resposta = await api.json();
        localStorage.setItem["user", json.stringify(resposta)]
        console.log(resposta)
        alert(resposta)
        return
    }

    alert ("erro");

}
// login();

function cadastroEndereco(){
    let user = localStorage.getItem("user");
    console.log
}

cadastroEndereco();