//Variables Registrar Usuarios
var nombre = document.getElementById('nombre')
var apellido = document.getElementById('apellido')
var celular = document.getElementById('celular')
var correo = document.getElementById('correo')
var fecha = document.getElementById('fecha_nacimiento')
var genero = document.getElementById('genero')
var contrasena = document.getElementById('contrasena')
var verificarContrasena = document.getElementById('verificarContrasena')
var tipoPelicula = document.getElementById('tipoPelicula')
//Variables para datos de Peli
var peliAccion = document.getElementById('peli_accion')
var peliDrama = document.getElementById('peli_drama')
var peliAventura = document.getElementById('peli_aventura')
var peliFiccion = document.getElementById('peli_ficcion')
var peliAnimadas = document.getElementById('peli_animadas')
var peliOtras = document.getElementById('peli_otras')

//Boton registrate
var btnEnviar = document.getElementById('btn-enviar')
//Clases para manejar ERRORES DE VALIDACION 
var claseNombre = document.querySelector('.nombre')
var claseApellido = document.querySelector('.apellido')
var claseCelular = document.querySelector('.celular')
var claseCorreo = document.querySelector('.correo')
var claseFecha = document.querySelector('.fecha_nacimiento')
var claseGenero = document.querySelector('.genero')
var claseContrasena = document.querySelector('.contrasena')
var claseVerificarContrasena = document.querySelector('.verificarContrasena')
var claseTipoPelicula = document.querySelector('.tipoPelicula')
var claseVerificarPelicula = document.querySelector ('.verificartipoPelicula')

//VARIABLES PARA DEJAR INGRESAR USUARIO
var mensajeNombre = document.querySelector('.mensajeNombre')

//VARIABLES PARA EXPRESIONES REGULARES
var validarContrasena = /^[A-Za-z0-9]/

//FUNCION REGISTRO DE USUARIO
function activarError(elemento, mensaje = '') {
    if (mensaje != '') {
        elemento.lastElementChild.innerHTML = `<span class="text-danger"> ${mensaje} </span>`
    } else {
        elemento.lastElementChild.innerHTML = mensaje
    }
}

//FUNCION INGRESAR USUARIO NUEVO

function accesoUsuario (){
    
}

function registroUsuario() {
    //Validar campo NOMBRE 
    if (nombre.value != '') {
        activarError(claseNombre)
        console.log(nombre.value)
    } else {
        activarError(claseNombre, 'Esta casilla NO puede estar vacia, por favor ingrese su Nombre.')
        console.error('El usuario no agregó informacion sobre su Nombre')
    }
    //Validar campo APELLIDO
    if (apellido.value != '') {
        activarError(claseApellido)
        console.log(apellido.value)
    } else {
        activarError(claseApellido, 'Esta casilla NO puede estar vacia, por favor ingrese su Apellido.')
        console.error('El usuario no agregó informacion sobre su Apellido ')
    }
    //Validar campo CELULAR
    if (celular.value != '') {
        activarError(claseCelular)
        console.log(celular.value)
    } else {
        activarError(claseCelular, 'Esta casilla NO puede estar vacia, por favor ingrese su Número Celular.')
        console.error('El usuario no agregó informacion sobre su Celular')
    }
    //Validar campo CORREO
    if (correo.value != '') {
        activarError(claseCorreo)
        console.log(correo.value)
    } else {
        activarError(claseCorreo, 'Esta casilla NO puede estar vacia, por favor ingrese su Correo.')
        console.error('El usuario no agregó informacion sobre su Correo')
    }
    //Validar campo FECHA
    if (fecha.value != '') {
        activarError(claseFecha)
        console.log(fecha.value)
    } else {
        activarError(claseFecha, 'Esta casilla NO puede estar vacia, por favor ingrese su Fecha de Nacimiento.')
        console.error('El usuario no agregó informacion sobre su Fecha de Nacimiento')
    }
    //Validar campo GENERO 
    if (genero.value === '') {
        activarError(claseGenero, 'Selecciona un género')
        console.error('El usuario no agregó su género')
    } else if (genero.value === 'Masculino' || genero.value === 'Femenino') {
        activarError(claseGenero)
        console.log(genero.value)
    }
    //Validad CONTRASEÑA
    if (contrasena.value === '') {
        activarError(claseContrasena, 'Esta casilla NO puede estar vacia, por favor ingrese un Contraseña.')
    } else if (validarContrasena.test(contrasena.value)) {
        activarError(claseContrasena)
        console.log(contrasena.value)
    } else {
        activarError(claseContrasena, 'La contraseña debe contener mayúsculas, minusculas y un número para ser válida.')
    }
    //NO ME SIRVE LA VALIDADCION DE MAYUSCILAS MIN Y DEMAS
    //Validar verificar CONTRASEÑA 
    if (contrasena.value === verificarContrasena.value) {
        activarError(claseVerificarContrasena)
        console.log(verificarContrasena.value)
    } else {
        activarError(claseVerificarContrasena, 'Las contraseñas no coinciden')
    }

    //Verificar que se seleccione alguna clase de genero de pelicula
    if(peliAccion.checked == false && peliDrama.checked == false && peliAventura.checked == false && peliFiccion.checked == false && peliAnimadas.checked == false && peliOtras.checked == false ) {
        // activarError(claseVerificarPelicula, 'DEBE seleccionar pelis' )
        alert('Debe seleccionar mínimo un 1 género de Peliculas.')
    }
        

    //Revisar que generos de peliculas le gustan al usuario 
    if(peliAccion.checked == true)  {
        console.log(peliAccion.value) 
    }
    if (peliDrama.checked == true ) {
        console.log(peliDrama.value)
    }
    if (peliAventura.checked == true ) {
        console.log(peliAventura.value)
    }
    if (peliFiccion.checked == true ) {
        console.log(peliFiccion.value)
    }
    if (peliAnimadas.checked == true ) {
        console.log(peliAnimadas.value)
    }
    if (peliOtras.checked == true ) {
        console.log(peliOtras.value)
    }

}
// NO ME SIRVE LA VALIDACION DE CONTRASEÑA

//Seleccion de Peliculas



//AGREGAR LOS DATOS AL LOCALSTORGE

var validar_formulario = !!document.querySelector(".existe_error")
console.log(validar_formulario)
if (validar_formulario == false) {
    localStorage.setItem("nombre", nombre.value)
    localStorage.setItem("apellido", apellido.value)
    localStorage.setItem("celular", celular.value)
    localStorage.setItem("correo", correo.value)
    localStorage.setItem("fecha_nacimiento", fecha.value)
    localStorage.setItem("genero", genero.value)
    localStorage.setItem("contrasena", contrasena.value)
}



