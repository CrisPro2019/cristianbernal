var flex_menu   = document.getElementById("list-menu")
var icon_menu   = document.getElementById("icon-menu")
var line_1      = document.getElementById("line-1")
var line_2      = document.getElementById("line-2")
var line_3      = document.getElementById("line-3")
var nav_scroll  = document.getElementById("nav")
var nav_cont    = document.getElementById("container-nav")
var cb_text     = document.getElementById("cbtext")
var cb_text2     = document.getElementById("cbtext2")
var scroll_down = document.getElementById("scroll-down")
var cuerpo      = document.getElementById("body")

icon_menu.addEventListener("click", function() {
    //console.log("Hola desde el icono")
    line_1.classList.toggle("active")
    line_2.classList.toggle("active")
    line_3.classList.toggle("active")
    flex_menu.classList.toggle("active")
    nav_scroll.classList.toggle("active-2")
    cb_text.classList.toggle("active")
    cb_text2.classList.toggle("active")
    cuerpo.classList.toggle("active-scroll")
})

window.addEventListener("scroll", function() {
    //console.log("El scroll funciona")
    const scrollable = document.documentElement.scrollHeight - window.innerHeight // RESTA DE LA PANTALLA SCROLL - LA FIJA
    const scroll_Height = document.documentElement.scrollHeight // ALTURA DE LA PANTALLA
    const scroll_window = window.innerHeight // ALTURA FIJA SIN SCROLL DE LA PANTALLA
    const scrolled = window.scrollY // PARA MEDIR EL SCROLL DE LA PAGINA

    if(scrolled > 0) {
        nav_scroll.classList.add("active")
        nav_cont.classList.add("active")
    } else {
        nav_scroll.classList.remove("active")
        nav_cont.classList.remove("active")
    }

    if(scrolled > 500) {
        scroll_down.classList.add("active")
        scroll_down.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        })
    } else {
        scroll_down.classList.remove("active")
    }
    
})

