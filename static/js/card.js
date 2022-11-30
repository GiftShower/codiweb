System.register([], function(exports_1) {
    var games;
    return {
        setters:[],
        execute: function() {
            var games = document.getElementsByClassName("card");
            var _loop_1 = function(i) {
                games[i].addEventListener("click", function () {
                    window.parent.postMessage(['showPopup', games[i].id], "*");
                });
            };
            for (var i = 0; i < games.length; i++) {
                _loop_1(i);
            }
        }
    }
});
