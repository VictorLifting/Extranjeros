let botones = document.querySelectorAll(".go")
let contenido = document.querySelector(".contenido")

botones[1].addEventListener("click", function () {


    contenido.classList.add("slideOutUp")

    let retrasoCambio = setTimeout(function () {
        document.location.href = "./pantalla1.html"
    }, 1000)

})