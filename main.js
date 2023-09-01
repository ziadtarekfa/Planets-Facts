//Should Stay Global
const paragraph = document.querySelector("section p");
const link = document.querySelector(".wikipedia-link a");
const planetImage = document.querySelector("#planet-image");
const geologyImage = document.querySelector("#geology")

const overviewButton = document.querySelector('#overview_btn');
// const planets = document.querySelectorAll("li");

const getData = async () => {
    const response = await fetch('/assets/data.json');
    const data = await response.json();
    return data;
}

let planetindex = 0;


getData().then(data => {

    const rotationTime = document.querySelector("#rotation-time");
    const revolutionTime = document.querySelector("#revolution-time");
    const radius = document.querySelector("#radius");
    const temperature = document.querySelector("#temperature");
    const heading = document.querySelector("h1");


    overviewButton.style.backgroundColor = "#419EBB";

    const planetsDesktop = document.querySelector(".desktop-nav");
    const planetsTablet = document.querySelector(".tablet-nav");

    let planets;
    if (window.getComputedStyle(planetsDesktop).display == 'flex') {
        planets = document.querySelectorAll(".desktop-nav li");
    }
    else if (window.getComputedStyle(planetsTablet).display == 'flex') {
        planets = document.querySelectorAll(".tablet-nav li");
    }

    else {
        planets = document.querySelectorAll(".mobile-nav li");
    }

    for (let i = 0; i < planets.length; i++) {

        planets[i].addEventListener("click", function () {

            geologyImage.style.visibility = "hidden";
            document.title = data[i].name;

            makeButtonsTransparent();

            overviewButton.style.backgroundColor = "#419EBB";
            heading.textContent = data[i].name;
            paragraph.textContent = data[i].overview.content;
            link.setAttribute("href", data[i].overview.source);

            planetImage.setAttribute("src", data[i].images.planet);


            rotationTime.textContent = data[i].rotation;
            revolutionTime.textContent = data[i].revolution;
            radius.textContent = data[i].radius;
            temperature.textContent = data[i].temperature;

            planetindex = i;

        });


    }

    handleButtons(data);



});


function handleButtons(data) {


    const structureButton = document.querySelector("#structure_btn");
    const geologyButton = document.querySelector("#geology_btn");


    overviewButton.addEventListener("click", function () {
        makeButtonsTransparent();
        overviewButton.style.backgroundColor = "#419EBB";
        planetImage.setAttribute("src", data[planetindex].images.planet)
        paragraph.textContent = data[planetindex].overview.content;
        link.setAttribute("href", data[planetindex].overview.source);

    });


    structureButton.addEventListener("click", function () {
        makeButtonsTransparent();
        structureButton.style.backgroundColor = "#419EBB";
        planetImage.setAttribute("src", data[planetindex].images.internal);
        paragraph.textContent = data[planetindex].structure.content;
        link.setAttribute("href", data[planetindex].structure.source);
    });

    geologyButton.addEventListener("click", function () {

        makeButtonsTransparent();
        geologyButton.style.backgroundColor = "#419EBB";

        geologyImage.setAttribute("src", data[planetindex].images.geology);
        geologyImage.style.visibility = "visible";

        paragraph.textContent = data[planetindex].geology.content;
        link.setAttribute("href", data[planetindex].geology.source);
    });
}

function makeButtonsTransparent() {
    const allButtons = document.getElementsByTagName("button");
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.backgroundColor = "transparent";
    }
}