import showHeader from "./page-elements";

export default function showContact() {

 showHeader();

 const content = document.getElementById("content");

 const homeDiv = document.getElementById("homeDiv");

 homeDiv.style.display = "none";

 const menuDiv = document.getElementById("menuDiv");

 menuDiv.style.display = "none";

 const contactDiv = document.getElementById("contactDiv");

 const p = document.createElement("p");
 p.textContent = "Contact Page";
 contactDiv.appendChild(p);

 content.appendChild(contactDiv);

 return content;
}