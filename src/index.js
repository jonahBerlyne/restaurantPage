const { default: showHome } = require("./home");
//const { default: showContact } = require("./contact");
//const { default: showMenu } = require("./menu");

const homeDiv = document.createElement("div");
homeDiv.setAttribute("id", "homeDiv");

const contactDiv = document.createElement("div");
contactDiv.setAttribute("id", "contactDiv");

const menuDiv = document.createElement("div");
menuDiv.setAttribute("id", "menuDiv");

showHome();

//showContact();

//showMenu();

console.log("console statement");