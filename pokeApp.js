
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

        let newPokemon = new Pokemon(document.getElementById("nombre").value.toLowerCase(),
                                     document.getElementById("imagen").value,
                                     document.getElementById("habilidades").value,
                                     document.getElementById("estadisticas").value,
                                     document.getElementById("tipo").value,
                                     document.getElementById("peso").value

        );

        let url = " https://pokeapi.co/api/v2/pokemon/" + nombre;

        let param = {
                      headers: {"Content-Type": "aplication/json; charset= UTF-8"},
                      body:JSON.stringify(newPokemon),
                      method: "GET"
                    };
        
        let data = await fetch(url, param);

        let result = await data.json();

        console.log(result);
        
    }
    catch(error) { 

        console.log(error);
    }
};

