let input = document.querySelector(".input");
let bntAdd = document.querySelector(".add");
let contaner = document.querySelector(".tasks");
let array = [];
let obj = {};
let x = JSON.parse(localStorage.getItem("input"));

input.addEventListener("keyup", () => {
    obj = {
        title: input.value,
        id: Date.now()
    }
    console.log(obj);
})
bntAdd.addEventListener("click", () => {
    if (input.value != "") {
        array.push(obj);
        let a = JSON.stringify(array);
        localStorage.setItem("input", a);
        let x = JSON.parse(localStorage.getItem("input"));
        console.log(x[x.length - 1].title);
        let div = document.createElement("div");
        div.style = "display: flex;justify-content: space-around;align-items: center;";
        let delBnt = document.createElement("button");
        delBnt.style = "width: 70px;height: 30px;border-radius: 5px;border: solid 1px #cfc1c1; ";
        delBnt.innerHTML = "Remove";
        let p = document.createElement("p");
        p.append(x[x.length - 1].title);
        div.append(p);
        div.append(delBnt);
        contaner.append(div);
        delBnt.addEventListener("click", () => {
            array.splice(i, 1);
            let a = JSON.stringify(array);
            localStorage.setItem("input", a);
            div.remove();
        })
}
})
for (i = 0; i < x.length; i++) {
    let p = document.createElement("p");
    let div = document.createElement("div");
    div.style = "display: flex;justify-content: space-around;align-items: center;";
    let delBnt = document.createElement("button");
    delBnt.style = "width: 70px;height: 30px;border-radius: 5px;border: solid 1px #cfc1c1; ";
    delBnt.innerHTML = "Remove";
    p.append(x[i].title);
    div.append(p);
    div.append(delBnt);
    contaner.append(div);
    console.log(x[i]);
    array.push(x[i]);
    delBnt.addEventListener("click", () => {
        let f = JSON.parse(localStorage.getItem("input"));
        console.log(f);
        div.remove();
        for (let i = 0; i < 1; i++) {
            x.splice(i, 1);
            let a = JSON.stringify(x);
            localStorage.setItem("input", a);
            console.log(x);
        }
    })
}


