let count = 0 
let console_one = document.getElementById("console1")
let console_two = document.getElementById("console2")
let console_three = document.getElementById("console3")
let console_four = document.getElementById("console4")
let multiply = document.getElementById("times-btn")

function one() {
    count = 1
    console_one.innerText = count
} 

function two() {
    count = 2
    console_two.innerText = count
}  

function plus() {
    console_one + console_two
}

function minus() {
    console_one - console_two
}

function divide() {
    console_one / console_two
}

function times() {
    console_one * console_two
}

function soln() {
    if (console_two.innerText = multiply.innerText) {
        
    }
}