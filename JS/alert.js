/* 

    📌 Alerta
    Para informarle al usuario de algo

*/

// window.alert("Hola!");
// alert("Hola!"); // es lo mismo

/* 

    📌 Ventana de confirmacion - confirm("")
    Una ventana donde el usuario puede cancelar o aceptar.
    Retorna true o false dependiendo de la respuesta del usuario.

*/

// const ingresar = () => {
//     const accesoPermitido = confirm("Eres mayor de 18 años?");
//     if (accesoPermitido) {
//         alert("Bienvenido");
//     } else {
//         alert("Le diremos a tus padres");
//     }
// };

/* 

    📌 Ventana con input - prompt
    Una ventana donde el usuario puede introducir un valor.
    Retorna un string con la respuesta del usuario.

*/

const saludar = () => {
    const persona = prompt("Escribe tu nombre");
    alert(`Hola! ${persona}`)
};
