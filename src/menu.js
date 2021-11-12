export default function showMenu() {

 const content = document.getElementById("content");

 const homeDiv = document.getElementById("homeDiv");

 homeDiv.style.display = "none";

 const contactDiv = document.getElementById("contactDiv");

 contactDiv.style.display = "none";

 const menuDiv = document.getElementById("menuDiv");

 const p = document.createElement("p");
 p.textContent = "Menu Page";
 menuDiv.appendChild(p);

 menuDiv.style.display = "flex";

 content.appendChild(menuDiv);

 return content;
}