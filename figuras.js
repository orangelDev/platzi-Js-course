// Código del cuadraro
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log(`los lados de cuadrado miden : ${ladoCuadrado}`+ `cm`);

function perimetroCuadrado(lado) {
   return lado * 4;
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
 } 
// console.log("El área del cuadrado mide : " + areaCuadrado + "cm^2");

console.groupEnd();

//Código del triangulo

console.group("Triángulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log("Los lados del triangulo miden : "
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm"
// );

const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide : " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log("El área del triangulo mide : " + "cm^2");

function alturaTrianguloIs(lado1, lado2,  base) {
return Math.sqrt(lado1**2 - (base**2 / 4))
 }

console.groupEnd();

//Código del Circulo

console.group("Círculos");

// Radio

// const radioCirculo = 4;
// console.log("El radio del circulo es : " + radioCirculo + "cm");

// Díametro

function diametroCirculo(radio) {
    return radio * 2
}

// PI

const PI = Math.PI;
console.log("El PI es : " + PI );

//Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

//Aréa 


function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.log("El área del circulo es : " + areaCirculo + "cm^2 ");

console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
const input = document.getElementById("InputCuadrado");
const value = input.value;

const perimetro = perimetroCuadrado(value);
alert(perimetro);
}

function calcularAreaCuadrado() {
const input = document.getElementById("InputCuadrado");
const value = input.value;

const area = areaCuadrado(value);
alert(area);
}

function calcularPerimetroTriangulo() {
    const ladoA = document.getElementById("InputTriangulo1");
    const L1 = parseFloat(ladoA.value);

    const ladoB = document.getElementById("InputTriangulo2");
    const L2 = parseFloat(ladoB.value);

    const base = document.getElementById("InputTriangulo3");
    const B = parseFloat(base.value);

    const perimetro = perimetroTriangulo(L1, L2, B)
    alert("El Perimetro del triangulo es de: " + perimetro + " cm");
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputTriangulo3");
    const B = parseFloat(base.value);

    const altura = document.getElementById("InputTrianguloAltura");
    const A = parseFloat(altura.value);

    const perimetro = areaTriangulo(A,B);
    alert("El area del triangulo es de: " + perimetro + " cm");
}

function calcularDiametroCirculo() {
    const radio = document.getElementById("InputCirculo");
    const R = parseFloat(radio.value);

    const diametro = diametroCirculo(R);
    alert("EL diametro del circulo es de : " + diametro + " cm");
}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputCirculo");
    const R = parseFloat(radio.value);

    const area = areaCirculo(R);
    alert("El área del circulo es de " + area + " cm");
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputCirculo");
    const R = parseFloat(radio.value);

    const perimetro = perimetroCirculo(R);
    alert("La circunferencia es de : " + perimetro + " cm");
}

