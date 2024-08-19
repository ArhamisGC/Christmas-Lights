const lights = document.getElementById("lights");

document.addEventListener('keydown', function(event) {
  let selected = lights.children[event.keyCode - 65];
  position(event.keyCode-65,selected);
  console.log(event.keyCode-65);
});

function position(number,selected){
  if((number + 1)%4 === 2){
    selected.style.animation = "lighting-3 1.25s 1 linear";
  }else if ((number)%2 === 0){
    console.log(number);
    selected.style.animation = "lighting-2 1.5s linear 1";
  }else{
    selected.style.animation = "lighting-1 1.25s 1 linear";
  }
  selected.addEventListener("animationend", ()=>{
    selected.style.animation = "none";
  })
}
