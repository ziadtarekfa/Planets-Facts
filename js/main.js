import {
    paragraph, link, planetImage,
    geologyImage, overviewButton, MenuModal,
    rotationTime, revolutionTime, radius,
    temperature, heading, planets, structureButton, geologyButton, menuIcon
} from './variables.js';




export const toggleMenu = () => {
    MenuModal.classList.toggle('open');
}


menuIcon.addEventListener("click", toggleMenu);


const fetchData = async () => {
    const response = await fetch('/assets/data.json');
    const data = await response.json();
    return data;
}

let planetindex = 0;

fetchData().then(data => {

    overviewButton.style.backgroundColor = "#419EBB";

    for (let i = 0; i < planets.length; i++) {

        planets[i].addEventListener("click", function () {

            document.title = data[i].name;

            makeButtonsTransparent();
            if (window.innerWidth <= 769) {
                toggleMenu();
            }

            geologyImage.style.display = 'none';
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



const handleButtons = (data) => {

    overviewButton.addEventListener("click", function () {
        makeButtonsTransparent();
        overviewButton.style.backgroundColor = "#419EBB";
        geologyImage.style.display = 'none';
        planetImage.setAttribute("src", data[planetindex].images.planet)
        paragraph.textContent = data[planetindex].overview.content;
        link.setAttribute("href", data[planetindex].overview.source);

    });


    structureButton.addEventListener("click", function () {
        makeButtonsTransparent();
        structureButton.style.backgroundColor = "#419EBB";
        geologyImage.style.display = 'none';
        planetImage.setAttribute("src", data[planetindex].images.internal);
        paragraph.textContent = data[planetindex].structure.content;
        link.setAttribute("href", data[planetindex].structure.source);
    });

    geologyButton.addEventListener("click", function () {

        makeButtonsTransparent();
        geologyButton.style.backgroundColor = "#419EBB";
        geologyImage.style.display = 'block';

        geologyImage.setAttribute("src", data[planetindex].images.geology);
        geologyImage.classList.toggle('geology-open');

        paragraph.textContent = data[planetindex].geology.content;
        link.setAttribute("href", data[planetindex].geology.source);
    });
}

const makeButtonsTransparent = () => {
    const allButtons = document.getElementsByTagName("button");
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.backgroundColor = "transparent";
    }
}