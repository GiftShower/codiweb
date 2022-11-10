const closePopup = document.getElementById("popupclose");
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");

    closePopup.onclick = function() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    };

function scroller() {
    const reveals = document.getElementsByClassName("codiText") as HTMLCollectionOf<HTMLElement>;
    const current = window.scrollY;
    reveals.item(0).style.fontSize = `clamp(5em, calc(10em - ${current}px), 10em)`
    reveals.item(0).style.backgroundColor = `rgba(35, 47, 66, clamp(0.7, calc(${current}/100), 1.0))`
}
function clickr() {
    window.open("https://github.com/iuicoding");
}


function onMessage(event: MessageEvent) {
    const data=event.data
    if(data === "showPopup") {
        showPopup()
    }
}

function showPopup() {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
     overlay.style.display = 'block';
     popup.style.display = 'block';
}

window.addEventListener("message", onMessage);
window.addEventListener('scroll', scroller);

document.getElementsByClassName('myButton')[0].addEventListener('click', clickr)