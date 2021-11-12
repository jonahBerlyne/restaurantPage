export default function showContact() {

 const content = document.getElementById("content");

 const homeDiv = document.getElementById("homeDiv");
 homeDiv.classList.add("hide");

 console.log("show if homeDiv section works");
 
 // const menuDiv = document.createElement("div");
 // menuDiv.setAttribute("id", "menuDiv");
 // menuDiv.style.display = "none";

 // console.log("show if menuDiv section works");

 const contactDiv = document.getElementById("contactDiv");
 contactDiv.classList.remove("hide");

 console.log("show if contactDiv section works");

 const p = document.createElement("p");
 p.textContent = "Contact Page";
 contactDiv.appendChild(p);


 content.appendChild(contactDiv);

 return content;

}