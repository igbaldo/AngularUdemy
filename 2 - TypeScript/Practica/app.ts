function saludar(nombre: string) {
    console.log("Hola " + nombre.toUpperCase());
}

var wolverine = {
    nombre: "Logan"
};

saludar(wolverine.nombre);

let mensaje = "hola";
if(true){
    let mensaje = "mensaje";
}
console.log(mensaje);


const opciones = "todas";
if(true){
    const opciones = "ninguna";
}
console.log(opciones);

//tipo de variables
let nombre1:string = "peter";
let numero:number = 123;
let boolean:boolean = true;
let fecha:Date = new Date('2019-11-12');

let cualquiera: any;
cualquiera = nombre1;
cualquiera = numero;
cualquiera = boolean;
cualquiera = fecha;

let spiederman = {
    nombre: "Peter",
    edad: 30
}

spiederman = {
    nombre: "nacho",
    edad: 25
}

console.log(spiederman.nombre);

//literales
let texto = `Hola, ${nombre1} ${numero} 
${fecha.toDateString()}`;

let texto2 = `${1 + 2}`;

console.log(texto);
console.log(texto2);

//parametros en funciones

function activar(   quien:string, 
                    objeto:string = "batiseñal",
                    momento?:string ){
    
    let mensaje:string;

    if(momento){
        mensaje = `${quien} activó la ${objeto} ${momento}`;
    }

    mensaje = `${quien} activó la ${objeto}`;
    console.log(mensaje);
}

activar("Gordon");

//funciones de flecha 
let miFuncion2 = function( a:number, b:number){
    return a+b;
}

let miFuncion2F = (a:number, b:number) => a+b;

let miFuncion3 = function(nombre:string){
    return nombre.toUpperCase();
}

let miFuncion3F = (nombre:string) => {
    return nombre.toUpperCase();
}

let hulk = {
    nombre: "Hulk",
    smash(){
        setTimeout( ()=> console.log(this.nombre + " smash !!"), 1);
    }
}

hulk.smash();

//destructuracion de objetos y arreglos

let avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
}

let {nombre, clave, poder} = avenger;

console.log(nombre, clave, poder);

let avengers:string[] = ["Thor", "Steve", "Tony"];

let [thor, capi, ironman] = avengers;

console.log(thor, capi, ironman);

//promesas ES6

let prom1 = new Promise( function(resolve, reject){

    setTimeout( ()=> {
        console.log("Promesa Terminada");
        resolve();
        //reject();
    }, 1)
})

console.log("Paso 1");

prom1.then(function(){ console.log("Ejecutarme cuando se termine bien.")}, function(){ console.log("Error: Algo salió mal.")})

//Interfaces de tsc

interface Xmen{
    nombre:string,
    poder:string
}

let wolverine2:Xmen = {
    nombre: "Wolverine",
    poder: "Refenerarse"
}

function enviarMision(xmen : Xmen){
    console.log("Enviando a la mision a " + xmen.nombre)
};

function enviarCuartel(xmen : Xmen){
    console.log("Enviando al cuartel " + xmen.nombre)
};

enviarMision(wolverine2);
enviarCuartel(wolverine2);

//clases 

class Avenger{
    nombre:string;
    equipo:string;
    nombreReal:string;
    
    puedePelear:boolean;
    peleasGanadas:number;

    constructor(nombre: string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;

        this.puedePelear = false;
        this.peleasGanadas = 0;
    }
}

let antman:Avenger = new Avenger("AntMan","Capitan America","Scott Lang");
console.log(antman);

//Decoradores

function consola( constructor:Function){
    console.log(constructor);
}


@consola
class Villano{

    constructor( public nombre:string){

    }
}
