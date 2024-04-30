function getElenco(){
    fetch('https://3245-raaaaaaaad-flask-cu85srasstv.ws-eu110.gitpod.io/elenco')
    .then(Response=> Response.json())
    .then(data=>{
        let elenco='';
        for (let regione in data){
            elenco += '<a href ="/info/'+ data[regione] + '">' + data[regione] + '</a> <br />';
        }
        document.getElementById('elenco').innerHTML = data
    })
}