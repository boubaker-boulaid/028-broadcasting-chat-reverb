import "./bootstrap";
window.Echo.channel("chat").listen("MessageSent", (e) => {
    let div = document.getElementById("messages");
    div.innerHTML += `<p>${e.message}</p>`;
});