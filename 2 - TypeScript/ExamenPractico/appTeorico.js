//1.
var nombre = "Ricardo Tapia";
var edad = 23;
var personaje = {
    nombre: nombre,
    edad: edad
};
console.log(personaje);
var batman = {
    nombre: "Bruno Diaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
console.log(batman);
//3.
// function resultadoDoble( a:any, b:any ){
//     return (a + b) * 2
//   }
var resultadoDobleF = function (a, b) { return (a + b) * 2; };
//4.
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma " + arma + ".";
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
}
;
//5.
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calculaArea = function () {
        return this.base * this.altura;
    };
    ;
    return Rectangulo;
}());
