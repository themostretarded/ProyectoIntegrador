var conteo = 0;
var veces = 0;
var filas = 0;
var r = "0";
$(() => {
    $("#agregar").click(() => {

        if (conteo == 0) {
            $("#contenedor").append("<div class=\"w3-row\" id=\"contenido" + filas + "\"></div>");
            filas = filas + 1;
        }
        
        $("#"+"contenido" + r).append("<div class=\"w3-col m3 l2\"><div class=\"w3-card\"><p>w3-card</p></div></div>");
        conteo = conteo + 1;
        if (conteo == 6) {
            conteo = 0;
            r = filas.toString()
        }
        veces = veces + 1;
        console.log("conteo:" + conteo + "\n veces:" + veces);
        console.log("#contenido" + r);
    });
})
/*Funciones para la barra normal*/
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}