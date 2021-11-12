function makeContact() {

 const contactDiv = document.createElement("div");
 contactDiv.style.display = "flex";
 contactDiv.style.flexDirection = "column";
 
 const p = document.createElement("p");
 p.textContent = "Contact Page";
 contactDiv.appendChild(p);

 return contactDiv;

}

export default function showContact() {
 const main = document.getElementById("main");
 main.textContent = "";
 main.appendChild(makeContact());
}