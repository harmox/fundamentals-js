function legendaryMining(str) {
    let keyMaterials = { shards: 0, fragments: 0, motes: 0 }
    let jungMaterial = {}
    let legendaries = { shards: `Shadowmourne`, fragments: `Valanyr`, motes: `Dragonwrath` }
    let materialasArr = str.split(' ')

    for (let i = 0; i < materialasArr.length; i += 2) {
        let qty = Number(materialasArr[i])
        let material = materialasArr[i + 1].toLowerCase()

        if (material in keyMaterials) {
            keyMaterials[material] += qty

            if (keyMaterials[material] >= 250) {
                let legendaryWon = legendaries[material]
                console.log(`${legendaryWon} obtained!`)
                keyMaterials[material] -= 250
                break;
            }
        } else {
            if (material in jungMaterial) {
                jungMaterial[material] += qty
            } else {
                jungMaterial[material] = qty
            }
        }

    }

    let keyMaterialsEntries = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    //pyrvo stoinost posle po ime 
    for (let [material, qty] of keyMaterialsEntries) {
        console.log(`${material}: ${qty}`)
    }
    let jungMaterialEntries = Object.entries(jungMaterial).sort((a, b) => a[0].localeCompare(b[0]))
    for (let [material, qty] of jungMaterialEntries) {
        console.log(`${material}: ${qty}`)
    }
} legendaryMining(`3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards`)