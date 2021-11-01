function cambiarTitulo(){
    console.log("aqui estoy dentro de la función cambiar titulo")
// TRAER EL TÍTULO DESDE EL HTML
    let titulo = document.querySelector("#titulo")
    console.log(titulo)

    //OTRA FORMA!!! de traer el h1:

    //let titulo = document.getElementById("titulo")
    //no hace falta que ponga el # 

    titulo.innerHTML = "Titulo Modificado";
    titulo.className = "display-4 text-warning";



}

function verMas(){
    console.log("desde la función ver más")

    //AGREGARLE UN PÁRRAFO AL Div del HTML

    //div será el contenedorPadre

    let contenedorPadre = document.querySelector("#articulo");
    console.log(contenedorPadre);

    let btnVerMas = document.querySelector("#btnVerMas");

    if(btnVerMas.innerHTML == "Ver más" ){ 



    //OPCION 1 = CAMINO CORTO
   
    //para maquetado más complejo, con muchas etiquetas, como una Card
    //no es considerado buena práctica

    /*contenedorPadre.innerHTML += `<p class="lead">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
    alias necessitatibus velit voluptate. Pariatur dicta velit, ducimus
    eius culpa consequatur optio? Sapiente repellat facere, vitae iste
    quae molestiae, quis sequi sit voluptates optio officia, possimus
    eligendi. Quae, quos vitae illo totam ullam tenetur autem aspernatur
    beatae neque explicabo sapiente similique quas accusamus iusto nemo.
    Facere error nesciunt, cum deserunt doloremque fuga nisi cupiditate
    obcaecati aspernatur quisquam? Velit vel numquam odit nisi, quia
    quam. Minus sed non, similique quia molestiae cumque in iste quidem
    facilis culpa. Ullam amet totam odio magnam ducimus inventore
    doloremque quos dolores vero nulla, ex earum id.
  </p>`*/


  //OPCIÓN 2 = CAMINO LARGO 
  // //para maquetado más simple, para cuando quiera hacer cosas simples
  //es buena práctica

  //1.- Crear el elemento que me interesa maquetar, como un objeto{}

  let parrafo = document.createElement("p");

  //me crear un objeto{} párrafo
  //console.log(parrafo)

  //2.- trabajar el elemento creado

  parrafo.innerHTML = "aquí agrego el párrafo de prueba que irá dentro de la etiqueta <p>";
  
  //para mofificar la clase de un objeto{}

  parrafo.className = "lead";

  //3.- Insertar el elemento en el maquetado

  //agarrar el contenedor padre y agregarle un nuevo nodo hijo en su arbolito

  contenedorPadre.appendChild(parrafo);

  //así agrego un nuevo nodo hijo


btnVerMas.innerHTML = "Ocultar";
btnVerMas.className = "btn btn-danger";

} else{
    console.log("quiero ocultar el párrafo");

    //¿¿Cómo ¡¡¡BORRAR!! el párrafo del DOM????

    //¿tiene nodos hijos?
    console.log(contenedorPadre.hasChildNodes());

    //obtenemos un arreglo [] con los nodos hijos
    console.log(contenedorPadre.children.length);

    //entonces, si la cantidad de hijos son dos, quiero borrar uno

    if(contenedorPadre.hasChildNodes() && contenedorPadre.children.length == 2){
        //aquí digo que quiero BORRAR un nodo
        contenedorPadre.removeChild(contenedorPadre.children[1]);

        btnVerMas.innerHTML = "Ver más";
    btnVerMas.className = "btn btn-primary";
        
    }

    //CAMBIAR el texto del boton de nuevo a "ver más"
    /* btnVerMas.innerHTML = "Ver más";
    btnVerMas.className = "btn btn-primary";*/     
}


}


//la propiedad para acceder al texto de una etiqueta <input> es VALUE no es innerHTML