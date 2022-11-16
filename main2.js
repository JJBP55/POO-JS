//objeto literal

// const juan1 = {
//     name: "JuanDC",
//     username: "Juandc",
//     points: 100,
//     socialMedia: {
//         twitter: "fjuandc",
//         instagram: "fjuandc",
//         facebook: undefined,
//     },
    
//     approvedCourses: [
//         "Curso Definitivo de HTML y CSS",
//         "Curso Práctico de HTML y CSS",
//     ],

//     learningPaths: [
//         {
//             name: "Escuela de Desarrollo Web",
//             courses: [
//                 "Curso Definitivo de HTML y CSS",
//                 "Curso Práctico de HTML y CSS",
//                 "Curso de Responsive Desing",
//             ],
//         },
//         {
//             name: "Escuela de Videojuegos",
//             courses: [
//                 "Curso Introducción a la Producción de Vgs",
//                 "Curso de Unreal Engine",
//                 "Curso de Unity 3D",
//             ],
//         },
//     ],
// }    

// const Miguel = {
//     name: "Miguelito",
//     username: "Miguelitofeliz",
//     points: 100,
//     socialMedia: {
//         twitter: "Miguelitofeliz",
//         instagram: "Miguelito_feliz",
//         facebook: undefined,
//     },
    
//     approvedCourses: [
//         "Curso DataBusiness",
//         "Curso DataViz",
//     ],

//     learningPaths: [
//         {
//             name: "Escuela de Desarrollo Web",
//             courses: [
//                 "Curso Definitivo de HTML y CSS",
//                 "Curso Práctico de HTML y CSS",
//                 "Curso de Responsive Desing",
//             ],
//         },
//         {
//             name: "Escuela de Data Science",
//             courses: [
//                 "Curso DataBusiness",
//                 "Curso DataViz",
//                 "Curso Tableau",
//             ],
//         },
//     ],
// } 

//Class

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths  = learningPaths;
    }
}

class learningPaths{
    constructor({
        nameSchool,
        courses = [],
    }){
        this.nameSchool = nameSchool;
        this.courses = courses;
    }
};

class Course{
    constructor({
        name,
        classes = [],
    }){
        this.name = name;
        this.classes = classes;
    }
}


//instancias
const juan2 = new Student({
    name: "JuanDc",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "Miguelitofeliz",
    email: "juanito@juanito.com",
    instagram: "miguelitofeliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

const escuelaWeb = new learningPaths({
    name: "Escuela de Desarrollo web",
    courses: [
        cursoProBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaData = new learningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProBasica,
        "Curso DataBusiness",
        "Curso Dataviz",
    ],
});

const escuelaVgs = new learningPaths({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
});

const cursoProBasica = new Course({
    name: "Curso Gratis de Programación Básica",
});

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
});