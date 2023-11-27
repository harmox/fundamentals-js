function wordTour(arr) {
    let stops = arr.shift()
    let comand = arr.shift()

    while (comand != `Travel`) {
        comand = comand.split(':')
        let action = comand.shift()

        if (action == `Add Stop`) {
            let idx = Number(comand[0])
            let str = comand[1]
            if (stops[idx] == undefined) {

            } else {
                stops = stops.substr(0, idx) + str + stops.substr(idx)
            }
            console.log(stops)
        } else if (action == `Remove Stop`) {
            let strart = Number(comand[0])
            let end = Number(comand[1])
            if (stops[strart] == undefined || stops[end] == undefined) {

            } else {
                stops = stops.substr(0, strart) + stops.substr(end + 1)
            }
            console.log(stops)
        } else if (action == `Switch`) {
            let oldStr = comand[0]
            let newStr = comand[1]
            stops = stops.split(oldStr).join(newStr)
            console.log(stops)
        }
        comand = arr.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)

} wordTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
