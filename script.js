var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var whichListItem = document.getElementById("list")
var whichDeleteButton = document.getElementById("list")
var isDeleteAll = document.getElementById("deleteAll");
var idNo = 1;

function inputLength() {
    return input.value.length;
}

function createListElement() {
        var li = document.createElement("li");
        li.id = "item" + idNo;
        var buttonNeu = document.createElement("button");
        buttonNeu.id = "button" + idNo;
        idNo++;
        buttonNeu.appendChild(document.createTextNode("löschen"));
        li.appendChild(buttonNeu);
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ("");
    }

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}

function toggleDoneOrRemove(e) {
    var listItem = document.getElementById(e.target.id);
    if (listItem.tagName === "LI") {
        listItem.classList.toggle("done");
    } else if (listItem.tagName === "BUTTON") {
        listItem.parentElement.remove();
    }
}

function clearUl() {
    ul.innerHTML = "Meine Aufgaben";
}

whichListItem.addEventListener("click", toggleDoneOrRemove)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeypress);
isDeleteAll.addEventListener("click", clearUl)

// +++ BACKGROUND GENERATOR +++ \\

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var h3 = document.getElementById("h3");
var randomButton = document.getElementById("random");

function updateH3() {
    h3.innerHTML = "Farbe 1: " + color1.value + "; Farbe 2: " + color2.value + "; CSS: background: linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
}

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    updateH3();
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

var randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

function randomize() {
    color1.value = randColor()
    color2.value = randColor()
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    updateH3();
}

randomButton.addEventListener("click", randomize);

//randomize()