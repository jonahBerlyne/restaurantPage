import showContact from "./contact";
import showHome from "./home";
import showMenu from "./menu";

export default function showHeader() {

 const content = document.getElementById("content");

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
 content.appendChild(header);

 console.log("header");

 return content;
}