// src/index.js
import "./styles.css";
import {main} from "./webpage.js";
import {menu} from "./menu.js";
import {contacts} from "./about.js";

main();

const navHome = document.getElementById("navHome");
const navMenu = document.getElementById("navMenu");
const navAbout = document.getElementById("navAbout");

const content = document.getElementById("content");


navHome.addEventListener ("click", () => {
    content.replaceChildren();
    main();
})
navMenu.addEventListener ("click", () => {
    content.replaceChildren();
    menu();
})
navAbout.addEventListener ("click", () => {
    content.replaceChildren();
    contacts();
})

