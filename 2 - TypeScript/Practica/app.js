var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function saludar(nombre) {
    console.log("Hola " + nombre.toUpperCase());
}
var wolverine = {
    nombre: "Logan"
};
saludar(wolverine.nombre);
var mensaje = "hola";
if (true) {
    var mensaje_1 = "mensaje";
}
console.log(mensaje);
var opciones = "todas";
if (true) {
    var opciones_1 = "ninguna";
}
console.log(opciones);
//tipo de variables
var nombre1 = "peter";
var numero = 123;
var boolean = true;
var fecha = new Date('2019-11-12');
var cualquiera;
cualquiera = nombre1;
cualquiera = numero;
cualquiera = boolean;
cualquiera = fecha;
var spiederman = {
    nombre: "Peter",
    edad: 30
};
spiederman = {
    nombre: "nacho",
    edad: 25
};
console.log(spiederman.nombre);
//literales
var texto = "Hola, " + nombre1 + " " + numero + " \n" + fecha.toDateString();
var texto2 = "" + (1 + 2);
console.log(texto);
console.log(texto2);
//parametros en funciones
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " " + momento;
    }
    mensaje = quien + " activ\u00F3 la " + objeto;
    console.log(mensaje);
}
activar("Gordon");
//funciones de flecha 
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (nombre) {
    return nombre.toUpperCase();
};
var miFuncion3F = function (nombre) {
    return nombre.toUpperCase();
};
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash !!"); }, 1);
    }
};
hulk.smash();
//destructuracion de objetos y arreglos
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(thor, capi, ironman);
//promesas ES6
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa Terminada");
        resolve();
        //reject();
    }, 1);
});
console.log("Paso 1");
prom1.then(function () { console.log("Ejecutarme cuando se termine bien."); }, function () { console.log("Error: Algo salió mal."); });
var wolverine2 = {
    nombre: "Wolverine",
    poder: "Refenerarse"
};
function enviarMision(xmen) {
    console.log("Enviando a la mision a " + xmen.nombre);
}
;
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel " + xmen.nombre);
}
;
enviarMision(wolverine2);
enviarCuartel(wolverine2);
//clases 
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = false;
        this.peleasGanadas = 0;
    }
    return Avenger;
}());
var antman = new Avenger("AntMan", "Capitan America", "Scott Lang");
console.log(antman);
//Decoradores
function consola(constructor) {
    console.log(constructor);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola
    ], Villano);
    return Villano;
}());
