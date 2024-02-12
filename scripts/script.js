const color = [ "#3C9EE7", "#E7993C",
    "#E73C99", "#3CE746", "#E7993C"];
            

// smiller function -----------------
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId).value;
    const inputValue = parseFloat(inputField);
    return inputValue;
}

function emptyTheFiled(inputFieldId) {
    document.getElementById(inputFieldId).value = '';
}

function setInnerTextById(element, value) {
    document.getElementById(element).innerText = value;
}

function mouseEnterEvent(containerId) {
    document.getElementById(containerId).addEventListener('mouseenter', function () {
    document.getElementById(containerId).style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    })
}

function mouseLeaveEvent(containerId) {
    document.getElementById(containerId).addEventListener('mouseleave', function () {
    document.getElementById(containerId).style.backgroundColor = "";
    })
}

function displayValue(nameItem, value) {
    count++;
    const li = document.createElement("li");
    li.innerHTML = `${count} ${nameItem} &nbsp &nbsp  ${value} cm<sup>2</sup> &nbsp <button class="py-2 rounded-md px-4 bg-[#1090D8] text-white text-xs">Covert to m<sup>2</sup></button>`;
    ul.appendChild(li);
}

// smiller function Calling-----------------
mouseEnterEvent("triangle-container");
mouseLeaveEvent("triangle-container");
mouseEnterEvent("rectangle-container");
mouseLeaveEvent("rectangle-container");
mouseEnterEvent("parallelogram-container");
mouseLeaveEvent("parallelogram-container");
mouseEnterEvent("rhombus-container");
mouseLeaveEvent("rhombus-container");
mouseEnterEvent("pentagon-container");
mouseLeaveEvent("pentagon-container");
mouseEnterEvent("ellipse-container");
mouseLeaveEvent("ellipse-container");

const ul = document.getElementById("ul-container");
let count = 0;

function calculateTriangleArea() {
    const base = getInputValueById("triangleBase");
    setInnerTextById("displayInputB", base);

    const height = getInputValueById("triangleHeight");
    setInnerTextById("displayInputH", height);


    const area = 0.5 * base * height;
    setInnerTextById("area", area);

    emptyTheFiled("triangleBase");
    emptyTheFiled("triangleHeight");

    displayValue("Triangle", area);
}

function calculateRectangleArea() {
    const width = getInputValueById("rectangleWidth");
    setInnerTextById("displayInputW", width);

    const length = getInputValueById("rectangleLength");
    setInnerTextById("display-Input-L", length);

    const area = width * length;
    setInnerTextById("area-rectangle", area);

    emptyTheFiled("rectangleWidth");
    emptyTheFiled("rectangleLength");

    displayValue("Rectangle", area);
}

function calculateParallelogramArea() {
    const base = getInputValueById("parallelogram-base");
    setInnerTextById("display-parallelogram-base", base);

    const heigth = getInputValueById("parallelogram-heigth");
    setInnerTextById("display-parallelogram-height", heigth);

    const area = base * heigth;
    setInnerTextById("area-parallelogram", area)

    emptyTheFiled("parallelogram-base");
    emptyTheFiled("parallelogram-heigth");

    displayValue("Parallelogram", area);
}

function calculateRhombusArea() {
    const d1 = getInputValueById("rhombusD1Filed");
    setInnerTextById("display-rhombusD1", d1);

    const d2 = getInputValueById("rhombusD2Filed")
    setInnerTextById("display-rhombusD2", d2);

    const area = 0.5 * d1 * d2;
    setInnerTextById("area-rhombus", area);

    emptyTheFiled("rhombusD1Filed");
    emptyTheFiled("rhombusD2Filed");

    displayValue("Rhombus", area);
}

function calculatePentagonArea() {
    const base = getInputValueById("pentagonPFiled");
    setInnerTextById("display-pentagonP", base);

    const height = getInputValueById("pentagonBFiled")
    setInnerTextById("display-pentagonB", height);

    const area = 0.5 * base * height;
    setInnerTextById("area-pentagon", area);

    emptyTheFiled("pentagonPFiled");
    emptyTheFiled("pentagonBFiled");

    displayValue("Pentagon", area);
}

function calculateEllipseArea() {
    const base = getInputValueById("ellipseAFiled");
    setInnerTextById("display-ellipseA", base);

    const height = getInputValueById("ellipseBFiled")
    setInnerTextById("display-ellipseB", height);

    const area = 3.1416 * base * height;
    setInnerTextById("area-ellipse", area);

    emptyTheFiled("ellipseAFiled");
    emptyTheFiled("ellipseBFiled");

    displayValue("Ellipse", area);
}