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


function calculateTriangleArea() {
    const base = getInputValueById("triangleBase");
    setInnerTextById("displayInputB", base);

    const height = getInputValueById("triangleHeight");
    setInnerTextById("displayInputH", height);


    const area = 0.5 * base * height;
    setInnerTextById("area", area);

    emptyTheFiled("triangleBase");
    emptyTheFiled("triangleHeight");
}

function calculateRectangleArea() {
    const width = getInputValueById("rectangleWidth");
    setInnerTextById("displayInputW", width);

    const length = getInputValueById("rectangleLength");
    setInnerTextById("display-Input-L", length);

    const area = width * length;
    setInnerTextById("area-rectangle", area);

    emptyTheFiled("rectangleWidth");
    emptyTheFiled("rectangleLength")
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
}