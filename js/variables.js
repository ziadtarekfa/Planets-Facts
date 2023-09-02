const paragraph = document.querySelector("section p");
const link = document.querySelector(".wikipedia-link a");
const planetImage = document.querySelector("#planet-image");
const geologyImage = document.querySelector(".geology-image");
const overviewButton = document.querySelector('#overview_btn');
const MenuModal = document.querySelector("header nav");
const rotationTime = document.querySelector("#rotation-time");
const revolutionTime = document.querySelector("#revolution-time");
const radius = document.querySelector("#radius");
const temperature = document.querySelector("#temperature");
const heading = document.querySelector("h1");
const planets = document.querySelectorAll(".planets-nav li");
const structureButton = document.querySelector("#structure_btn");
const geologyButton = document.querySelector("#geology_btn");

export {
    paragraph, link, planetImage, geologyImage,
    overviewButton, MenuModal, rotationTime,
    revolutionTime, radius, temperature, heading, planets,
    structureButton, geologyButton
};