function logar(){

    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value
    
    let dados = [
                    { "id": Date.now(),"nome": "nicole","senha": 12345 }, //0
                    { "id": Date.now(),"nome": "sara","senha": 2222 }, //1
                    { "id": Date.now(),"nome": "jose","senha": 3333 } //2
                ]
                 
    for(let i=0;dados.length > i;i++){
    if(nome == dados[i].nome && senha == dados[i].senha){
        alert("Está logado!")
        setTimeout(function() {
            window.location.href = "inicio.html";
        });
        break
    }
    }
    
    }
    
    function teste(){
    
        let item = ["zucas"]
    
        let nomes = [["bruno", "ZAZ", "Mônica"] + "," + item]
    
        localStorage.setItem("todos", nomes)
    
        // Retrieve
        document.getElementById("demo").innerHTML = localStorage.getItem("todos")
    }