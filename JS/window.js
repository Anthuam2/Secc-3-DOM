// console.log(
//     `Tu ventana mide ${window.innerWidth}px de ancho y ${window.innerHeight}px de alto`
// );

/*
    📌 window.open()
    Nos permite abrir ventanas del navegador
    Nota: Es posible que el navegador te pida permisos para abrir una nueva
    ventana.

    -1er parametro: Dirección de la nueva ventana
    -2do parametro: Nombre de la ventana
    -3er parametro: Cadena de texto de opciones

    Nos devuelve un objeto para aceder a esa ventana 

*/

// let ventana;
// const abrirVentana = () => {
//     ventana = window.open("https://www.google.com", "Pedro", "width=100,height=300");
//     ventana.document.write("<h1>hola desde una nueva ventana</h1>")
// };

// const cerrarVentana = () => {
//     ventana.close();
// };

/* 

    📌 Screen Object - Representa la pantalla del usuario

*/

console.log("Ancho de pantalla:" + window.screen.width);
console.log("alto de pantalla:" + window.screen.height);
console.log("alto de pantalla sin la barra de aplicaciones:" + window.screen.availHeight);

CanvasGradient