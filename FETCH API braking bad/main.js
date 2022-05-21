const api = "https://www.breakingbadapi.com/api/characters";
 
async function getapi(){
    const res = await fetch(api);
    const data = await res.json();
    //console.log(data);
    data.map(function (r){
    //console.log(r);
        document.querySelector("#main").innerHTML += // + to add the next div 
        `<div class="main2">
        <h1>${r.name} `+` <br> `+` (${r.nickname}) </h1>` +
        `<img width="400"; height="500"; src="${r.img}">
        </div>`;
    })
}
    getapi();