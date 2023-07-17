
const usuario = sessionStorage.getItem('Usuario');
const obj = JSON.parse(usuario);

let nombreuser;
let emailuser;
let passuser;

for (const property in obj) {
    if (property == "user") {
        nombreuser = `${obj[property]}`
    }
    if (property == "email") {
        emailuser = `${obj[property]}`
    }
    if (property == "password") {
        passuser = `${obj[property]}`
    }
}

function jsonUsuarioFeed() {

    const feedid = document.getElementById('feedbackid').value;

    const usuariofeed = {
        "Nombre": nombreuser,
        "Feed": feedid
    }

    sessionStorage.setItem('Usuario: ', JSON.stringify(usuariofeed));
}


//--------------------------------------


const containerDatos = document.getElementById('txt');

const DatosUsuario = document.createElement('div');
const ContenidoUsuario = `
<form id="form" method="post">
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Usuario</span>
            <div id="div1"></div>
            <input type="text" class="form-control" placeholder =${nombreuser} aria-label="Username" aria-describedby="basic-addon1">
          </div>
          
          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder=${emailuser} aria-label="Recipient's username" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">Email</span>
          </div>
          
          <div class="input-group mb-3">
          <span class="input-group-text">Constraseña</span>
          <input type="password" class="form-control"  aria-label="Username" placeholder="${passuser}">
          </div>
          
          <div class="input-group">
            <span class="input-group-text">Dejanos tu Feedback.</span>
            <textarea class="form-control" id="feedbackid" aria-label="With textarea" ></textarea>
          </div>
        <br>
        <button type="submit" class="btn btn-success" id="feedback" onclick="jsonUsuarioFeed()" >Enviar</button>
        <br>
        <br>
        <button type="reset" class="btn btn-danger">Borrar</button>
        <br>
    </form>
`;
DatosUsuario.innerHTML = ContenidoUsuario;
containerDatos.append(DatosUsuario);


