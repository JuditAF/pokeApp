
class Pokemon {

    constructor (nombre, imagen, [habilidades]) {

        this.nombre = nombre;
        this.imagen = imagen;
        this.[habilidades] = [habilidades];
    }
};

function postPokemon (nombre, imagen, habilidades) {

    let newPokemon = new Pokemon (document.getElementById("nombre"), 
                                  document.getElementById("imagen"),
                                  document.getElementById("habilidades")
                                );

    console.log(JSON.stringify(newPokemon));

    let xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:3000/poke", true);
    xhttp.setRequestHeader("Content-Type", "aplication/json");
    xhttp.send(JSON.stringify(newPokemon));
};

function getPokemon () {};