/* 

    📌 window.setTimeout() - Para ejecutar una accion despues un tiempo espesificado.

*/

// const saludo = () => {
//     console.log("hola");
// };

// // setTimeout(saludo, 5000);

// let id;
// const iniciar = () => {
//     console.log("Iniciando timer");
//     id = setTimeout(saludo, 5000);
// };

// const parar = () => {
//     console.log("Parando timer");
//     console.log("Timer parado")
//     clearTimeout(id);
// };

/* 

    📌 window.setInterval() - Nos permite ejecutar una accion cada cierto tiempo espesificado

*/

let i = 0;
let id;

const iniciar = () => {
    id = setInterval(() => {
        console.log("Hola!", i);
        i++;
    }, 500);
};

const parar = () => {
    console.log("paramos la cuenta");
    clearInterval(id);
};
