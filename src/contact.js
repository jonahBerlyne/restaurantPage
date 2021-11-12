export default function showContact() {

 const content = document.getElementById("content");

 const homeDiv = document.getElementById("homeDiv");
 homeDiv.style.display = "none";

 console.log("show if homeDiv section works");
 
 // const menuDiv = document.createElement("div");
 // menuDiv.setAttribute("id", "menuDiv");
 // menuDiv.style.display = "none";

 // console.log("show if menuDiv section works");

 const contactDiv = document.getElementById("contactDiv");
 contactDiv.style.display = "flex";
 const p = document.createElement("p");
 p.textContent = "Contact Page";
 contactDiv.appendChild(p);


 content.appendChild(contactDiv);

 return content;

}