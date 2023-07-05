//ME QUEDO PENDIENTE CONFIGURAR LAS VARIABLES PARA CONTROLAR EL TEXTO QUE SE INGRESE ASI QUE SALGAN DateES, INPUTS, Y BOTONES PERO COMO SE BOTONES Y INPUTS LLEGAN HASTA EL 19, ESTO VA DE LA MANO CON EL PDF,
//ANTES DE ESO TENGO QUE SOLUCIONAR EL PROBLEMA DEL RESPONSIVE CON LOS RECUADROS YA QUE LAS OPCIONES DE NIVEL SALDRAN EN UN RECUADRO, EL RECUADRO DE LOS NIVELES TENDRA SOLO CUATRO OPCIONES DEE UNIDAD QUE AL DARLE
//CLICK VA A DEPLEGAR LOS TITULOS DE ESA UNIDAD
var sticky = document.getElementById("stick");
var buthon = document.getElementById("buthon");
var tit = document.getElementById("tit")

//Aqui comienza el codigo que ara no visible la pagina para los dias que yo le programe
var body = document.getElementById("body");
var date = new Date(1689000000000); //Esto tiene hasta el 10 julio  dice 8 pero no se si es noche o mañana
    var date2 = new Date();

    if(date < date2){
      body.classList.add("body");
    }


function remover(){
    ramdom()
    sticky.classList.remove("sticky")
    sticky.classList.add("ocultar")

    buthon.classList.add("ocultar");
    tit.classList.add("ocultar")
    prom();


    }

      //FUNCION DE SONIDO PARA EL BOTON DEL PROMPT


   var d = document;
   var w = window;
   var ls = localStorage;




var quitarAudios = [];

//SONIDOS DE LOS D
var sonar1;
var sonido1 = document.createElement("audio");

var sonar2;
var sonido2 = document.createElement("audio");

var sonar3;
var sonido3 = document.createElement("audio");

var sonar4;
var sonido4 = document.createElement("audio");

var sonar5;
var sonido5 = document.createElement("audio");

var sonar6;
var sonido6 = document.createElement("audio");

var sounderBTN = document.getElementById("sounderBTN"); 

//SONIDO APARTE PARA EL INPUT
var Date55 = new Date();

var resInpBut;
var resOrac;
var orac0 = "I";

var prueva = [];
var data = [];
//LOS BOTONES DE PALABRAS QUE SE PASARAN AL BODY
var tytle = document.createElement("h2");
var optRes = document.createElement("h2");
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");
var option5 = document.createElement("button");
var option6 = document.createElement("button");

//LOS BOTONES DE DateES QUE APARECERAN EN EL BODY
var Date1 = document.createElement("button");
var Date2 = document.createElement("button");
var Date3 = document.createElement("button");
var optDatees = document.createElement("h2");

var varCreaDos1;
var varCreaDos2;
var varCreaDos3;

//EL INPUT QUE APARECERA EN EL BODY
var input = document.createElement("input");
var delInput = document.createElement("h2");
var optRes2 = document.createElement("h2");
var br = document.createElement("br");
var inputValue;

//EL AUDIO QUE SOLO SONARA EN EL BODY


//PARA EL MODO OSCURO
var dataDarks = document.querySelector("[data-dark]");
var btnContent = document.getElementById("btnContent");
var btnHard = document.getElementById("btnHard")
var btnClear = "it";

var prog;
var tempo = document.getElementById("tempo");

var score = document.querySelector(".score");
var contador = 0;
var timeCont1 = 5;
var timeContDos2 = 10;
var timeContTres3 = 5;
var Date;
var randDate;
var randDateGuar;
var varCrea1;
var varCrea2;
var varCrea3;
var varCrea4;
var varCrea5;
var varCrea6;
var lower;
var space;
var prValor = 0;
var segValor = 0;
var cro1;
var cro2;
var cro3;
var dif = 1;
var rellenarOtro;
var uno = 1;
var vosh;
var numbAlz;
var levelt = document.getElementById("levelt");

//EL EVENTO DEL RECUADRO DE LOS NIVELES
d.addEventListener("click", e=>{
    //AM1
    if(e.target.dataset.id == "levelAM1L1"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelAM1L2"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelAM1L3"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    //AM2
    else if(e.target.dataset.id == "levelAM2L1"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelAM2L2"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelAM2L3"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    //AM3
    else if(e.target.dataset.id == "levelAM3L1"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelAM3L2"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelAM3L3"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    //BM1
    else if(e.target.dataset.id == "levelBM1L1"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelBM1L2"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelBM1L3"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    //BM2
    else if(e.target.dataset.id == "levelBM2L1"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelBM2L2"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelBM2L3"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    //CM1
    else if(e.target.dataset.id == "levelCM1L1"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelCM1L2"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelCM1L3"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    //CM2
    else if(e.target.dataset.id == "levelCM2L1"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelCM2L2"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
    else if(e.target.dataset.id == "levelCM2L3"){
        document.getElementById("levelt").classList.add("level");
        document.getElementById("levelt").classList.remove("levelShow");
        console.log(e.target.dataset.id)
    }
})


//ESTO ES PARA EL AUDIO
var mute = document.getElementById("mute");
    speechMessage = new SpeechSynthesisUtterance();
var voices = [];
var $speechSelect = d.getElementById("speech-select");

w.speechSynthesis.addEventListener("voiceschanged",e=>{
    voices = w.speechSynthesis.getVoices();

    voices.forEach(voice =>{ 
        console.log(voice.name) 
               if(voice.name.includes("United State") || voice.name.includes("US")){
                const $option = d.createElement("option");
                $option.value = voice.name;
                $option.textContent = voice.name;
                $speechSelect.appendChild($option);
             }
            })

            d.addEventListener("change",e=>{
        if(e.target === $speechSelect){
            speechMessage.voice = voices.find(voice => voice.name === e.target.value);
        }
     })

})

function hider(){
    document.getElementById("levelt").classList.remove("level");
    document.getElementById("levelt").classList.add("levelShow");
}

function prom(){
    speechMessage.text = "Selecciona una vos";
    w.speechSynthesis.speak(speechMessage);
  }

function sound(){
    resps()
    if(mute.textContent == `Listen`){
        vosh = 1;
        mute.innerText = `Text`;
    }else if(mute.textContent == `Text`){
        vosh = 2
        mute.innerText = `Listen`;
    }
    
}

function intervalo1(){
    cro1 = setInterval(function(){tytle.innerHTML = timeCont1--;
        if(timeCont1 < 0){
          clearInterval(cro1);
 
          option1.disabled = true;
          option2.disabled = true;
          option3.disabled = true;
          option4.disabled = true;
          option5.disabled = true;
          option6.disabled = true;

          option1.classList.remove("button");
          option1.classList.add("desable");
          option2.classList.remove("button");
          option2.classList.add("desable");
          option3.classList.remove("button");
          option3.classList.add("desable");
          option4.classList.remove("button");
          option4.classList.add("desable");
          option5.classList.remove("button");
          option5.classList.add("desable");
          option6.classList.remove("button");
          option6.classList.add("desable");

          continuar.disabled = false;
          continuar.classList.remove("desable");
          continuar.classList.add("button");

          tytle.innerHTML = "Time out";
          timeCont1 = 5;
          }
         },1000);
   }

function intervalo2(){
    cro2 = setInterval(function(){delInput.innerHTML = timeContDos2--;
    if(timeContDos2 < 0){
      clearInterval(cro2);

      input.disabled = true;

      continuar.disabled = false;
      continuar.classList.remove("desable");
      continuar.classList.add("button");

      delInput.innerHTML = "Time out";
      timeContDos2 = 10;
      }
     },1000);
   }
   

   function intervalo3(){
    cro3 = setInterval(function(){tytle.innerHTML = timeContTres3--;
    if(timeContTres3 < 0){
      clearInterval(cro3);

      Date1.disabled = true;
      Date2.disabled = true;
      Date3.disabled = true;

      Date1.classList.add("button");
      Date1.classList.add("desable");
      Date2.classList.add("button");
      Date2.classList.add("desable");
      Date3.classList.add("button");
      Date3.classList.add("desable");

      continuar.disabled = false;
      continuar.classList.remove("desable");
      continuar.classList.add("button");
      
      tytle.innerHTML = "Time out";
      timeContTres3 = 10;
      }
     },1000);
   }
   
   function hard(){
     if(dif == 1){
        dif = 2;
        btnHard.innerHTML = `Easy`;
        ramdom()
     }else if(dif == 2){
        dif = 1;
        btnHard.innerHTML = `Hard`;
        ramdom()
     }
   }

function ramdom(){
    numbAlz = Math.floor(Math.random()*10);
if(dif == 1){
    clearInterval(cro1);
    timeCont1 = 7;
    tytle.innerText = "Good Luck";

    clearInterval(cro2);
    timeContDos2 = 13;
    delInput.innerText = "Good Luck";

    clearInterval(cro3);
    timeContTres3 = 13;
    tytle.innerText = "Good Luck";

}else{
    clearInterval(cro1);
    timeCont1 = 5;
    tytle.innerText = "Good Luck";

    clearInterval(cro2);
    timeContDos2 = 7;
    delInput.innerText = "Good Luck";

    clearInterval(cro3);
    timeContTres3 = 7;
    tytle.innerText = "Good Luck";
}
    

    prog = `<progress id="file" value="${contador}" max="50"></progress>`;
    tempo.innerHTML = prog;

    enter = document.getElementById("enter");

data = ["Yo","Tú","Él","Ella","Esto","Nosotros/Nosotras","Ellos/Ellas",
  "Hermano","Hermana","Padre","Madre","Familia","Ir","Hacer","Gimnasio","Escuela","Casa","Gato","Perro",
  "Él es mi hermano", "Él es mi padre", "Ella es mi hermana", "Ella es mi madre", "Ellos son mi familia",
  "Nosotros somos una familia", "Ese es mi teléfono", "Yo voy a la escuela", "Él va a casa", "Ella hace ejercicio","Ellos van al gimnasio",
  "Yo voy al gimnasio", "Nosotros hacemos ejercicio", "Yo soy tu hermana", "Tú vas a la escuela","Yo hago ejercicio","Ella es Laura","Él lava la ropa","Tú eres mi hermano"];

Date = ["I","You","He","She","it","We","They", //El 1 y el 4, estan en variables
  "Brother","Sister","Father","Mother","Family","to go","to do","Gym","School","House","Cat","Dog",
  "He is my brother", "He is my father","She is my sister","She is my mother","They are my family",
  "We are a family","It is my phone","I go to the school","He goes home","she exercises","They go to the gym",
  "I go to the gym","We exercise","I am your sister","You go to the school","I exercise","She is Laura","He does the laundry","You are my brother"];
  
Datepuesta = Date[0];
Datepuesta1 = Date[1];
Datepuesta2 = Date[2];
Datepuesta3 = Date[3];
Datepuesta4 = Date[4];
Datepuesta5 = Date[5];
Datepuesta6 = Date[6];


if(contador > 50){
    tempo.innerText = `Congrats! You've gotten today's goal!`;
}
    
option1.classList.remove("right");
option2.classList.remove("right");
option3.classList.remove("right");
option4.classList.remove("right");
option5.classList.remove("right");
option6.classList.remove("right");

Date1.classList.remove("right");
Date2.classList.remove("right");
Date3.classList.remove("right");

option1.classList.remove("wrong");
option2.classList.remove("wrong");
option3.classList.remove("wrong");
option4.classList.remove("wrong");
option5.classList.remove("wrong");
option6.classList.remove("wrong");

Date1.classList.remove("wrong");
Date2.classList.remove("wrong");
Date3.classList.remove("wrong");


input.classList.remove("rightInput");
input.classList.remove("wrongInput");
continuar.disabled = true;
continuar.classList.remove("button");
continuar.classList.add("desable");

option1.classList.add("button");
option1.classList.remove("desable");
option2.classList.add("button");
option2.classList.remove("desable");
option3.classList.add("button");
option3.classList.remove("desable");
option4.classList.add("button");
option4.classList.remove("desable");
option5.classList.add("button");
option5.classList.remove("desable");
option6.classList.add("button");
option6.classList.remove("desable");

Date1.classList.add("button");
Date1.classList.remove("desable");

Date2.classList.add("button");
Date2.classList.remove("desable");

Date3.classList.add("button");
Date3.classList.remove("desable");

optRes2.classList.add("options");
optRes.classList.add("options");
optDatees.classList.add("options")
input.classList.add("inputClass");
delInput.classList.add("instruct");
tytle.classList.add("instruct");

input.value = "";
score.innerText = "Score";



llenar = [];
llenar2 = [];
varCrea = [];
varCreaDos = [];

prValor = 0;
segValor = 7; 

if(contador > 10){
  prValor = 7;
  segValor = 19;
}else if(contador > 19){
  prValor = 0;
  segValor = 19;
}
        for(let i=0; i<1000; i++){
            let numb = otrValores1(prValor,segValor); 
            llenar.push(numb);  
        }

        const unicos = [... new Set(llenar)];


        for(let i=0; i<6; i++){
             varCrea.push(unicos[i]);
        }

        function otrValores1(min, max){
            
            return Math.floor(Math.random() * (max - min)) + min;
        }

        if(Datepuesta4 !== btnClear){
        data = "Correct!";
        numbAlz = "You're wrong!";
        random();
    }

for(let i=0; i<1000; i++){
    var numbRandomst = otrValores2(19,37); 
    llenar2.push(numbRandomst);
  }

  function otrValores2(min, max){
      return Math.floor(Math.random() * (max - min)) + min;
  }

    const unicos2 = [... new Set(llenar2)]
        
   for(let i=0; i<3; i++){
      varCreaDos.push(unicos2[i]);
 }

 for(let i=0; i<3; i++){
     varCreaDos1 = varCreaDos[0];
     varCreaDos2 = varCreaDos[1];
     varCreaDos3 = varCreaDos[2];
 }

        for(let i=0; i<6; i++){
            varCrea1 = varCrea[0];
            varCrea2 = varCrea[1];
            varCrea3 = varCrea[2];
            varCrea4 = varCrea[3];
            varCrea5 = varCrea[4];
            varCrea6 = varCrea[5];
        }

randDate = Math.floor(Math.random()*6);
randDateGuar = varCrea[randDate];

//CREAR Date DateES
randDateDos = Math.floor(Math.random()*3);
randDateGuarDos = varCreaDos[randDateDos];

if(vosh == 1){
optDatees.innerText = "♪♪♪";
optDatees.addEventListener("click", e=>{
    sounder2()
})
optRes2.innerText = "♪♪♪";
optRes.innerText = "♪♪♪";

sounder()
score.innerText = "Score";
score.innerText = "Score";
sounderBTN.disabled = false;

}else{ 

optDatees.innerText = data[randDateGuarDos];
optRes2.innerText = data[randDateGuar];
optRes.innerText = data[randDateGuar];
sounderBTN.disabled = true;

}

//AGREGAR CONTENIDO A LOS BOTONES
option1.innerText = Date[varCrea1];

option2.innerText = Date[varCrea2];

option3.innerText = Date[varCrea3];

option4.innerText = Date[varCrea4];

option5.innerText = Date[varCrea5];

option6.innerText = Date[varCrea6];

//AGREGAR CONTENIDO A LAS HDateES

Date1.innerText = Date[varCreaDos1];

Date2.innerText = Date[varCreaDos2];

Date3.innerText = Date[varCreaDos3];

 ramdom2();//ESTA ES LA FUNCION QUE CARGA SI VAN A SALIR BOTONES, INPUT, O LAS DateES
 

}


//FUNCIONES DE AFUERA PARA LOS AUDIOS DE BOTONES//
 function Date1(){
    speechMessage.text = option1.textContent;
    w.speechSynthesis.speak(speechMessage);
  }

  function Date2(){
    speechMessage.text = option2.textContent;
    w.speechSynthesis.speak(speechMessage);
  }

  function Date3(){
    speechMessage.text = option3.textContent;
    w.speechSynthesis.speak(speechMessage);
  }

  function Date4(){
    speechMessage.text = option4.textContent;
    w.speechSynthesis.speak(speechMessage);
  }

  function Date5(){
    speechMessage.text = option5.textContent;
    w.speechSynthesis.speak(speechMessage);
  }

  function Date6(){
    speechMessage.text = option6.textContent;
    w.speechSynthesis.speak(speechMessage);
  }

  //FUNCION AUDIOS DateES
  function DateOra1(){
    speechMessage.text = Date1.textContent;
    w.speechSynthesis.speak(speechMessage);
  }

  function DateOra2(){
    speechMessage.text = Date2.textContent;
    w.speechSynthesis.speak(speechMessage);
  }

  function DateOra3(){
    speechMessage.text = Date3.textContent;
    w.speechSynthesis.speak(speechMessage);
  }

//FUNCION DE SONIDO DE Date DE LAS DateES
  function DateResOra(){
    speechMessage.text = resOrac;
    w.speechSynthesis.speak(speechMessage);
  }

//FUNCION DE SONIDO DE Date DE LOS BOTONES Y EL INPUT
  function DateResResto(){
    speechMessage.text = resInpBut;
    w.speechSynthesis.speak(speechMessage);
  }



/////////FUNCION PARA VER LAS DateS////////
function resps(){

    clearInterval(cro1);
    clearInterval(cro2);
    clearInterval(cro3);

//EL numbAlz sirve para ver si me va a caer input, Datees, o botones, como de 7 para arriba son las Datees y de 6 para abajo los botones y inputs aqui pasa la Date que obtuvo del numero al azar
//que salio para con ese numero agarrar random ese indice de el arreglo en ingles ya que la Date que estoy asignando es un numero al azar y ya solo lo busca en el arreglo tanto para Datees como para
//los botones y los inputs
//CREA RESPUESTSA DE DateES, Y EL ELSE Date DEL INPUT Y PALABRAS
  sounder=()=>{
    if(numbAlz > 6){
        resOrac = Date[randDateGuarDos];
        score.innerText = resOrac;
        DateResOra()

    }else{
        resInpBut = Date[randDateGuar];
        score.innerText = resInpBut;
        DateResResto()
    }

}

if(Datepuesta !== orac0){
        data = "Correct!";
        numbAlz = "You're wrong!";
        random();
    }

sounder2=()=>{
    if(numbAlz > 6){
        DateResOra()

    }else{
        DateResResto()
    }
}

sounder()

    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
    option5.disabled = true;
    option6.disabled = true;
    input.disabled = true;

    setTimeout(myGreeting, 2000);

  function myGreeting() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
    continuar.disabled = false;
    continuar.classList.remove("desable");
    continuar.classList.add("button");
}
   //ESTO DE LOS TOTONES
    option1.classList.remove("button");
    option1.classList.add("desable");
    option2.classList.remove("button");
    option2.classList.add("desable");
    option3.classList.remove("button");
    option3.classList.add("desable");
    option4.classList.remove("button");
    option4.classList.add("desable");
    option5.classList.remove("button");
    option5.classList.add("desable");
    option6.classList.remove("button");
    option6.classList.add("desable");

    //ESTO ES DE LAS DateES
    Date1.classList.add("button");
    Date1.classList.add("desable");
    Date2.classList.add("button");
    Date2.classList.add("desable");
    Date3.classList.add("button");
    Date3.classList.add("desable");

}

/////////////FUNCION QUE CARGA SI VA A HABER UN INPUT, BOTONES A SELECCIONAR O LAS DateES/////////////
function ramdom2(){

    
    option1.disabled = false;
    option2.disabled = false;
    option3.disabled = false;
    option4.disabled = false;
    option5.disabled = false;
    option6.disabled = false; 
    input.disabled = false;

    Date1.disabled = false;
    Date2.disabled = false;
    Date3.disabled = false;

    
    if(numbAlz  < 4){ 
      if(enter.appendChild(input) && enter.appendChild(br) && enter.appendChild(delInput) && enter.appendChild(optRes2) && enter.appendChild(Date1) && enter.appendChild(Date2)
       && enter.appendChild(Date3) && enter.appendChild(optDatees)){
        enter.removeChild(optRes2);
        enter.removeChild(delInput);
        enter.removeChild(input);
        enter.removeChild(br);

        enter.removeChild(optDatees);
        enter.removeChild(Date1);
        enter.removeChild(Date2);
        enter.removeChild(Date3);
      }
      intervalo1();
      enter.appendChild(tytle);
      enter.appendChild(optRes);
      enter.appendChild(option1);
      enter.appendChild(option2);
      enter.appendChild(option3);
      enter.appendChild(option4);
      enter.appendChild(option5);
      enter.appendChild(option6);

 
    }else if((numbAlz > 3) && (numbAlz < 7)){
        if(enter.appendChild(option1) && enter.appendChild(option2) && enter.appendChild(option3) && enter.appendChild(option4) &&
         enter.appendChild(option5) && enter.appendChild(option6) && enter.appendChild(tytle) && enter.appendChild(optRes) &&
         enter.appendChild(tytle) && enter.appendChild(Date1) && enter.appendChild(Date2)
         && enter.appendChild(Date3) && enter.appendChild(optDatees)){
            enter.removeChild(tytle);
            enter.removeChild(optRes);
            enter.removeChild(option1);
            enter.removeChild(option2);
            enter.removeChild(option3);
            enter.removeChild(option4);
            enter.removeChild(option5);
            enter.removeChild(option6);

            enter.removeChild(optDatees);
            enter.removeChild(Date1);
            enter.removeChild(Date2);
            enter.removeChild(Date3);
        };
        intervalo2();
        enter.appendChild(delInput);
        enter.appendChild(optRes2);
        enter.appendChild(input);
        enter.appendChild(br);

    }else if((numbAlz > 6) && (numbAlz < 10)){
        if(enter.appendChild(option1) && enter.appendChild(option2) && enter.appendChild(option3) && enter.appendChild(option4) &&
        enter.appendChild(option5) && enter.appendChild(option6) && enter.appendChild(tytle) && enter.appendChild(optRes) && enter.appendChild(tytle)
        && enter.appendChild(input) && enter.appendChild(br) && enter.appendChild(delInput) &&  enter.appendChild(optRes2)){
            enter.removeChild(optRes2);
            enter.removeChild(delInput);
            enter.removeChild(input);
            enter.removeChild(br);

            enter.removeChild(tytle);
            enter.removeChild(optRes)
            enter.removeChild(option1);
            enter.removeChild(option2);
            enter.removeChild(option3);
            enter.removeChild(option4);
            enter.removeChild(option5);
            enter.removeChild(option6);

        }
        intervalo3();
        enter.appendChild(tytle);
        enter.appendChild(optDatees);
        enter.appendChild(Date1);
        enter.appendChild(Date2);       
        enter.appendChild(Date3);
    }
}


//REVISAR DateS DEL INPUT  
input.addEventListener("keyup",(e)=>{
    
    inputValue = e.target.value.toLowerCase();
    lower = inputValue.toLowerCase();
    space = lower.trim();
    space2 = Date[randDateGuar];
    space2Dos = space2.toLowerCase();
    if(space == space2Dos){
      input.classList.remove("wrongInput");
      input.classList.add("rightInput");
      clearInterval(cro2);

      input.disabled = true;
      contador++;
    }else{
        input.classList.add("wrongInput");
    }
    setTimeout(myGreeting2, 2000);//Esta funcion hace que el boton de continue se tarde dos segundos en activarse

  function myGreeting2() {
    continuar.disabled = false;
    continuar.classList.remove("desable");
    continuar.classList.add("button");
 }
}

)


////////AL PRESIONAR CUANDO SALGAN LOS BOTONES SI PRESIONO CORRECTO O INCORRECTO//////////////////
option1.addEventListener("click",()=>{
    if(Date[varCrea1] == Date[randDateGuar]){
        option1.classList.remove("button");
        option1.classList.add("right");
        Date1();

        contador++;
        clearInterval(cro1);
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        option5.disabled = true;
        option6.disabled = true;

 setTimeout(myGreeting3, 2000);

function myGreeting3() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}
    }else{
        Date1();
        option1.classList.remove("button");
        option1.classList.add("wrong");
        
        clearInterval(cro1);
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        option5.disabled = true;
        option6.disabled = true;

setTimeout(myGreeting4, 2000);

function myGreeting4() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}
    }
});

option2.addEventListener("click",()=>{
    if(Date[varCrea2] == Date[randDateGuar]){
        option2.classList.remove("button");
        option2.classList.add("right");
        contador++;
        Date2();

        clearInterval(cro1);
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        option5.disabled = true;
        option6.disabled = true;

setTimeout(myGreeting5, 2000);

function myGreeting5() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}

    }else{
        Date2();
        option2.classList.remove("button");
        option2.classList.add("wrong");

        clearInterval(cro1);
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        option5.disabled = true;
        option6.disabled = true;
setTimeout(myGreeting6, 2000);

function myGreeting6() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}
    }
});

option3.addEventListener("click",()=>{
    if(Date[varCrea3] == Date[randDateGuar]){
        option3.classList.remove("button");
        option3.classList.add("right");
        contador++;
        Date3();
        clearInterval(cro1);
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        option5.disabled = true;
        option6.disabled = true;
 
setTimeout(myGreeting7, 2000);

function myGreeting7() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}

    }else{
        Date3();
        option3.classList.remove("button");
        option3.classList.add("wrong");
        
        clearInterval(cro1);
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        option5.disabled = true;
        option6.disabled = true;

setTimeout(myGreeting8, 2000);

function myGreeting8() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}
    }
});

option4.addEventListener("click",()=>{
    if(Date[varCrea4] == Date[randDateGuar]){
        option4.classList.remove("button");
        option4.classList.add("right");
        contador++;
        Date4();
        clearInterval(cro1);
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        option5.disabled = true;
        option6.disabled = true;
 
setTimeout(myGreeting9, 2000);

function myGreeting9() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}

    }else{
        Date4();
        option4.classList.remove("button");
        option4.classList.add("wrong");
        
        clearInterval(cro1);
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        option5.disabled = true;
        option6.disabled = true;

setTimeout(myGreeting10, 2000);

function myGreeting10() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}
    }
});

option5.addEventListener("click",()=>{
    if(Date[varCrea5] == Date[randDateGuar]){
        option5.classList.remove("button");
        option5.classList.add("right");
        contador++;
        Date5();
        clearInterval(cro1);
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        option5.disabled = true;
        option6.disabled = true;

setTimeout(myGreeting11, 2000);

function myGreeting11() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}

    }else{
        Date5();
        option5.classList.remove("button");
        option5.classList.add("wrong");
        
        clearInterval(cro1);
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        option5.disabled = true;
        option6.disabled = true;

setTimeout(myGreeting12, 2000);

function myGreeting12() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}
    }
});


option6.addEventListener("click",()=>{
    if(Date[varCrea6] == Date[randDateGuar]){
        option6.classList.remove("button");
        option6.classList.add("right");
        contador++;
        Date6();
        clearInterval(cro1);
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        option5.disabled = true;
        option6.disabled = true;

setTimeout(myGreeting13, 2000);

function myGreeting13() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}

    }else{
        Date6();
        option6.classList.remove("button");
        option6.classList.add("wrong");
        
        clearInterval(cro1);
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        option5.disabled = true;
        option6.disabled = true;

setTimeout(myGreeting14, 2000);

function myGreeting14() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}
    }
});

///VER SI ESTA BIEN DateES

Date1.addEventListener("click",()=>{
    if(Date[varCreaDos1] == Date[randDateGuarDos]){
        Date1.classList.remove("button");
        Date1.classList.add("right")
        contador++;
        DateOra1();

        clearInterval(cro3);

setTimeout(myGreeting15, 2000);

function myGreeting15() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}

    }else{
        Date1.classList.remove("button");
        Date1.classList.add("wrong");
        DateOra1();

        clearInterval(cro3);
        Date1.disabled = true;
        Date2.disabled = true;
        Date3.disabled = true;

setTimeout(myGreeting16, 2000);

function myGreeting16() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}
    }
})

Date2.addEventListener("click",()=>{
    if(Date[varCreaDos2] == Date[randDateGuarDos]){
        Date2.classList.remove("button");
        Date2.classList.add("right")
        contador++;
        DateOra2();

        clearInterval(cro3);
        Date1.disabled = true;
        Date2.disabled = true;
        Date3.disabled = true;

setTimeout(myGreeting17, 2000);

function myGreeting17() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}
    }else{
        Date2.classList.remove("button");
        Date2.classList.add("wrong");
        DateOra2();
        clearInterval(cro3);
        Date1.disabled = true;
        Date2.disabled = true;
        Date3.disabled = true;

setTimeout(myGreeting18, 2000);

function myGreeting18() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}
    }
})


Date3.addEventListener("click",()=>{
    if(Date[varCreaDos3] == Date[randDateGuarDos]){
        Date3.classList.remove("button");
        Date3.classList.add("right")
        contador++;
        DateOra3();

        clearInterval(cro3);
        Date1.disabled = true;
        Date2.disabled = true;
        Date3.disabled = true;

setTimeout(myGreeting19, 2000);

function myGreeting19() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}
    }else{
        Date3.classList.remove("button");
        Date3.classList.add("wrong");
        DateOra3();
        
        clearInterval(cro3);
        Date1.disabled = true;
        Date2.disabled = true;
        Date3.disabled = true;

setTimeout(myGreeting20, 2000);

function myGreeting20() {//Esta funcion hace que el boton de continue se tarde dos segundos en activarse.
  continuar.disabled = false;
  continuar.classList.remove("desable");
  continuar.classList.add("button");
}
    }
})

function check1(){
    score.innerHTML = contador;
}



function funClaro(){
    dataDarks.classList.remove("hard");
    dataDarks.classList.remove("center");
    dataDarks.classList.add("darkClass");
    btnContent.innerText = "light";
    ls.setItem("tema","claro");
}

function funOscuro(){
    dataDarks.classList.remove("hard");
    dataDarks.classList.remove("darkClass");
    dataDarks.classList.add("center");
    btnContent.innerText = "dark";
    ls.setItem("tema","oscuro");
}



function claseDark(){
    if(btnContent.textContent === "dark"){
        funClaro();
    }else{
        funOscuro();
    }
}


d.addEventListener("DOMContentLoaded",()=>{
    ramdom()
    if(ls.getItem("tema")===null){
        ls.setItem("tema","claro");
    }if(ls.getItem("tema")==="claro"){
        funClaro();
    }if(ls.getItem("tema")==="oscuro"){
        funOscuro();
    }
})