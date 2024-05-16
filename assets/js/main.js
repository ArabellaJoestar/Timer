function criaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'GMT'
    })
}

let segundos = 0;
let timer;
relogio = document.getElementById('contador');
let comecar = document.getElementById('start');
function iniciar() {
 timer = setInterval(function() {segundos++; relogio.innerHTML= criaSegundos(segundos)}, 1000);
    relogio.classList.remove('pausado');
    comecar.disabled = true;
}
function parar() {
    clearInterval(timer)
    relogio.classList.add("pausado");
    comecar.disabled = false;
}

function zerar() {
    segundos = 0;
    relogio.innerHTML = '00:00:00'
    let paragrafoSalvo = document.getElementById('salvador');
    paragrafoSalvo.innerHTML = ''
}


function volta(){
    let salvador = criaSegundos(segundos);
    let paragrafoSalvo = document.getElementById('salvador');

    paragrafoSalvo.innerHTML = salvador
}
