function getElenco(){
    fetch('https://3245-raaaaaaaad-flask-cu85srasstv.ws-eu110.gitpod.io/elenco')
    .then(Response=> Response.json())
    .then(data=>{
        document.getElementById('elenco').innerHTML = data
        for (let regione in data){
            document.getElementById('elenco').innerHTML += data[regione] 
        }
    })
}