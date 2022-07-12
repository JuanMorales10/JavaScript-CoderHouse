
//Conversion de Divisa

let euro = 1.01;
let dolar;
let pesos = 0.0078;
let real= 0.18;
let cambio ;

function seleccionarCantidad(){
do {       
        dolar= prompt('Ingrese la cantidad de dolares a cambiar:')
} while (dolar != null);
}

function conversionDivisa(){

let divisa = prompt('Ingrese la divisa a seleccionar \n1.Euro\n2.Peso\n3.Real\n')
let cambio;
    switch(divisa){
        case '1':
            cambio = dolar * euro;
            alert('Usted tiene: ' + cambio + 'Euros')
            break;
        case '2':
            cambio = dolar * pesos;
            alert('Usted tiene: ' + cambio + 'Pesos')
            break;
        case '3':    
            cambio = dolar * real;
            alert('Usted tiene: ' + cambio + 'Reales')
            break;
    }
}

function agradecer(){
    let nombre = prompt('Ingrese su nombre')
    for (let i = 0; i =1 ; i++) {
        alert('Gracias por venir'+ nombre);
        
    }
}

alert(seleccionarCantidad());
alert(conversionDivisa());
alert(agradecer);