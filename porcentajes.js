const coupons = [
    "Miguel_el_profe",
    "no_sufras_tanto",
    "secreto_en_la_montaña"
]
// const PrecioOriginal = 120;
// const descuento = 18;
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputCoupon");
    const discountValue = inputDiscount.value;
    
    let descuento;

    switch(discountValue) {
      case coupons[0]: // "Miguel_el_profe"
        descuento = 15;
      break;
      case coupons[1]: // "no_sufras_tanto"
        descuento = 30;
      break;
      case coupons[2]: // "secreto_en_la_montaña"
        descuento = 25;
      break;
    }
   
   //Imprimiendo valor del precio
   const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
    const Price = document.getElementById("ResultPrice");
    Price.innerText = "El precio con descuento es de: " + precioConDescuento;
}
// console.log({
//     PrecioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuento
// });
