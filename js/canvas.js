      var tela = document.querySelector('canvas');
      var pincel = tela.getContext('2d');
      
      function forca(){ //base da forca;
            pincel.beginPath()
            pincel.moveTo(20,300)
            pincel.lineTo(250,300)
            pincel.strokeStyle = 'white'
            pincel.lineWidth = 10
            pincel.stroke()
        }

        //madeira vertical da forca;
      function barra_vertical(){  
            pincel.beginPath()
            pincel.moveTo(19.5,50)
            pincel.lineTo(100,300)
            pincel.strokeStyle = 'white'
            pincel.stroke()
        }
        //madeira horizontal da forca;
      function barra_horizontal(){  
            pincel.beginPath() 
            pincel.moveTo(15,50)
            pincel.lineTo(200,50)
            pincel.strokeStyle = 'white'
            pincel.stroke()
        }
        //corda da forca;
      function barra_corda(){
            pincel.beginPath()
            pincel.moveTo(200,45)
            pincel.lineTo(200,65)
            pincel.stroke();
        }
      //cabeça;
      function cabeça(){
            pincel.beginPath();
            pincel.lineWidth = 5;
            pincel.arc(200,95, 30, 0, Math.PI * 2);
            pincel.strokeStyle = 'white'
            pincel.stroke();
      }
      //corpo;
      function corpo(){
            pincel.beginPath()
            pincel.moveTo(200,125)
            pincel.lineTo(200,180)
            pincel.lineWidth = 5;
            pincel.strokeStyle = "white"
            pincel.stroke();
        }
      //braço direito;
      function braco_direito(){
            pincel.beginPath()
            pincel.moveTo(200,125)
            pincel.lineTo(160,150)
             pincel.lineWidth = 5;
            pincel.stroke();
      }
      // braço esquerdo;
      function braco_esquerdo(){
            pincel.beginPath()
            pincel.moveTo(200,125)
            pincel.lineTo(245,150)
             pincel.lineWidth = 5;
            pincel.stroke();
        }
      //perna direita;
      function perna_direita(){
            pincel.beginPath()
            pincel.moveTo(200,179)
            pincel.lineTo(230,220)
             pincel.lineWidth = 5;
            pincel.stroke();
        }
      
      //perna esquerda;
      function perna_esquerda(){
            pincel.beginPath()
            pincel.moveTo(200,180)
            pincel.lineTo(175,220)
             pincel.lineWidth = 5;
            pincel.stroke();
        }
      
      //Aqui eu chamo as  funções primárias, a base completa da forca será exibida;
      forca()
      barra_vertical();
      barra_horizontal();
      barra_corda();
     


     
      
      
      


      
        

       
