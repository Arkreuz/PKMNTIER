var sel = document.getElementById('sel');
var dis = document.getElementById('display');

function loadPKMN(i){

$("#display").append(pokemon[i].icon).hide().fadeIn(500);

};



$(function() {
    $("select").change(function() {
        var val = $(this).val();
        if (val === "ou") {

            $( "#display" ).empty();

            for (var i = 0; i < pokemon.length; i++) {
                if (pokemon[i].metagame.ou) {
                     loadPKMN(i);
                }

            }
        }
else if (val === "uu") {

    $( "#display" ).empty();
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].metagame.uu) {
             loadPKMN(i);
        }

    }
}

else if (val === "ru") {

    $( "#display" ).empty();
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].metagame.ru) {
             loadPKMN(i);
        }
    }


}


else if (val === "nu") {

    $( "#display" ).empty();
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].metagame.nu) {
             loadPKMN(i);
        }
    }


}


else if (val === "pu") {

    $( "#display" ).empty();
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].metagame.pu) {
             loadPKMN(i);
        }
    }


}




    });
});





// for (var i = 0; i < pokemon.length; i++) {
//     var nimg = document.createElement("img");
//     nimg.icon = pokemon[i].icon;
//     document.getElementById("display").append(nimg);
// }

// nimg.icon = pokemon[1].icon;
// nimg.icon = pokemon[0].icon;
// document.getElementById("display").appendChild(nimg);
