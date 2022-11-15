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

//Prototipos con las sintaxis de Clases

class Student2 {
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    //metodos
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
};

//nueva instancia

const miguel = new Student2(
    "Miguel Cabrera",
    28,
    "Curso de Análisis de Negocios para ciencia de Datos",
    "Curso de Principios de Visualización de Datos para BI"
);


class Student2 {
    constructor({
        name,
        age,
        twitter,
        instagram,
        facebook,
        cursosAprobados = [],
        email,
    }){
        this.name = name;
        this.email = email;
        this.age = age;
        this.instagram,
        this.facebook,
        this.twitter,
        this.cursosAprobados = cursosAprobados;
    }

    //metodos
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
};

//nueva instancia

const miguelito = new Student2({
    email: "miguelito@platzi.com",
    age: 28,
    name: "Miguel"
});