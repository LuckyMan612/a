// script.js

document.addEventListener("DOMContentLoaded", function(event) {
    var elements = document.querySelectorAll(".animate__animated");
    var modelContainer = document.getElementById("model-container");
    var scene, camera, renderer, model;

    function animateElements() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var delay = i * 200;
            element.style.animationDelay = delay + "ms";
            element.classList.add("animate__fadeIn");
        }
    }

    function init() {
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(75, modelContainer.clientWidth / modelContainer.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
        modelContainer.appendChild(renderer.domElement);

        var loader = new THREE.GLTFLoader();
        loader.load("ecodan_heat_pump_slim_02.obj", function(gltf) {
            model = gltf.scene;
            scene.add(model);

            animate();
        });
    }

    function animate() {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animateElements();
    init();
});
