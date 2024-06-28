
class Pokemon {

    constructor(nombre, imagen, [habilidades], [estadisticas], tipo, peso) {

        this.nombre = nombre;
        this.imagen = imagen;
        this.habilidades = [habilidades];
        this.estadisticas = [estadisticas];
        this.tipo = tipo;
        this.peso = peso;
    }
};

async function getPokemonParams(nombre) {
    try {

        let nombrePokemon = document.getElementById("nombre").value.toLowerCase();

        let url = " https://pokeapi.co/api/v2/pokemon/" + nombre;

        let param = {
                      headers: {"Content-Type": "aplication/json; charset= UTF-8"},
                    //   body:JSON.stringify(nombrePokemon),
                      method: "GET"
                    };
        
        let data = await fetch(url, param);

        let result = await data.json();

        document.getElementById("pokeHabilidades").innerHTML = JSON.stringify(result.abilities[i].ability.name);
        document.getElementById("pokeEstadistica").innerHTML = JSON.stringify(result.stats[i].stat.name);
        document.getElementById("pokeEstaDato").innerHTML = JSON.stringify(result.stats[i].base_stat);
        document.getElementById('pokeNombre').innerText = pokemon.name;
        document.getElementById('pokeImagen').src = pokemon.sprites.front_default;
        document.getElementById('pokePeso') = pokemon.weight;
        document.getElementById('pokeTipo') = pokemon.type[0].type.name;

        console.log(result);

    }
    catch(error) { 

        console.log(error);
    }
};

