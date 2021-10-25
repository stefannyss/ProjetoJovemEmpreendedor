const target = document.querySelectorAll('[data-animacao]');
const ClasseAnimacao = 'animacao';

function AnimacaoScroll() {
    const TopoJanela = window.pageYOffset + ((window.innerHeight * 0.85));
    target.forEach(function (elemento) {
        if ((TopoJanela) > (elemento.offsetTop)) {
            elemento.classList.add(ClasseAnimacao);
        }
        else {
            elemento.classList.remove(ClasseAnimacao);
        }
    })
}
AnimacaoScroll();

window.addEventListener('scroll', function () {
    AnimacaoScroll();
})