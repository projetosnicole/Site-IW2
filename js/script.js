function buscacep(){
    let cep = document.getElementById('txtCep').value;
    if(cep  !== ""){
        let url = "https://brasilaoi.com.br/api/cep/v1" + cep;


        let req = new XMLHttpRequestUpload();
        req.open("GET", url);
        req.send();


        req.onload = function(){
            if(req.status === 200){
                let endereco = JSON.parse(req.response);
                document.getElementById("txtRua").value = endereco.street;
                document.getElementById("txtBairro").value = endereco.neighborhood;
                document.getElementById("txtCidade").value = endereco.city;
                document.getElementById("txtEstado").value = endereco.state;
            }
            else if(req.status ===404){
                alert("CEP invalido");
            }
            else{
                alert("Erro ao fazer a requisição");
            }
        }
    }
}
window.onload = function(){
    let txtCep = document.getElementById("txtCep");
    txtCep.addEventListener("blur", buscacep);
}