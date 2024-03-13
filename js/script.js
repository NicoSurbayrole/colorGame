let colors = [
  "240, 14, 128",
  "140, 124, 250",
  "100, 100, 128",
  "0, 124, 148",
  "20, 124, 10",
  "20, 224, 200",
];
let pickedColor = randomColor();
let square = document.querySelectorAll(".square");
let titulo = document.querySelector("#h1");
let mensaje = document.querySelector("#message");
let navb = document.querySelector("#stripe");
let colorGanador = document.querySelector("#colorDisplay");
colorGanador.textContent = pickedColor;

function randomColor() {
  let colorPoition = Math.random() * colors.length;
  return colors[Math.floor(colorPoition)];
}

for (let i = 0; i < square.length; i++) {
  square[i].style.background = `rgb(${colors[i]})`;
}

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", () => {
    let validarColor = square[i].style.background === `rgb(${pickedColor})`;
    validarColorGanador(validarColor, i)
  });
}

function validarColorGanador(validarColor, i){
    if (validarColor) {
        for (cuadrado of square) {
          cuadrado.style.background = square[i].style.background;
        }
        stripe.style.background = square[i].style.background;
        titulo.style.color = square[i].style.background;
        mensaje.textContent = "El color es correcto";
      } else {
        square[i].style.background = "#232323";
        mensaje.textContent = "El color es incorrecto";
      }
}