const user = document.getElementById('user').value;
const pass = document.getElementById('pass').value;
const emailAdress = document.getElementById('emailAdress').value;
const clave2 = document.getElementById("clave2").value;
let validarContra = document.getElementById("form").addEventListener('submit', validar);

function validar(ev) {
    ev.preventDefault();

    const pass = document.getElementById('pass').value;
    const clave2 = document.getElementById("clave2").value;

    if (pass != clave2) {
        Swal.fire({
            title: 'Sus Contraseñas no coinciden',
            icon: 'warning',
            showCancelButton: true,
        })
    } else if (pass === clave2) {
        const usuarioinicio = pass != null && new Date(); 
        sessionStorage.setItem('Usuario Inicio Sesion', JSON.stringify(usuarioinicio));
        redirecccionar();
    }
}

// -------------------STORAGE Y JSON---------------------------------------------------------------

document.querySelector(".onoffswitch-checkbox").addEventListener('change', (event) => {
    if (event.target.checked) {
        document.body.style.background = "#ccc";

    } else {
        document.body.style.background = "";
    }
})
document.querySelector(".cbox1").addEventListener('click', (event) => {
    if (event.target.checked) {

        guardarDatos();

    } else {
        console.log('No se pudo guardar Datos');
    }
})

function guardarDatos() {

    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const emailAdress = document.getElementById('emailAdress').value;

    const usuario = {
        "email": emailAdress,
        "user": user,
        "password": pass
    }
    localStorage.setItem('Usuario', JSON.stringify(usuario));
    sessionStorage.setItem('Usuario', JSON.stringify(usuario));
    api(emailAdress);

}

function redirecccionar() {
    window.location.href = "index.html";
}

const claveErronea = document.getElementById('claveErronea');

//-----------------API--------------------

function api(emailAdress) {
    const opciones = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c34349ddc1msh10ff46dcd4b1b92p1ecf7bjsn2ae62eab72c5',
            'X-RapidAPI-Host': 'bouncer-email-verification.p.rapidapi.com'
        }
    };

    const Api = `https://bouncer-email-verification.p.rapidapi.com/v1/email/verify?email=${emailAdress}`;

    fetch(Api, opciones)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
