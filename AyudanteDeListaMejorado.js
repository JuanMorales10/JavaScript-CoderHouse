
//Array de Productos
const horaActual = new Date();
alert(horaActual);
let nuevoObjeto;

const lista = [];

menuInteractivo(lista);

function menuInteractivo(lista){

    const seleccion = prompt('Ingrese la operacion que desee \n 1.Agregar Producto \n 2.Quitar Producto por nombre\n 3.Quitar producto por precio\n 4.Buscar Producto por nombre\n 5.Buscar producto por precio\n 6.Imprimir lista')
        switch(seleccion){
            case '1':
                agregarProductos(lista);
                break;
            case '2':
                quitarProductoPorNombre(lista);
                break;
            case '3':    
                quitarProductoPorPrecio(lista);    
                break;
            case '4':
                buscarPorNombre(lista);
                console.log(buscarPorNombre);
                break;
            case '5':
                buscarPorPrecio(lista);
                console.log(buscarPorPrecio);
                break;
            case '6':
                imprimirLista(lista);
                break;
            }


}

function constructorProducto(lista){
     this.nuevoObjeto = nuevoObjeto = {
        nombre : prompt.toString('Ingrese el nombre del producto'),
        precio : prompt('Ingrese el precio del mismo')
    }
lista.push(nuevoObjeto);
return lista;
}

function agregarProductos(lista){
    const condicion = false;    
    const decision1 = 'no';

    do {
        for (let i = 0; i < lista.length; i++) {
             constructorProducto;

            if (lista.includes (nuevoObjeto)) {
             decision1 = prompt('Su producto: '+ nuevoObjeto +' ya esta agregado a la lista, desea agregarlo de todas formas?');
                
            } else if(decision1.matchAll('si')){
                lista.push(nuevoObjeto);
            }
            }
            const respuesta = prompt('Desea ingresar mas producto a la lista?')

                if (respuesta.matchAll('si')) {
                    condicion = false;
                } else if(respuesta.matchAll('no')){
                    condicion = true;
                }
        } while (condicion);
}

function quitarProductoPorNombre(lista){
    const elementoaEliminar = prompt.toString('Ingrese el Producto a Eliminar: ');

    for (const i of lista) {
        if (lista.includes(elementoaEliminar)) {
               lista.splice(i,1);
           } else {
           alert('El Producto ingresado no se ha encontrado en la lista');
            }
    }
}

function quitarProductoPorPrecio(lista){
    const elementoaEliminar = prompt.parseInt(('Ingrese el precio del Producto a Eliminar: '));

    for (const i of lista) {
        if (lista.precio.includes(elementoaEliminar)) {
               lista.splice(i,1);
           } else {
           alert('El producto ingresado no se ha encontrado en la lista');
            }
    }
}

const buscarPorNombre = prompt.toString(lista.filter((el)=> el.nombre.includes(buscarPorNombre)));

const buscarPorPrecio = prompt(lista.filter((el)=> el.precio.includes(buscarPorPrecio)));

function imprimirLista(lista){
    alert('Imprimiendo lista..')
    for (let i = 0; i < lista.length; i++) {
        alert (lista[i]);
    }
}