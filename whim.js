let btn_display = document.getElementById("btn-display")
let list = []

function one() {
    list.push(1)
    btn_display.textContent = list.join('')
}

function two() {
    list.push(2)
    btn_display.textContent = list.join('')
}

function three() {
    list.push(3)
    btn_display.textContent = list.join('')
}

function four() {
    list.push(4)
    btn_display.textContent = list.join('')
}

function five() {
    list.push(5)
    btn_display.textContent = list.join('')
}

function six() {
    list.push(6)
    btn_display.textContent = list.join('')
}

function seven() {
    list.push(7)
    btn_display.textContent = list.join('')
}

function eight() {
    list.push(8)
    btn_display.textContent = list.join('')
}

function nine() {
    list.push(9)
    btn_display.textContent = list.join('')
}

function zero() {
    list.push(0)
    btn_display.textContent = list.join('')
}

// I used .join() to get rid of the comma problem

function plus() {
    list.push('+')
    btn_display.textContent = list.join('')
}

function minus() {
    list.push('-')
    btn_display.textContent = list.join('')
}

function times() {
    list.push('x')
    btn_display.textContent = list.join('')
}

function divide() {
    list.push('/')
    btn_display.textContent = list.join('')
}

function CLR() {
    list = []
    btn_display.textContent = list
} 

function equal() {   
    for (sign of list) {
        if (sign !== '+'/* || sign !== '-' || sign !== 'x' || sign !== '/'*/) continue
        switch(sign) {

            case '+':
                sum = list[0] + list[2]
                btn_display.textContent = sum
                break
    
            case '-':
                difference = list[0] - list[2]
                btn_display.textContent = difference
                break
    
            case 'x':
                product = list[0] * list[2]
                btn_display.textContent = product
                break
    
            case '/':
                quotient = list[0] / list[2]
                btn_display.textContent = quotient
                break
            
            default:
                btn_display.textContent = "Syntax Error"
        }
    }
}




/*loop through array using for loop, then use exact equivalence 
sign(==) to compare math sign values, then use indexOf() method to 
target the value before and after the sign[i.e indexOf()-1 or 
indexOf()+1] and perform the pertinent operation on them
*/