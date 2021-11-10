export default function showElements() {
 const content = document.getElementById("content");

 const h1 = document.createElement("h1");
 h1.textContent = "The Krusty Krab: Home of the Krabby Patties!";
 content.appendChild(h1);

 const img = document.createElement("img");
 img.src = "/krustykrab.jpeg";
 content.appendChild(img);

 // var img = new Image();
 // img.className = 'center';
 // img.width = 300;
 // img.height = 300;
 // img.src = '/krustykrab.jpeg';
 // img.onload = function() {
 //    content.appendChild(img);
 // };

 const p = document.createElement("p");
 p.textContent = "This is a fantastic burger joint. If you want to eat krabby patties, then the krusty krab is where it's at boss.";
 content.appendChild(p);

 return content;
}