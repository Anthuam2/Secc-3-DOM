const crearCookie = () => {
    // document.cookie = "nombre=Anthuam";
    document.cookie = "nombre=Anthuam";
};
let mostrar;

const iniciarSecion = () => {
    const usuario = prompt("escribe tu nombre de usuario");
    // const correo = prompt("escribe tu correo");
    // const password = prompt("escribe tu contraseña");
    document.cookie = `nombre=${usuario}`;
    // document.cookie = `correo=${correo}`;
    // document.cookie = `password=${password}`;
    alert("Seción Iniciada Correctamente");
};

// console.log(document.cookie);

/*  

    Forma para obtener el usuario de la cookies.

*/

let usuario;

const cookies = document.cookie.split(";");
cookies.forEach(cookie => {
    const propiedad = cookie.split("=")[0];
    if (propiedad === "nombre") {
        usuario = cookie.split("=")[1];
    }
});

if (usuario) {
    console.log(`Hola! ${usuario}`);
} else {
    console.log("Porfavor inicia secion");
}

const cerrarSecion = () => {
    document.cookie = "nombre=; expires=1 Jan 2020 12:00:00 UTC";
    console.log("Nos vemos");
};
