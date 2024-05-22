var timer = 60;
var score = 0;
var hitnum = 0;

function makeBubble(){

var bubble = "";
    for(var i = 1; i<=200; i++){
        var num = Math.floor(Math.random()*10)
        bubble += `<div class="bubble">${num}</div> `
    }

document.querySelector("#pbtm").innerHTML = bubble
}

function runTimer(){
var timeinterval = setInterval(function(){
    if(timer > 0){
        timer--;
        document.querySelector("#timervalue").textContent = timer
    }
    else{
        clearInterval(timeinterval);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over!!</h1>`;
    }
}, 1000);
}

function hitValue(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hitnum
    console.log(hitnum);
}

function scoreValue(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(res){
        var clickNumber = Number(res.target.textContent);
        if(clickNumber === hitnum){
            scoreValue();
            makeBubble();
            hitValue();
        }
        else{

        }
    }

);

makeBubble();
runTimer();
hitValue();





















































// var a = document.querySelector("h1")
// // a.innerHTML = "Replace this"

// var b = document.querySelector("title")
// b.innerHTML = "Changed this"

// a.addEventListener("click", function(){
//     a.innerHTML = "Replace after click!!!"
// }) 

// var a = document.querySelector("#bulb")

// var btn = document.querySelector(".btn")
// var check = 0

// btn.addEventListener("click", function(){
// if(check == 0){
//     a.style.backgroundColor = "yellow"
//     check = 1
// }
// else{
//     a.style.backgroundColor = "white"
//     check = 0
// }
// })
