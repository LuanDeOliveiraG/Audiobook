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
    darPause;
    }
    else{
        darPlay;
    }
};


playerOnOff.addEventListener("click", playOuPause);

function proximaFaixa(){
    if(capitulo<quantidadeCapitulos){
        capitulo += 1;
        }
    else { capitulo = 1;
        };
    nomeFaixa.innerText = "Faixa: " + capitulo;
    }


proximo.addEventListener("click",proximaFaixa)

function faixaAnterior(){
    if (capitulo == 0) {
        capitulo = 10;
    } else {
        capitulo -= 1;
    };
    nomeFaixa.innerText = "Faixa: " + capitulo;
}

anterior.addEventListener("click", faixaAnterior)

function incremento(){
    audio.src = "./audios/" + capitulo + ".mp3";
} 

