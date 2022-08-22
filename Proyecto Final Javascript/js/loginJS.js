
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


//-----------------API--------------------

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c34349ddc1msh10ff46dcd4b1b92p1ecf7bjsn2ae62eab72c5',
// 		'X-RapidAPI-Host': 'bouncer-email-verification.p.rapidapi.com'
// 	}
// };

// const Api = `https://bouncer-email-verification.p.rapidapi.com/v1/email/verify?email=${email}`;

// fetch(Api, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c34349ddc1msh10ff46dcd4b1b92p1ecf7bjsn2ae62eab72c5',
// 		'X-RapidAPI-Host': 'zerobounce1.p.rapidapi.com'
// 	}
// };

// fetch('https://zerobounce1.p.rapidapi.com/v2/validate?ip_address=replace_the_IP_address_the_email_signed_up_from&email=%3CREQUIRED%3E', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

let email = document.getElementById('emailAddress').value;

const opciones = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c34349ddc1msh10ff46dcd4b1b92p1ecf7bjsn2ae62eab72c5',
        'X-RapidAPI-Host': 'bouncer-email-verification.p.rapidapi.com'
    }
};

const Api = `https://bouncer-email-verification.p.rapidapi.com/v1/email/verify?email=${email}`;

fetch(Api, opciones)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));