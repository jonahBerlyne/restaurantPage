function makeHome() {

 const homeDiv = document.createElement("div");
 homeDiv.style.display = "flex";
 homeDiv.style.flexDirection = "column";
 
 const h1 = document.createElement("h1");
 h1.textContent = "The Krusty Krab: Home of the Krabby Patties!";
 homeDiv.appendChild(h1);

 const img = document.createElement("img");
 img.src = "/krustykrab.jpeg";
 img.width = 500;
 img.height = 500;
 homeDiv.appendChild(img);

 const p = document.createElement("p");
 p.textContent = "This is a fantastic burger joint. If you want to eat krabby patties, then the krusty krab is where it's at boss.";
 homeDiv.appendChild(p);

 return homeDiv;

}

export default function showHome(){
 const main = document.getElementById("main");
 main.textContent = "";
 main.appendChild(makeHome());
}