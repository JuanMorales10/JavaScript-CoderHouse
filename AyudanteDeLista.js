
//Array de Productos
const lista = [parseInt(prompt('Ingrese la cantidad de numeros a la lista'))];

alert(agregarElementos(lista));
alert(quitarElementos(lista));
alert(imprimirLista(lista));

function agregarElementos(lista){
    let condicion = false;    
    let decision1;

    do {
        for (let i = 0; index < lista.length; index++) {
            const nuevoObjeto = lista.push.toString[prompt('Ingrese el producto')];

            if (lista.includes(nuevoObjeto)) {
             decision1 = prompt('Su producto: '+ nuevoObjeto +' ya esta agregado a la lista, desea agregarlo de todas formas?');
                
            } else if(decision1.matchAll('si')){
                lista.push(nuevoObjeto);
            }
            }
            const respuesta = prompt('Desea ingresar mas elementos a la lista?')

                if (respuesta.matchAll('si')) {
                    condicion = false;
                } else if(respuesta.matchAll('no')){
                    condicion = true;
                }
        } while (condicion);
}

function quitarElementos(lista){
    let elementoaEliminar = prompt.toString('Ingrese el elemento a Eliminar: ');

    for (const i of lista) {
        if (lista.includes(elementoaEliminar)) {
               lista.splice(i,1);
           } else {
           alert('El elemento ingresado no se ha encontrado en la lista');
            }
    }
}

function imprimirLista(){
    alert('Imprimiendo lista..')
    for (let index = 0; index < lista.length; index++) {
        alert (lista[index]);
    }
}