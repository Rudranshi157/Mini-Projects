// let Name = prompt("what is your name?");
// let age = prompt("what is your current age?");
// alert("Your name is "+Name+" and your age is "+age);
// let at = "fhg fhvknv";
// console.log(at.replace(" ","mona"));
// let arr = ["hj",'fg'];
// console.log(arr.includes("h"));

// let arr = [1,2,3,4,5];
// let sum = arr.reduce( (res , el) => res + el);
let btn = document.querySelector("button");
btn.addEventListener("click" , function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let dv = document.querySelector("div");
    dv.style.backgroundColor = randomColor;
    console.log("color updated...")
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;

}