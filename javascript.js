function executar() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const op = document.getElementById("operacao").value;
  if (op == "soma") {
    var resultado = num1 + num2;
  } else if (op == "subtracao") {
    var resultado = num1 - num2;
  } else if (op == "divisao") {
    var resultado = num1 / num2;
  } else if (op == "multiplicacao") {
    var resultado = num1 * num2;
  } else document.write("Insira uma operação válida");
  document.getElementById("res").innerHTML = "Resultado: " + resultado;
}
const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.4;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowMetade;
    if (sectionTop < 150) {
      section.classList.add("ativo");
    } else section.classList.remove("ativo");
  });
}
animaScroll();
window.addEventListener("scroll", animaScroll);
