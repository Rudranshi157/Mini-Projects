let gameSeq = [];
let userSeq = [];
let high = 0;
let btns = ["yellow", "red", "purple" , "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function () {
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    high = Math.max(high,level);
    h2.innerHTML = `Level ${level} `;

    //random btn choose
    let randIdx = Math.floor(Math.random() *4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}

function checkAns(idx) {
    if(userSeq[idx]== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Highest Score ${high}  <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor = "white";    
        }, 150);
        reset();

    }
}

function btnPress() {
    let butn = this;
    userFlash(butn);

    userColor = butn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


// promise concept ---> not part of this game

let h1 = document.querySelector("h1");

function changeColor(color , delay){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    });
}

changeColor("red",1000)
    .then(() => {
        console.log("red color was completed");
        return changeColor("orange",1000);
    })
    .then(() => {
        console.log("orange color was completed");
        return changeColor("yellow",1000);
    })
    .then(() => {
        console.log("yellow color was completed");
        return changeColor("green",1000);
    })
    .then(() => {
        console.log("green color was completed");
    })

// function saveToDb(data) {
//     return new Promise((resolve , reject) => {
//         let internetSpeed = Math.floor(Math.random() *10) +1;
//         if( internetSpeed > 4) {
//             resolve("success : data was saved");
//         }else{
//             reject("failure : weak connection");
//         }
//     });
// }

// saveToDb("apna college")
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log("result of promise: ",result);
//         return saveToDb("HelloWorld");
//     })
//     .then((result) => {
//         console.log("data2 saved");
//         console.log("result of promise: ",result);
//         return saveToDb("RadheKrishna")
//     })
//     .then((result) => {
//         console.log("data3 saved");
//         console.log("result of promise: ",result);
//     })
//     .catch((error) => {
//         console.log("promise was rejected");
//         console.log("error of promise: ",error);
//     });

