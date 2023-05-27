const btnAbaInferior = document.querySelector('.btn-aba-inferior');
const conteudoAbaInferior = document.querySelector('.aba-inferior');
const grid = document.querySelector('.grid-container');
const center = document.querySelector('.center')

btnAbaInferior.addEventListener('click', function() {
  if (conteudoAbaInferior.style.top) {
    conteudoAbaInferior.style.top = null;
    grid.style.overflow = 'hidden';
    
  } else {
    conteudoAbaInferior.style.top = '47%';
    grid.style.overflow = 'auto';
  }
});

let isInverted = false;

btnAbaInferior.addEventListener('click', function() {
  if (isInverted) {
    btnAbaInferior.style.transform = 'none';
    isInverted = false;
  } else {
    btnAbaInferior.style.transform = 'scaleY(-1)';
    isInverted = true;
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("meubotao").click();
  }
});