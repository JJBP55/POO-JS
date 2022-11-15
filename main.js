// objeto literal

const natalia = {
    //Atributos
    name: 'Natalia',
    apellido: 'Perez',
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    //Metodos
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    },
};

// Hacer que Natalia apruebe oto curso

natalia.cursosAprobados.push("Curso de Responsive Desing");

//prototipo

function Student(name, age, cursosAprobados){
    //atributos
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso);
    // }
}

Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

//

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes",
    ]
);