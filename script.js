function askAI() {

let question = document.getElementById("question").value;

let response = "AI Tutor: Great question! Try searching documentation or practicing this concept.";

document.getElementById("response").innerText = response;

}

function runCode() {

let code = document.getElementById("code").value;

document.getElementById("output").srcdoc = code;

}
