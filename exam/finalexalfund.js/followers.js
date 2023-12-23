function followers(arr) {
    let fans = {}
    let comand = arr.shift()

    while (comand != `Log out`) {
        comand = comand.split(`: `)
        let action = comand.shift()
        if (action == `New follower`) {
            if (!(fans.hasOwnProperty(comand[0]))) {
                fans[comand[0]] = 0
            }
        } else if (action == `Like`) {
            let name = comand[0]
            let likes = Number(comand[1])
            if (fans.hasOwnProperty(name)) {
                fans[name] += likes
            } else {
                fans[name] = likes
            }

        } else if (action == `Comment`) {
            let name = comand[0]
            if (fans.hasOwnProperty(name)) {
                fans[name] += 1
            } else {
                fans[name] = 1
            }
        } else if (action == `Blocked`) {
            let name = comand[0]
            if (fans.hasOwnProperty(name)) {
                delete fans[name]
            } else {
                console.log(`${name} doesn't exist.`)
            }
        }
        comand = arr.shift()
    }
    let num = Object.keys(fans).length
    console.log(`${num} followers`)
    for (let name in fans) {
        console.log(`${name}: ${fans[name]}`)
    }
} followers(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])
