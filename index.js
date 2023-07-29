

let addition = 0
let Element=document.getElementById('count')

function reset() {
    addition= 0;
    document.getElementById('count').innerHTML=addition;
   
}


function add(){
    addition++;
    document.getElementById("count").innerText = addition;
}

function table() {
    for (let count = 1; count < 11; count++) {
            Element.innerHTML+= `2 x${count} = ${count *2} <br>`;}
         document.getElementById("naver")
    }