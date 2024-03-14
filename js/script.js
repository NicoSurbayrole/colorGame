let pickedColor;
let colors = [];
let modo = 6;
let square = document.querySelectorAll(".square");
let titulo = document.querySelector("#h1");
let mensaje = document.querySelector("#message");
let navb = document.querySelector("#stripe");
let colorGanador = document.querySelector("#colorDisplay");
let modoFacil = document.querySelector("#easy");
let modoDificil = document.querySelector("#hard");
let reset = document.querySelector("#reset")


randomColor(6);

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", () => {
    let validarColor = square[i].style.background === pickedColor;
    validarColorGanador(validarColor, i);
  });
}

function validarColorGanador(validarColor, i) {
    if (validarColor) {
      for (cuadrado of square) {
        cuadrado.style.background = square[i].style.background;
      }
      stripe.style.background = square[i].style.background;
      titulo.style.color = square[i].style.background;
      mensaje.textContent = "El color es correcto!";
    } else {
      square[i].style.background = "#232323";
      mensaje.textContent = "El color es incorrecto";
    }
  }

function randomColor(num) {
    for (let i = 0; i < num; i++) {
      let r = Math.floor(Math.random() * 255).toString();
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      colors.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    selectMode(num);
    pickedColor = selectColor();
    colorGanador.textContent = pickedColor;
  }

function selectMode(num) {
  if (num === 6) {
    cargarColores(num);
    for (let i = 3; i < square.length; i++) {
      square[i].style.display = "";
    }
  } else {
    cargarColores(num);
    for (let i = 3; i < square.length; i++) {
      square[i].style.display = "none";
    }
  }
}

function cargarColores(num) {
  for (let i = 0; i < num; i++) {
    square[i].style.background = colors[i];
  }
}

function selectColor() {
  let colorPosition = Math.random() * colors.length;
  return colors[Math.floor(colorPosition)];
}



modoFacil.addEventListener("click", () => {
  modo = 3;
  colors = [];
  if(!modoFacil.classList.value){
    modoDificil.classList.toggle("selected")
    modoFacil.classList.toggle("selected")
}
  randomColor(modo);
});

modoDificil.addEventListener("click", () => {
  modo = 6;
  colors = [];
  if(!modoDificil.classList.value){
    modoDificil.classList.toggle("selected")
    modoFacil.classList.toggle("selected")
}
  randomColor(modo);
});

reset.addEventListener("click", () =>{
    if(!modoDificil.classList.value){
        modoDificil.classList.toggle("selected")
        modoFacil.classList.toggle("selected")
    }
    mensaje.textContent = ""
    navb.style.background = "#fff"
    titulo.style.color = "#fff"
    colors = [];
    randomColor(6)
})