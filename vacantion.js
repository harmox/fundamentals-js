function vacantion(num,type,day) {
   let price=0

    if (type == `Students`) {
        if (day == `Friday`) {
            price = num * 8.45

        } else if (day == `Saturday`) {
            price = num * 9.80

        } else if (day == `Sunday`) {
            price = num * 10.46

        }
        if (num >= 30) { price = price * 0.85 }
        console.log(`Total price: ${price.toFixed(2)}`)

    } else if (type == `Business`) {
        if(num>=100){
            num-=10
        }
        if (day == `Friday`) {
            price = num * 10.90
            
        } else if (day == `Saturday`) {
            price = num * 15.60
            
        } else if (day == `Sunday`) {
            price = num * 16
            
        }
        
            
        
        
        console.log(`Total price: ${price.toFixed(2)}`)
    } else if (type == `Regular`) {
        if (day == `Friday`) {
            price = num * 15

        } else if (day == `Saturday`) {
            price = num * 20

        } else if (day == `Sunday`) {
            price = num * 22.50

        }
        if (num >= 10 && num <= 20) { price *= 0.90 }
        console.log(`Total price: ${price.toFixed(2)}`)
    }


}