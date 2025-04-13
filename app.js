let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","blue","green"];

let started = false;
let level = 0;
let highScore = level;
let h4 = document.querySelector("h4");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(event){
    if(started==false){
        started = true;

        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function levelup(){
    userSeq = [];
    level++;
    h4.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level ",+ level);

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,600);
        }
    } else{
        if(highScore < level){
            highScore = level;
        }
        h4.innerText=`Game over! you score is ${level} press any key to start`;
        h3.innerText=`High Score : ${highScore}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}