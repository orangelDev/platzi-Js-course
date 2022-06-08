// const precioOriginal = 120;
// const descuento = 18;



function calcularPrecioCondescuento(precio, descuento) {
    const porcentajePrecioCondescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioCondescuento) / 100;

    return precioConDescuento;
}

// Reto 2 : Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.

// Solución #1: arrays y switch

//Analicemos el problema y nuestra propuesta de solución:

// Crearemos un array con cada uno de nuestros cupones.
// Cambiaremos el input de descuento en HTML por un input de cupones.
// Usaremos un condicional switch para aplicar cierto porcentaje de descuento en nuestros productos dependiendo del cupón que se haya elegido al presionar el botón del formulario.
// Vamos paso a paso:

// Crear un array de cupones

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

//     Solución #2: legibilidad, error first y muerte al switch

// Legibilidad es la facilidad que ofrece nuestro código para entenderlo sin tropiezos cuando lo leemos. Mejorar la legibilidad es mucho más importante que reducir la cantidad de líneas de código.

// Además, error-first es un patrón de programación donde atrapamos los errores antes de escribir el resto de la lógica de nuestros programas. Aplicar error-first nos puede ayudar a mejorar la legibilidad de nuestro código (es completamente válido tener otra opinión, no te preocupes, cuéntame en los comentarios).

// Error first con array.includes
// La función array.includes() nos permite validar si un elemento ha sido almacenado en el array. Vamos a usar esta función para ejecutar un error si el cupón de los usuarios es inválido (no fue guardado en el array coupons):
    
    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + " no es válido");
    } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
     } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30;
     } else if (couponValue === "es_un_secreto") {
        descuento = 25;
     }

    // switch(couponValue) {
    //   case coupons[0]: // "JuanDC_es_Batman"
    //     descuento = 15;
    //   break;
    //   case coupons[1]: // "pero_no_le_digas_a_nadie"
    //     descuento = 30;
    //   break;
    //   case coupons[2]: // "es_un_secreto"
    //     descuento = 25;
    //   break;
    // }


    const precioConDescuento = calcularPrecioCondescuento(priceValue, descuento);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento son : $" + precioConDescuento 

}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioCondescuento,
//     precioConDescuento,
// })