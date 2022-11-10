const baraguro = document.getElementById('pkr');

baraguro.onclick = function() {
    window.parent.postMessage('showPopup', "*");
}