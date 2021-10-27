function cambiarTitulo(){
    console.log("aqui estoy dentro de la función cambiar titulo")
// TRAER EL TÍTULO DESDE EL HTML
    let titulo = document.querySelector("#titulo")
    console.log(titulo)

    titulo.innerHTML = "Titulo Modificado";
    titulo.className = "display-4 text-warning";



}

