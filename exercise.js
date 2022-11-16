// Dadas la siguientes clases:

// Clase Banda con las propiedades:

// nombre - string
// generos - Array
// integrantes - Array
// Crea una clase llamada "Integrante" con las propiedades:

// nombre - string
// instrumento - string
// Escribe la lógica para agregar integrantes a la clase Banda en la función agregarIntegrante. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con instrumento "Bateria".


class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
      // Tu código aquí 👈
        let mSome = this.integrantes.some(function(integranteNuevo){
            return integranteNuevo.instrumento === "Bateria";
        })

        if (mSome == true){
            console.log("Solo se puede agregar un baterista")
        }
        else{
            this.integrantes.push(integranteNuevo);
        }

    }
        
};
  
//Crear clase Integrante
class Integrante {
    // Tu código aquí 👈
    constructor({
        nombre,
        instrumento,
    }){
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
}
  

const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
}

const banda = new Banda(data)
banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))

