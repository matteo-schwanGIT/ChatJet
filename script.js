function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (!message) return;

    const messages = document.getElementById('messages');
    messages.innerHTML += `<div><b>Du:</b> ${message}</div>`;

    // Placeholder Antwort von ChatJet
    setTimeout(() => {
        messages.innerHTML += `<div><b>ChatJet:</b> [Antwort kommt später]</div>`;
        messages.scrollTop = messages.scrollHeight;
    }, 500);

    input.value = '';
}
