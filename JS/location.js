// href - Retorna la URL de la pagina actual
console.log(location.href);

// hostname - Retorna el host de la pagina actual
console.log(location.hostname);

// pathname - Retorna la ruta y el archivo de la pagina actual
console.log(location.pathname);

// protocol - Retorna el protocolo ultilizado
console.log(location.protocol);

const cargarDocumento = () => {
    location.assign(
        "https://www.figma.com/file/yPGtMvSOy1Yw8UAvaUMQOV/Figma-basics?type=design&node-id=1669-162202&mode=design&t=HWzWzThOj2Xbe8YF-0"
    );
};

const regresar = () => {
    history.back()
};

const irSiguiente =()=>{
    history.forward()
}
