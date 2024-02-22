let jokeContainer=document.getElementById("jokeid")

let buttonElement=document.getElementById("jokebutton")


buttonElement.onclick=function(){
    let url="https://apis.ccbp.in/jokes/random"
    let options={
        method:"GET"
    }
    fetch(url,options).then(function(response){
        return response.json()
    }).then(function(json){
        jokeContainer.textContent=JSON.stringify(json.value)
    })
}