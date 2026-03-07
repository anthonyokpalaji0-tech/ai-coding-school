function startCourse(){
alert("Welcome to the AI Coding School! Your 3-month journey begins.");
}

function askAI(){

let question = document.getElementById("question").value;

let response = document.getElementById("response");

if(question === ""){
response.innerHTML = "Please ask a question.";
return;
}

response.innerHTML = "AI Tutor: Great question! In the full version this will connect to an AI model to help with coding.";
}
