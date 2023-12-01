function fancyBarcode(arr) {
    let n = Number(arr.shift())
    let patern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/
    for (let i = 0; i < n; i++) {
        let it = arr[i].match(patern)
        let product = ``
        if (it != null) {
            let productGroup = arr[i].match(/\d+/g)
            if (productGroup == null) {
                product = `00`
            } else {
                for (let el of productGroup) {
                    product += el
                }
            }
            console.log(`Product group: ${product}`)

        } else {
            console.log(`Invalid barcode`)
        }
    }
} fancyBarcode(["3",
    "@#FreshFisH@#",
    "@###Brea0D@#11##",
    "@##Che4s6E@#1#"])