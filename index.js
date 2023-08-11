function clear(){
    currentOperand = "";
    previousOperand = "";
    operation = undefined;
}

function del(){
    currentOperand = currentOperand.toString().slice(0, -1);
}

function appendNumber(number){
    if(number === "." && currentOperand.includes(".")) return
    currentOperand += number.toString();
}

function chooseOperation(oper){
    operation = oper;
    if(currentOperand === "") return
    if(previousOperand !== ""){
        compute();
    }
    
    previousOperand = currentOperand;
    currentOperand = "";
}


function updateDisplay(){
    currentOperandTextElement.textContent = currentOperand;
    if(operation != null){
        previousOperandTextElement.textContent = `${previousOperand} ${operation}`;
    }else{
        previousOperandTextElement.textContent = "";
    }
    
}

function compute(){
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(current)) return
    switch(operation){
        case "+":
            computation = prev + current;
            break;
        case "-":
            computation = prev - current;
            break;
        case "*":
            computation = prev * current;
            break;
        case "/":
            computation = prev / current;
            break;
        default:
            return
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = "";
}



let currentOperand = "";
let previousOperand = "";
let operation = null;

const numButtons = document.querySelectorAll("[data-number]");
const operButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equal]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandTextElement = document.querySelector("[data-previous]");
const currentOperandTextElement = document.querySelector("[data-current]");


numButtons.forEach(function(button){
    button.addEventListener("click", function(){
        appendNumber(button.textContent)
        updateDisplay()
    })
})

operButtons.forEach(function(button){
    button.addEventListener("click", function(){
        chooseOperation(button.textContent);
        updateDisplay();
    })
});


clearButton.addEventListener("click", function(){
    clear();
    updateDisplay();
});


equalButton.addEventListener("click", function(){
    compute();
    updateDisplay();
    
});

deleteButton.addEventListener("click", function(){
    del();
    updateDisplay();
})





function hitung(num1, num2, math){
    if(math === "+"){
        return num1 + num2;
    }else if(math === "-"){
        return num1 - num2;
    }else if(math === "*"){
        return num1 * num2;
    }else if(math === "/"){
        return num1 / num2;
    }
}




