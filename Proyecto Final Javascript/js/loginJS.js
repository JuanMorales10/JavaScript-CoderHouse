
document.body.addEventListener("click", function (e) {
  console.log("click en body");
});


 let validarContra =  document.getElementById("form").addEventListener('submit', validar);

function validar(ev) {
    ev.preventDefault();
    let clave1 = document.getElementById("clave1").value;
    let clave2 = document.getElementById("clave2").value;
    if (clave1 != clave2) {
        alert('Las claves ingresadas son distintas');
    } else if(clave1 === clave2){
        console.log('Se ha registrado con exito')
        const usuarioinicio = clave1 != null && new Date(); // Operador Logico And
        console.log('Hora Inicio Sesion',usuarioinicio);
        redirecccionar();
    }if (clave1 == null) {
        alert('Ingresa tu clave');
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
   check.checked == true  ? guardarDatos('localStorage') :  guardarDatos('sessionStorage'); //Operador Ternario
})

const confirm = document.getElementById('confirmar');

confirm.addEventListener('click',validar)

function redirecccionar(){
      window.location.href="index.html";
}


const claveErronea = document.getElementById('claveErronea');



