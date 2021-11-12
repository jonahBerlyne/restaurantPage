import showContact from "./contact";
import showHome from "./home";
import showMenu from "./menu";

function showHeader() {

 const header = document.createElement("header");

 const home = document.createElement("a");
 home.setAttribute("id", "home");
 home.textContent = "Home";
 home.setAttribute("href", "#");
 home.addEventListener('click', showHome);
 header.appendChild(home);

 const contact = document.createElement("a");
 contact.setAttribute("id", "contact");
 contact.textContent = "Contact";
 contact.setAttribute("href", "#");
 contact.addEventListener('click', showContact);
 header.appendChild(contact);

 const menu = document.createElement("a");
 menu.setAttribute("id", "menu");
 menu.textContent = "Menu";
 menu.setAttribute("href", "#");
 menu.addEventListener('click', showMenu);
 header.appendChild(menu);

 header.style.display = "flex";
 header.style.gap = "20px";

 return header;
}

function showMain() {
 const main = document.createElement("main");
 main.setAttribute("id", "main");
 return main;
}

export default function showWebsite() {
 const content = document.getElementById("content");

 content.appendChild(showHeader());
 content.appendChild(showMain());
 showHome();
}