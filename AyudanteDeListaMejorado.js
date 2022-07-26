class Producto{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
}



//Array de Productos
const horaActual = new Date();
alert(horaActual);

const lista = [''];

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


function agregarProductos(lista){ 
     constructorProducto(lista);
     menuInteractivo(lista);
    }

    function quitarProductoPorNombre(lista){
        const elementoaEliminar = prompt('Ingrese el nombre del Producto a Eliminar: ');
    
        for (const el of lista) {
            if (el.nombre == elementoaEliminar) {
                console.log(el)   
                const newArray = lista.filter((item) => item.nombre !== elementoaEliminar);
                imprimirLista(newArray);
                }
        }
        return lista;
    }

function quitarProductoPorPrecio(lista){
    const elementoaEliminar = prompt('Ingrese el precio del Producto a Eliminar: ');

    for (const el of lista) {
        if (el.precio == elementoaEliminar) {
            console.log(el)   
            const newArray = lista.filter((item) => item.precio !== elementoaEliminar);
            imprimirLista(newArray);
            }
    }
    return lista;
}


function buscarPorNombre(lista){

    const nombreaBuscar = prompt('Ingrese el precio a buscar')

    for (const el of lista) {
        if (el.nombre == nombreaBuscar) {
            console.log(el)
            alert('Usted tiene un producto con ese nombre ');
        }
    }
    return lista;
}

function buscarPorPrecio(lista){

    const precioaBuscar = prompt('Ingrese el precio a buscar')

    for (const el of lista) {
        if (el.precio == precioaBuscar) {
            console.log(el)
            alert('Usted tiene un producto con ese precio llamado: '+el.nombre);
        }
    }
    return lista;
}


function imprimirLista(lista){
    alert('Imprimiendo lista..')
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

function constructorProducto(lista){
    const producto = new Producto();
               
                producto.nombre = prompt('Ingrese el nombre del producto');
                producto.precio = prompt('Ingrese el precio del producto');
               
                lista.push(producto);
}