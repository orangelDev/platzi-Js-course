//Creamos un array con solo los salarios :

const salariosCol = colombia.map(

    function (persona) {
        return persona.salary
    }
);
//Ordenamos el array de meenor a mayor creando un nuevo array y aplicando el metodo .sort :

const salariosColSorted = salariosCol.sort(
    function (salaryA, SalaryB) {
        return salaryA - SalaryB;
    }
);

//Para calcular la mediana depende si el nro es par o impar, entonces se crea la función :


function esPar(numero) {
    return (numero % 2 === 0);
}


function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}
//Ahora creamos una function que calcule la mediana de los salarios para cualquier país :

    function medianaSalarios(lista){
        const mitad = parseInt(lista.length / 2);
    
        if(esPar(lista.length)){
            const personaMitad1 = lista[mitad - 1];
            const personaMitad2 = lista[mitad];
    
    
            const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
            return mediana;
        } else {
            const personaMitad = lista[mitad];
            return personaMitad;
        }
    }
    
    
    console.log(
        medianaSalarios(salariosColSorted)
    );