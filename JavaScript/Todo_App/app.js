let butt = document.querySelector("button");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
let inp = document.querySelector("input");
let del = document.querySelectorAll(".delete");

butt.addEventListener("click",function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
})

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }else{
        console.log("don't delete");
    }
})

