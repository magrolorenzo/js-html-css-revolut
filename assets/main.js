$(document).ready(function () {

    $(".right-header span").mouseenter(function () {

        var current_visisble_dropdown = $(".dropdown.visible");
        console.log(current_visisble_dropdown);
        // Quando il mouse passa sopra ad un LINK
        // Visualizza il dropdown menu relativo ad esso
        current_visisble_dropdown.removeClass("visible");
        $(this).children(".dropdown").addClass("visible");
        // e nasconde eventuali dropdown menu aperti
        // Chiudi il menu quando esci da esso e non dal LINK
    })

});
