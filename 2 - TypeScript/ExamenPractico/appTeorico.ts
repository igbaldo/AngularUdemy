//1.
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const personaje = {
    nombre: nombre,
    edad: edad
};

console.log(personaje);

//2.
interface SuperHeroe{
    nombre:string;
    artesMarciales:string[];
}

let batman:SuperHeroe = {
    nombre: "Bruno Diaz",
    artesMarciales:["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

console.log(batman);

//3.
// function resultadoDoble( a:any, b:any ){
//     return (a + b) * 2
//   }

let resultadoDobleF = (a:number, b:number) => (a+b)*2;

//4.
function getAvenger( nombre:string, poder?:string, arma:string = "arco"){
    let mensaje:string;

    if( poder ){
       mensaje = `${nombre} tiene el poder de: ${poder} y un arma ${arma}.`;
    }else{
       mensaje = nombre + " tiene un " + poder
    }
  };
  
//5.
class Rectangulo{
    base:number;
    altura:number;

    constructor(base:number, altura:number){
        this.base = base;
        this.altura = altura;
    }

    calculaArea(): number {
        return this.base * this.altura;
    };
}

