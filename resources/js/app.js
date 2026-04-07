import "./bootstrap";
window.Echo.channel("chat").listen("MessageSentEvent", (e) => {
    console.log("message received:", e);
    let div = document.getElementById("messages");
    div.innerHTML += `<p>${e.message}</p>`;
});