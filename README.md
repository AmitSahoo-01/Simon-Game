# Simon-Game
Simon Game using JavaScript

# Index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creating Simon Game Using JavaScript</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Simon Says Game</h1>
    <h4>Press any key to start the Game</h4>
    <div class="btn-container">
        <div class="first-line">
            <div class="btn red" type="button" id="red">1</div>
            <div class="btn yellow" type="button" id="yellow">2</div>
        </div>
        <div class="second-line">
            <div class="btn green" type="button" id="green">3</div>
            <div class="btn blue" type="button" id="blue">4</div>
        </div>   
    </div>
    <h3>High Score : </h3>
    <script src="app.js"></script>
</body>
</html>

# style.css
*{
    text-align: center;
}

.btn{
    height: 120px;
    width: 120px;
    border: 10px solid black;
    border-radius: 20%;
    margin: 2rem;
}

.btn-container{
    display: flex;
    justify-content: center;
}

.red{
    background-color: #d95980;
}
.green{
    background-color: #63aac0;
}
.yellow{
    background-color: #f99b45;
}
.blue{
    background-color: #819ff9;
}

.flash{
    background-color: white;
}

# app.js

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

# In feature new features are added
# Happy Coding &smile;