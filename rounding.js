function rounding(num, poin) {
    if (poin > 15) {
        poin = 15
    }
    console.log(parseFloat(num.toFixed(poin)))
}