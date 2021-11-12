function makeMenu() {

 const menuDiv = document.createElement("div");
 menuDiv.style.display = "flex";
 menuDiv.style.flexDirection = "column";
 
 const p = document.createElement("p");
 p.textContent = "Menu Page";
 menuDiv.appendChild(p);

 return menuDiv;

}

export default function showMenu() {
 const main = document.getElementById("main");
 main.textContent = "";
 main.appendChild(makeMenu());
}