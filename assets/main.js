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
        if (pokemon[i].uu) {
             loadPKMN(i);
        }

    }
}

else if (val === "ru") {

    $( "#display" ).empty();
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].ru) {
             loadPKMN(i);
        }
    }


}


else if (val === "nu") {

    $( "#display" ).empty();
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].nu) {
             loadPKMN(i);
        }
    }


}


else if (val === "pu") {

    $( "#display" ).empty();
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].pu) {
             loadPKMN(i);
        }
    }


}


else if (val === "beta") {

    $( "#display" ).empty();
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].beta) {
             loadPKMN(i);
        }
    }


}

else if (val === "gamma") {

    $( "#display" ).empty();
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].gamma) {
             loadPKMN(i);
        }
    }


}


else if (val === "delta") {

    $( "#display" ).empty();
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].delta) {
             loadPKMN(i);
        }
    }


}


else if (val === "epsilon") {

    $( "#display" ).empty();
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].epsilon) {
             loadPKMN(i);
        }
    }


}

else if (val === "zeta") {

    $( "#display" ).empty();
    for (var i = 0; i < pokemon.length; i++) {
        if (pokemon[i].zeta) {
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
