//function para pegar a hora iniciando em 00:00:00; (poderia também ter sido adicionado via setHours, setMinutes...);
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    })
}

//capturando nossos elementros do HTML;
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

//criando a váriavel para armazenar os segundos e inicializando ela em 0 para ser incrementada;
let segundos = 0;

//criando a váriavel para armazenar a manipulação do setInterval e clearInterval;
let timer;

//function para iniciar o cronometro, ela incrementa o segundos de 1 em 1 a cada 1s;
function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

//criando o evento de click;
document.addEventListener('click', function(e){
    const el = e.target; //capturando cada click na página

    //se o click selecionar a classe iniciar do html, então a function iniciaRelogio será inicializada;
    if(el.classList.contains('iniciar')){
        relogio.classList.add('iniciado');
        clearInterval(timer);
        return iniciaRelogio();
    }

    //se o click selecionar a classe pausar do html, então trocaremos a cor (.iniciado e .pausado foram criadas no arquivo CSS) e limparemos o intervalo do timer;
    if(el.classList.contains('pausar')){
        relogio.classList.remove('iniciado');
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    //se o click selecionar a classe zerar do html, então limparemos o timer, as classes, e redefinimos o relogio para 00:00:00 e o segundos para 0, assim, quando incrementado novamente iniciará de 0.
    if(el.classList.contains('zerar')){
        clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.remove('pausado');
    relogio.classList.remove('iniciado');
    }
})

