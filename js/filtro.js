// Llamo a la libreria Muuri JS para que funcione en mi web

const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
})


window.addEventListener('load', () => {
    grid.refreshItems().layout()

    // Cuando la web cargue recien se van a cargar las imagenes
    document.getElementById("grid").classList.add('imagenes-cargadas')

    // Llamo a todos los enlaces de categorias
    const enlaces = document.querySelectorAll("#categorias a")

    // Cuando haga click en un enlace se activara lo siguiente:
    enlaces.forEach( (elemento) => {
        //console.log(elemento);
        elemento.addEventListener("click", (evento) => {

            // Quito por defecto el # que aparace cuando hacemos click en un enlace
            evento.preventDefault()
            //console.log(evento.target);

            enlaces.forEach((enlace) => enlace.classList.remove("activo"))
            evento.target.classList.add("activo")

            const categoria = evento.target.innerHTML.toLowerCase()

            //console.log(categoria)

            categoria === "todos" ? grid.filter("[data-categoria]") : grid.filter(`[data-categoria="${categoria}"]`)
        })
    })
})