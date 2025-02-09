function toggleMessage() {
    document.getElementById("message").innerText = "Please say YES! 💕";
    document.querySelector(".toggle-button").style.display = "none"; // Hide initial button
    document.getElementById("answer-buttons").style.display = "block"; // Show Yes/No buttons
}


function showLoveMessage() {
    localStorage.setItem("valentineAnswer", "Yes");
    document.getElementById("message").innerHTML = `
        BUBU LOVE YOU! 💖💖💖 <br> Ok so free your calendar for Valentine's Day! hehehe 😚
        <br><img src="https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif" class="gif">
        <br>Here's my old filipino song for you!<br>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1iphKsRTqRl7KZeOZwILGF?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        
    `;
    document.getElementById("answer-buttons").style.display = "none";
}


function forceYes() {
    localStorage.setItem("valentineAnswer", "No (but forced to say Yes 😆)");
    document.getElementById("message").innerHTML = `
        No is not an option! 😏
        <br> <img src="https://media.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif" class="gif">
    `;
}