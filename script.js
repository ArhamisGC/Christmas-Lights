const lights = document.getElementById("lights");

document.addEventListener('keydown', function(event) {
  let selected = lights.children[event.keyCode - 65];
  selected.style.animation = "lighting-1 1.25s infinite linear";
});


