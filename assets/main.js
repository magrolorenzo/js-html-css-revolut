$(document).ready(function () {

        $(".link").mouseenter(function () {


        // var current_visisble_dropdown = $(".dropdown.visible");

        // Quando il mouse passa sopra ad un LINK Visualizza il relativo dropdown
        $(this).children(".dropdown").addClass("visible");

        // E chiude altri eventuali dropdown aperti
        // current_visisble_dropdown.removeClass("visible");
    })

    $(".link").mouseleave(function () {
        console.log("uscito da span");
        $(this).children(".dropdown").removeClass("visible");
    })


});
