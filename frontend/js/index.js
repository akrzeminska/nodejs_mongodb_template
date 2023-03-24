console.log("Hello World");

document.getElementById("btn").addEventListener("click",pobierzDane);

function pobierzDane(){
    fetch("/posts",{
        method: "GET"
    })
    .then( (resp) => resp.json())
    .then ( data => console.log(data))
}