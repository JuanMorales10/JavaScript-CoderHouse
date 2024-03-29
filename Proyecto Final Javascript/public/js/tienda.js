function actualizarCarrito() {
  let total = 0;
  const CTotal = document.querySelector('.shoppingCartTotal');

  const carritoItems = document.querySelectorAll('.shoppingCartItem');

  carritoItems.forEach((carta) => {
    const precioElemento = carta.querySelector('.shoppingCartItemPrice');
    const precio = Number(precioElemento.textContent.replace('$', ''));
    const cantidadElemento = carta.querySelector('.shoppingCartItemQuantity');
    const cantidad = Number(cantidadElemento.value);
    total = total + precio * cantidad;});
  CTotal.innerHTML = `${total.toFixed(2)}$`;
}

function cantidadArreglada(){
  Toastify({
    text: "Cantidad Arreglada",
    duration: 2000,
    style:{
        color: 'white',
        width: '200px',
        height: '50px',
        background: "radial-gradient(circle, rgba(235,0,255,1) 10%, rgba (86,9,121,1) 65%, rgba(68,0,50,1) 93%)"
       }
    }).showToast();
}

function productoAgregado(){
  Toastify({
    text: "Producto Agregado",
    duration: 2000,
    style:{
        color: 'white',
        width: '200px',
        height: '50px',
        background: "radial-gradient(circle, rgba(235,0,255,1) 10%, rgba (86,9,121,1) 65%, rgba(68,0,50,1) 93%)"
       }
    }).showToast();
}

function productoEliminado(){
  Toastify({
    text: "Producto eliminado",
    duration: 2000,
    style:{
       alignitems: 'center',
        color: 'white',
        width: '120px',
        height: '70px',
        background: "radial-gradient(circle, rgba(235,0,255,1) 10%, rgba (86,9,121,1) 65%, rgba(68,0,50,1) 93%)"
       }
    }).showToast();
}

function eliminarElementoCarrito(event) {
  const buttonClick = event.target;
  buttonClick.closest('.shoppingCartItem').remove();
  actualizarCarrito();
}

function comprarBotonClickeado() {
  ItemsContainer.innerHTML = '';
  actualizarCarrito();
}

function cantidadCarrito(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  actualizarCarrito();
}

function agregarItemCarrito(itemNombre, itemPrecio, itemImagen) {
  const elementTitulo = ItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle');
  for (let i = 0; i < elementTitulo.length; i++) {
    if (elementTitulo[i].innerText === itemNombre) {
      let cantidadElemento = elementTitulo[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity');
      cantidadElemento.value++;
      $('.toast').toast('show');
      actualizarCarrito();
      return;
    }

  }


const filaCarrito = document.createElement('div');
const ContenidoCarrito = `
<div class="row shoppingCartItem">
      <div class="col-6">
          <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <img src=${itemImagen} class="shopping-cart-image">
              <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemNombre}</h6>
          </div>
      </div>
      <div class="col-2">
          <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <p class="item-price mb-0 shoppingCartItemPrice">${itemPrecio}</p>
          </div>
      </div>
      <div class="col-4">
          <div
              class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
              <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                  value="1">
              <button class="btn btn-danger buttonDelete" id="buttonItem"  type="button">X</button>
          </div>
      </div>
  </div>`;
filaCarrito.innerHTML = ContenidoCarrito;
ItemsContainer.append(filaCarrito);
filaCarrito.querySelector('.buttonDelete').addEventListener('click', eliminarElementoCarrito);
filaCarrito.querySelector('.buttonDelete').addEventListener('click', productoEliminado);
filaCarrito.querySelector('.shoppingCartItemQuantity').addEventListener('change', cantidadCarrito);
filaCarrito.querySelector('.shoppingCartItemQuantity').addEventListener('change', cantidadArreglada);
// for (let i = 0; i < filaCarrito.length; i++) {
  
//   }
actualizarCarrito();

}

const array19 = [];

function agregarAlCarrito(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemNombre = item.querySelector('.item-title').textContent;
  const itemPrecio = item.querySelector('.item-price').textContent;
  const itemImagen = item.querySelector('.item-image').src;


  const articulo = {
    "Nombre :" : itemNombre,
    "Precio :" : itemPrecio
  }
    array19.push(articulo);

    
  
    agregarItemCarrito(itemNombre, itemPrecio, itemImagen);


}

function jsonCarrito(){

  for (let i = 0 ; i < array19.length;i++) {
    const element = array19[i];
    localStorage.setItem([i],JSON.stringify(element));
    sessionStorage.setItem([i],JSON.stringify(element));
  }
  localStorage.setItem('Carrito',JSON.stringify(array19));
  sessionStorage.setItem('Carrito',JSON.stringify(array19));
}

const agregaralcarritoBoton = document.querySelectorAll('.agregarAlCarrito');
agregaralcarritoBoton.forEach((agregaralCarrito) => {
agregaralCarrito.addEventListener('click', agregarAlCarrito);
});

const comprarBoton1 = document.querySelector('.comprarButton');
comprarBoton1.addEventListener('click', comprarBotonClickeado);

const ItemsContainer = document.querySelector('.shoppingCartItemsContainer');

 const comprarBoton = document.getElementById('comprarboton');

comprarBoton.onclick = () => {

  jsonCarrito();

    Swal.fire({
      icon: 'success',
      title: 'Listo',
      text: 'Su compra se ha realizado con exito',
    })
}

 const cerrarSesionNav = document.getElementById('cerrarSesionNav');

 cerrarSesionNav.onclick = () => {
  Swal.fire({
    title: 'Esta seguro que quiere cerrar Sesion?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, cerrar Sesion'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        cerrarSesion()
      )
    }
  })
 } 

function cerrarSesion() {
  window.location.href="loginNuevo.html"
}
//---------------------Set TimeOut--------------------------
const TimeOut = 600000;
setTimeout(()=>{
    cerrarSesion();
}, TimeOut);

l