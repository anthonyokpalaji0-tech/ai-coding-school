async function askAI() {

let question = document.getElementById("question").value;

let responseBox = document.getElementById("response");

responseBox.innerText = "Thinking...";

const response = await fetch("https://api.openai.com/v1/chat/completions", {

method: "POST",

headers: {
"Content-Type": "application/json",
"Authorization": "Bearer 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"
},

body: JSON.stringify({
model: "gpt-4o-mini",
messages: [
{role: "system", content: "You are a helpful coding tutor for beginners."},
{role: "user", content: question}
]
})

});

const data = await response.json();

responseBox.innerText = data.choices[0].message.content;

}
