// Render héberge en HTTPS → donc WebSocket en WSS
const socket = new WebSocket("https://novasec-backend.onrender.com");

const messages = document.getElementById("messages");
const nick = document.getElementById("nickname");
const input = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");

socket.addEventListener("open", () => console.log("Connecté au serveur WebSocket"));

socket.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  addMessage(msg.name, msg.text, msg.name === nick.value);
});

function addMessage(name, text, isMe = false) {
  const div = document.createElement("div");
  div.className = "msg " + (isMe ? "me" : "other");
  div.textContent = name + ": " + text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

sendBtn.onclick = () => {
  if (!input.value) return;
  const data = { name: nick.value, text: input.value };
  socket.send(JSON.stringify(data));
  input.value = "";
};


input.addEventListener("keydown", (e) => { if (e.key === "Enter") sendBtn.click(); });
