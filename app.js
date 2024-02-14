/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del Numero Secreto';*/
let numeroAleatorio = 0;
let numeroIntentos = 0;
let parrafo = document.querySelector('p');
let listaNumerosSorteados = [];
let numeroMaximo = 10;
parrafo.innerHTML = 'Digite un numero del 1 al 10';

function asignarTextoElemento(elemnto,texto)
{
    let elemntoHtml = document.querySelector(elemnto);
    elemntoHtml.innerHTML = texto;
}

function compararDatoIngresado()
{
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroAleatorio)
    {
        asignarTextoElemento('p',`Hey! Acertaste el numero aleatorio en ${numeroIntentos} ${(numeroIntentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else
    {   //el Usuario no acerto el numero
        if(numeroUsuario > numeroAleatorio)
        {
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else
        {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        numeroIntentos ++;
        clearBox();
    }

}

function genNumAleatorio()
{
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //condicion de salida de recursividad: "si ya sorteamos todos los digitos"
    if(listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p','ya se asignaron TODOS los numeros posibles');
    }
    else
    {
        //generando condicion: si existe el numero generado
        if(listaNumerosSorteados.includes(numeroGenerado))
        {
            return genNumAleatorio();
        }
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function clearBox()
{
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego()
{
    //limpiar caja
    clearBox();
    //generar mensajes iniciales
    //generar numero aleatrio
    //inicializar numero de intentos
    condicionesNewGame();
    //Deshabilitar el boton de nuevo juego  
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function condicionesNewGame()
{
    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p',`Digite un numero del 1 al ${numeroMaximo}`);
    numeroAleatorio = genNumAleatorio();
    numeroIntentos = 1;
}

condicionesNewGame();
