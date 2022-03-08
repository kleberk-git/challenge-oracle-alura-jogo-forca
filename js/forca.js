let palavras = ["JAVASCRIPT", "CSS", "HTML", "PHP", "FULLSTACK", "FRONTEND"]
let palavra_secreta = palavras[Math.floor(Math.random()*palavras.length)]; 
let chances = 6; //Quantidade de chances disponiveis;
let acertos = 0; //Verifica quantidade de acertos;
let posicao; //Verifica em qual posição está o indice;

for(posicao = 0; posicao < palavra_secreta.length; posicao++) { 
        let span = document.createElement('span');
        span.setAttribute('id', posicao); 
    
        let div = document.getElementById('palavra'); 
        div.appendChild(span) 
}      

let alfabeto = "abcdefghijklmnopqrstuvwxyz".toUpperCase(); 
let letras = alfabeto.split("");  

for (posicao = 0; posicao < letras.length; posicao++) {
        let botao = document.createElement("button"); 
        let letra = document.createTextNode(letras[posicao]); 
        botao.appendChild(letra); 
        botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
        botao.setAttribute('id', letras[posicao]);
        let div = document.getElementById("letras");
        div.appendChild(botao);
       
}

function escolheLetra(letra) {

        let acertou = false

        for(posicao = 0; posicao < palavra_secreta.length; posicao++) { 
            if(letra === palavra_secreta[posicao]) { 
            let span = document.getElementById(posicao); 
                let l = document.createTextNode(letra); 
                span.appendChild(l); 
                let botao = document.getElementById(letra);
                botao.setAttribute('class','certa');
                botao.removeAttribute('onclick'); 
                acertos++; 
                acertou = true;
               
            }

        }

        if(acertou === false) {
            let botao = document.getElementById(letra) 
            botao.setAttribute('class', 'errada'); 
            botao.removeAttribute('onclick'); 
            
            chances-- //o numero de chances diminui
            
            switch(chances){ 
                case 5:
                    cabeça();
                    break;
                case 4:
                   corpo()
                    break;
                case 3:
                    braco_direito();
                    break;
                case 2:
                   braco_esquerdo();
                    break;
                case 1:
                    perna_direita()
                    break;
                case 0:
                    perna_esquerda();
                    break;
            }
        }   
        
        if(chances == 0) { 

            var palavra_correta = document.getElementById('palavra-correta').innerHTML = "Poxa, você perdeu! Tente novamente...<br>A palavra correta era " + palavra_secreta;
            document.getElementById("letras").style.display = "none";
            document.getElementById("gameover").style.display = "block";
            document.getElementById("dica").style.display = "none";
            var botao = document.createElement('button');
            botao.innerHTML = "JOGAR NOVAMENTE"
            botao.setAttribute('class', 'btn-jogar-novamente');
            document.body.appendChild(botao);
            botao.setAttribute('onclick', 'window.location.reload()');        
        }

        if (acertos == palavra_secreta.length) { //vitória

        let img = document.createElement("img");
        img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Trof%C3%A9u_de_NFA.svg/2048px-Trof%C3%A9u_de_NFA.svg.png";
        img.setAttribute('class', 'trofeu');
        document.body.appendChild(img);
        var p = document.getElementById('msg').innerHTML = "Parabéns, você ganhou!";
        var botao = document.createElement('button');

        botao.innerHTML = "JOGAR NOVAMENTE"
        botao.setAttribute('class', 'btn-jogar-novamente');

        document.body.appendChild(botao);
        botao.setAttribute('onclick', 'window.location.reload()');
        
        document.getElementById("dica").style.display = "none";
        document.getElementById("tela").style.display = "none";
        document.getElementById("letras").style.display = "none";
        document.getElementById("linha").style.display = "none";
    }
        
}   
function atualizar(){
   window.location.reload();
}
function adicionar_palavra(){

    document.getElementById("adicionar-palavra").style.display = "block";
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("sair").style.display = "block";


}

function inserir_palavra(){
    var inserir = document.getElementById("inserir");
    inserir = palavras.unshift(inserir.value.toUpperCase());
    exibir();
    
}


function dica(){
    var dica = document.getElementById('dica').innerHTML = "Linguagens de programação!";
}

    function exibir() {
        document.getElementById("tela-inicial").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("mostrar-tabuleiro").style.display = "block";
        document.getElementById("adicionar-palavra").style.display = "none";
        document.getElementById("sair").style.display = "block";

    }

  function ocultar() {
        document.getElementById("mostrar-tabuleiro").style.display = "none";
         document.getElementById("adicionar-palavra").style.display = "none";
       
    }

ocultar();


