
//Array de Productos
const lista = [];

alert(agregarElementos(lista));
alert(quitarElementos(lista));
alert(imprimirLista(lista));

function agregarElementos(lista){
    let condicion = false;    
    const decision1 = 'no';

    do {
        for (let i = 0; i < lista.length; i++) {
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
    const elementoaEliminar = prompt.toString('Ingrese el elemento a Eliminar: ');

    for (const i of lista) {
        if (lista.includes(elementoaEliminar)) {
               lista.splice(i,1);
           } else {
           alert('El elemento ingresado no se ha encontrado en la lista');
            }
    }
}

function imprimirLista(lista){
    alert('Imprimiendo lista..')
    for (let i = 0; i < lista.length; i++) {
        alert (lista[i]);
    }
}