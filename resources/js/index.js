

window.onload = (event) => {

    console.log("Página cargada")

    const buttons = document.getElementsByTagName("button");

    addSVG(buttons);

    addEvent(buttons);

};


function addEvent(buttons){

    console.log("Lista de elementos para eventos: " + buttons);

    for (let i = 0; i < buttons.length; i++) {

        const element = buttons[i];

        console.log(element);

        element.addEventListener("mouseover", () => onMouseOverEvent(element));
        element.addEventListener("mouseleave", () => onMouseLeaveEvent(element));

    }

}

function onMouseOverEvent(element){

    const red = element.children[1].children[0];
    const blue = element.children[1].children[1];

    red.setAttribute("visibility", "visible");
    blue.setAttribute("visibility", "visible");

    console.log("Visibility added");

}

function onMouseLeaveEvent(element){

    const red = element.children[1].children[0];
    const blue = element.children[1].children[1];

    red.setAttribute("visibility", "hidden");
    blue.setAttribute("visibility", "hidden");

    console.log("Visibility hidden");
}


function addSVG(elements) {

    console.log("Lista de elementos: " + elements);

    for (let i = 0; i < elements.length; i++) {

        const element = elements[i];

        console.log(element);

        const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
        const elementPosition = element.getBoundingClientRect();

        svg.setAttribute("class", element.className + "-svg");

        svg.setAttribute("viewBox", "0 0 " +
            elementPosition.width + " " + elementPosition.height);

        addPolygon(svg, elementPosition.height, elementPosition.width);

        element.appendChild(svg);

    }

}


function addPolygon(element, height, width) {

    const red = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    const blue = document.createElementNS("http://www.w3.org/2000/svg","polygon");

    red.setAttribute("class", "red");
    blue.setAttribute("class", "blue");


    red.setAttribute("points", `
        0 0,
        ${width} 0,
        ${width} ${height},
        0 ${height}
    `);

    blue.setAttribute("points", `
        0 0,
        ${width} 0,
        ${width} ${height},
        0 ${height}
    `);

    red.setAttribute("visibility", "hidden");
    blue.setAttribute("visibility", "hidden");

    element.appendChild(red);
    element.appendChild(blue);

}