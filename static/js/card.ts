const games = document.getElementsByClassName("card")
for (let i = 0; i < games.length; i++) {
    games[i].addEventListener("click", () => {
        window.parent.postMessage(['showPopup', games[i].id], "*");
    })
}