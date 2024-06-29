
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

async function mostrarPokemon(nombre) {
    try {

        let nombrePokemon = document.getElementById("nombre").value.toLowerCase();

        console.log(nombrePokemon);


        let url = " https://pokeapi.co/api/v2/pokemon/" + nombrePokemon;

        let param = {
            headers: { "Content-Type": "aplication/json; charset= UTF-8" },
            method: "GET"
        };

        let data = await fetch(url, param)
        let result = await data.json();

        console.log(result);

        document.getElementById("pokeHabilidades").innerHTML = result.abilities.map(ability => {let fila = tablePoke.insertRow()
                                                                                                fila.innerText = ability.ability.name});
        document.getElementById('pokeNombre').innerText = result.name.toLowerCase();
        document.getElementById('pokePeso').innerText = result.weight;
        document.getElementById('pokeTipo').innerHTML = result.types[0].type.name;
        document.getElementById('pokeImagen').src = result.sprites.front_default;

    }
    catch (error) {

        console.log(error);
    }
};

