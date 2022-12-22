const closePopup = document.getElementsByClassName("popupclose");
const overlay = document.getElementById("overlay");
const popup = document.getElementsByClassName("popup");

for (let i = 0; i < closePopup.length; i++) {
    closePopup[i].addEventListener("click", () => {
        popup[i].classList.toggle("on", false)
        overlay.classList.toggle("on", false)
    })
}

function scroller() {
    const reveals = document.getElementsByClassName("codiText") as HTMLCollectionOf<HTMLElement>;
    const current = window.scrollY;
    reveals[0].style.fontSize = `clamp(5em, calc(10em - ${current}px), 10em)`
    reveals[0].style.backgroundColor = `rgba(35, 47, 66, clamp(0.7, calc(${current}/100), 1.0))`
}
function clickr() {
    window.open("https://github.com/iuicoding");
}
function clckrt() {
    window.open("https://dev.to/giftshower");
}

function onMessage(event: MessageEvent) {
    const data = event.data
    if(data[0] === "showPopup") {
        showPopup(data[1])
    }
}

const ghButton: HTMLElement = document.getElementById("myButton") as HTMLElement;
ghButton.addEventListener('click', clickr)

const dvtButton: HTMLElement = document.getElementById("dvtButton") as HTMLElement;
dvtButton.addEventListener('click', clckrt)

function showPopup(id) {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById(id);
     overlay.classList.toggle("on", true)
     popup.classList.toggle("on", true)
}

window.addEventListener("message", onMessage);
window.addEventListener('scroll', scroller);