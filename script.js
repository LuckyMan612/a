// script.js

document.addEventListener("DOMContentLoaded", function(event) {
    var elements = document.querySelectorAll(".animate__animated");

    function animateElements() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var delay = i * 200;
            element.style.animationDelay = delay + "ms";
            element.classList.add("animate__fadeIn");
        }
    }

    animateElements();
});
