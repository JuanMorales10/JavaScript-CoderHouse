
// window.addEventListener("load", function cambiarColor(){
//     document.getElementById("cambiarColor").addEventListener("click", function(){
//         var colorFondo =document.getElementById("colorFondo").value;
//         document.getElementById("body").setAttribute("bgcolor", colorFondo);
//     })
// })

// let div1 = document.getElementById('div');
// let div = document.createElement('div');

// div.innerHTML = `
// <label for="">Color Fondo</label>
// <input type="text" id="colorFondo">
// <input type="button" id="cambiarColor" value="Cambiar">`

// div1.appendChild(div)

// function Saludar(){ alert('Gracias por Cambiar de fondo'); }

// var boton = document.getElementById('cambiarColor');
// boton.addEventListener('click', Saludar);

document.body.addEventListener("click", function (e) {
  console.log("click en body");
});

// boton.addEventListener("click", function (e) {
//   console.log("click en botón");
// });

 let validarContra =  document.getElementById("form").addEventListener('submit', validar);

function validar(ev) {
    ev.preventDefault();
    let clave1 = document.getElementById("clave1").value;
    let clave2 = document.getElementById("clave2").value;
    if (clave1 != clave2) {
        alert('Las claves ingresadas son distintas');
    } else if(clave1 === clave2){
        console.log('Se ha registrado con exito')
        redirecccionar();
    }
    
}

// -------------------STORAGE Y JSON---------------------------------------------------------------

let check = document.getElementById('cbox1')

function guardarDatos (storage){
    let email = document.getElementById('emailAddress').value;
    let user = document.getElementById('user').value; 
    let pass = document.getElementById('clave1').value;

    const usuario = {
     "email": email ,
     "user" : user ,
     "password" : pass 
    }


    if (storage == "localStorage") {
        localStorage.setItem('user', JSON.stringify(usuario));
    }

    if (storage == "sessionStorage") {
        sessionStorage.setItem('user', JSON.stringify(usuario));
    }
}

check.addEventListener('click', ()=>{
    if (check.checked) {
        guardarDatos('localStorage');
    } else {
        guardarDatos('sessionStorage');
    }
})

const confirm = document.getElementById('confirmar');

confirm.addEventListener('click',validar)

function redirecccionar(){
      window.location.href="index.html";
}


const claveErronea = document.getElementById('claveErronea');

