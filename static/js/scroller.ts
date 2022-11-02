function scroller() {
    const reveals = document.getElementsByClassName("codiText") as HTMLCollectionOf<HTMLElement>;
    const current = window.scrollY;
    console.log(current)
    reveals.item(0).style.fontSize = `clamp(5em, calc(10em - ${current}px), 10em)`
    reveals.item(0).style.backgroundColor = `rgba(35, 47, 66, clamp(0.7, calc(${current}/100), 1.0))`
}
function clickr() {
    window.open("https://github.com/iuicoding");
}

window.addEventListener('scroll', scroller)

document.getElementsByClassName('myButton')[0].addEventListener('click', clickr)