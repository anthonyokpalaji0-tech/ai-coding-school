function sendMessage() {

let input = document.getElementById("user-input");
let message = input.value;

if(message === "") return;

let chat = document.getElementById("chat-messages");

chat.innerHTML += "<p><b>You:</b> " + message + "</p>";

let reply = "I'm your AI coding tutor! Ask me about HTML, CSS, or JavaScript.";

if(message.toLowerCase().includes("html")){
reply = "HTML structures websites using tags like <div>, <h1>, and <p>.";
}

if(message.toLowerCase().includes("css")){
reply = "CSS controls styles like colors, layouts, and animations.";
}

if(message.toLowerCase().includes("javascript")){
reply = "JavaScript adds interactivity like buttons, animations, and dynamic content.";
}

chat.innerHTML += "<p><b>AI:</b> " + reply + "</p>";

input.value = "";

}
