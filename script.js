const playerOnOff = document.getElementById('play-pause');
const audio = document.getElementById("audio-capitulo");
const proximo = document.getElementById("proximo");
const anterior = document.getElementById("voltar");
const nomeFaixa = document.getElementById("Faixa");

const quantidadeCapitulos = 10;

let tocando = false;
let capitulo = 1;


function darPlay(){
    audio.play();
    tocando = true;
    playerOnOff.classList.add("tocando");
};
function darPause(){
    audio.pause();
    tocando = false;
    playerOnOff.classList.remove("tocando");
    
};

function playOuPause(){
    if (tocando === true) {
    darPause();
    }
    else{
        darPlay();
    }
};

playerOnOff.addEventListener("click", playOuPause);
function incremento(){
    audio.src = "./audios/" + capitulo + ".mp3";
} 
function proximaFaixa(){
    if(capitulo<quantidadeCapitulos){
        capitulo += 1;
        playerOnOff.classList.remove("tocando");
        }
    else { 
        capitulo = 1;
        playerOnOff.classList.remove("tocando");
        };
    nomeFaixa.innerText = "Faixa: " + capitulo;
    
    incremento();
    audio.load();
    
    }


proximo.addEventListener("click",proximaFaixa)

function faixaAnterior(){
    if (capitulo < 1) {
        capitulo = quantidadeCapitulos;
        playerOnOff.classList.remove("tocando");
    } else {
        capitulo -= 1;
        playerOnOff.classList.remove("tocando");
    };
    nomeFaixa.innerText = "Faixa: " + capitulo;
    incremento();
    audio.load();
    playerOnOff.classList.remove("tocando");
}

anterior.addEventListener("click", faixaAnterior)







