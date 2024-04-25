
//Iniciar variables

let destapada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let aciertos = 0;
let mostrarAciertos = document.getElementById('Aciertos');
let movimientos = 0;
let mostrarMovimientos = document.getElementById('movimientos');
let run = false;
let timer = 30;
let mostrarTiempo = document.getElementById('t-restante')

//Generar aerreglo de pares aliatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
//Organizar arreglo de forma aleatoria
function arregloAleatorio(){
    return Math.random()-0.5;
}
numeros.sort(arregloAleatorio);
console.log(numeros);
//Funcion para el contador

function contador(){
    tiempoRegresivo = setInterval(() =>{
        timer --;
        mostrarTiempo.innerHTML = `Tiempo : ${timer} s`;
        if(timer == 0){
            clearInterval(tiempoRegresivo);
            bloquerTarjetas();
        }
    }, 1000)
}

function bloquerTarjetas(){
    for(let i =0; i <= numeros.length; i ++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros [i];
        tarjetaBloqueada.disabled = true;
    }
}

function destapar(id) {
    if(run == false){
        contador();
        run = true;

    }
    destapada ++;
    console.log(destapada);

    if(destapada == 1){
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML = primerResultado;
        tarjeta1.disabled = true;
    }
    else if ( destapada == 2 ){
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id]
        tarjeta2.innerHTML = segundoResultado;
        tarjeta2.disabled = true;
        movimientos ++;
        mostrarMovimientos.innerHTML = `Movimientos : ${movimientos}`;

        if( primerResultado == segundoResultado){
            aciertos ++;
            mostrarAciertos.innerHTML = `Aciertos : ${aciertos}`;
            destapada = 0;
            if(aciertos == 8){
                mostrarAciertos.innerHTML = 'GANASTEEE!!!!'
            }
        }
        else{
            setTimeout(()=> {
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                destapada = 0;
            },900);
        }
    }
    
}
