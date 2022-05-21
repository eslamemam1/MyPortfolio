///////////////////////////////////////////// chalange //////////////////////////////////////////////////////
let sub = document.querySelector("form > [name='create']");
let seldiv = document.querySelectorAll(".input");
let textValue = seldiv[1].value;
let numValue = seldiv[0];
let recA = document.querySelectorAll(".results");
console.log(recA);
console.log(sub);
console.log(numValue);

let selectdiv = seldiv[2][0];
let selectSection = seldiv[2][1];
console.log(selectdiv);
console.log(selectSection);
sub.onclick = function () {
    for (let i = 0; i < seldiv[0].value; i++) {
        let select1 = seldiv[2].value;
        console.log(select1);
        let div = document.createElement(select1);
        div.className = "box";
        div.append(seldiv[1].value);
        let box = document.querySelectorAll(".box");
        //x.length = 1;
        /*
         if (box.length === 1) {
             box[0].remove();
             console.log(box);
         }
         */
        //document.body.appendChild(div);
        let rec = document.querySelector(".results");
        numValue.onclick = function () {
            document.querySelectorAll(".results .box").forEach((box) => box.remove());
        }
        // let div2= document.createElement("div");
        //  rec.appendChild(div2);
        if (seldiv[2] === selectdiv ) {
            selectdiv.onclick = function () {
                let divR = document.createElement("div");
                divR.className = "box";
                rec.appendChild(divR);
                console.log(divR)
            }
        }
        if (seldiv[2] === selectSection) {
            selectSection.onclick = function () {
                let section = document.createElement("section");
                section.className = "box";
                rec.appendChild(section);
                console.log(section);
            }
    }
        if (rec !== "") {
            rec.appendChild(div);
        }
    }
    console.log(seldiv[0].value);
    console.log(seldiv[1].value);
}

