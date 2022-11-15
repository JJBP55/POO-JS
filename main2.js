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

const juan2 = new Student({
    name: "JuanDc",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "Miguelitofeliz",
    email: "juanito@juanito.com",
    instagram: "miguelitofeliz",
});