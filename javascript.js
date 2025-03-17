let op1 = null;
let op2 = null;
let op = null;

function operate(num1, num2, operation){
    if (operation === '+') return add(num1, num2);
    if (operation === '-') return sub(num1, num2);
    if (operation === '/') return div(num1, num2);
    if (operation === '*') return mul(num1, num2);
    if (operation === '%') return rem(num1, num2);
    if (operation === '^') return pow(num1, num2);
    return null; 
}  

function add(a, b){ return a + b; }
function sub(a, b){ return a - b; }
function mul(a, b){ return a * b; }
function div(a, b){ return b !== 0 ? a / b : "Error"; } 
function rem(a, b){ return a % b; }
function pow(a, b){ return Math.pow(a, b); }

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".inp");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = this.textContent;
        
        if (value === "Clear") {
            op1 = null;
            op2 = null;
            op = null;
            display.value = "";
        }
        
        else if (["+", "-", "^", "/", "%", "*", "x"].includes(value)) {
            if (op !== null || display.value === "") return; 
            
            if (value === "x") value = "*"; 
            
            op1 = parseFloat(display.value);
            op = value;
            display.value = ""; 
        } 
        else if (value === "=") {
            if (op1 !== null && op !== null && display.value !== "") {
                op2 = parseFloat(display.value);
                display.value = operate(op1, op2, op);
                op1 = parseFloat(display.value); 
                op2 = null;
                op = null; 
            }
        } 
        else {
            if(value==='.'){
                if (display.value.includes('.')) return;
            }
            
            display.value += value;
            
        }
        
        console.log("op1:", op1);
        console.log("op2:", op2);
        console.log("op:", op);
    });
});
