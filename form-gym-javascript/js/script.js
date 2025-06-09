var botonNoche = document.querySelector("#noche");
var botonDia = document.querySelector("#dia");

botonNoche.addEventListener("click", function() {
    document.body.classList.remove("dia");
    document.body.classList.add("noche");
    botonNoche.classList.remove("active");
    botonNoche.classList.add("hidden");
    botonDia.classList.remove("hidden");
    botonDia.classList.add("active");
});

botonDia.addEventListener("click", function() {
    document.body.classList.remove("noche");
    document.body.classList.add("dia");
    botonDia.classList.remove("active");
    botonDia.classList.add("hidden");
    botonNoche.classList.remove("hidden");
    botonNoche.classList.add("active");
})