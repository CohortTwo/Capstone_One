//doing a constructor for the calculator
class Calculator {


    constructor(previousInputTextElement, currentInputTextElement) {
        this.previousInputTextElement = previousInputTextElement
        this.currentInputTextElement = currentInputTextElement
        this.clear()
    }

    clear() {
        this.currentInput = ''
        this.previousInput = ''
        this.operation = undefined
        memory = 0;

    }

    delete() {
        //slice the end off. beginning is at 0, then remove the end string number using negative sign and 1 to indicate move 1 from back
        this.currentInput = this.currentInput.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentInput.includes('.')) return
        this.currentInput = this.currentInput.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentInput === '') return
        if (this.previousInput !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousInput = this.currentInput
        this.currentInput = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousInput)
        const current = parseFloat(this.currentInput)
            //isNaN function to check not a number
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                console.log(operationButtons.innerText)
                computation = prev + current
                break
            case '-':
                console.log(operationButtons.innerText)
                computation = prev - current
                break
            case '*':
                console.log(operationButtons.innerText)
                computation = prev * current
                break
            case '÷':
                console.log(operationButtons.innerText)
                computation = prev / current
                break
            default:
                return
        }
        this.currentInput = computation
        this.operation = undefined
        this.previousInput = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
            //Check the number validity using isNaN function
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentInputTextElement.innerText =
            this.getDisplayNumber(this.currentInput)
        if (this.operation != null) {
            this.previousInputTextElement.innerText =
                `${this.getDisplayNumber(this.previousInput)} ${this.operation}`
        } else {
            this.previousInputTextElement.innerText = ''
        }
    }

    storeMemory() {
        if (this.currentInput === "") {
            if (this.currentInput !== 0) {
                memory = this.currentInput;
            }
        } else
        if (Number(this.currentInput) != 0) {
            memory = Number(this.currentInput);
            this.currentInput = memory;
            this.currentInput = "";
            console.log("memory value is " + memory)
        };

    }

    clearMemory() {
        console.log('cleared the memory');
        memory = 0;
        this.currentInput = '';
        memoryListClear();
    }

    plusMemory() {

        if (this.currentInput === "") {
            if (Number(this.currentInput) !== 0) {
                if (memory === null) memory = 0;
                memory += Number(this.currentInput);
                console.log("new minus memory value " + memory)
            }

        } else
        if (Number(this.currentInput) !== 0) {
            if (memory === null) memory = 0;
            memory += Number(this.currentInput);
            console.log("memory is at 0 + minus memory value " + memory)
        };
    }


    minusMemory() {
        const prev = parseFloat(this.previousInput)
        const current = parseFloat(this.currentInput)

        if (this.currentInput === "") {
            if (Number(this.currentInput) !== 0) {
                if (memory === null) memory = 0;
                memory -= this.currentInput;
                console.log("new minus memory value " + memory)
            }

        } else
        if (Number(this.currentInput) !== 0) {
            if (memory === null) memory = 0;
            memory -= Number(this.currentInput);
            console.log("memory is at 0 + minus memory value " + memory)
        };
    }

    recallMemory() {
        console.log("triggered")
        if (memory !== null) {
            this.currentInput = memory;
            console.log(this.currentInput)
        }
    }

    negpos() {
        this.currentInput = this.currentInput * -1;
    }
}

//calling all the variables and constants
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousInputTextElement = document.querySelector('[data-previous-input]')
const currentInputTextElement = document.querySelector('[data-current-input]')
const memoryplusButton = document.querySelector('[data-memory-plus]')
const memoryminusButton = document.querySelector('[data-memory-minus]')
const memoryclearButton = document.querySelector('[data-memory-clear]')
const memoryrecallButton = document.querySelector('[data-memory-recall]')
const memorystoreButton = document.querySelector('[data-memory-store]')
const negposButton = document.querySelector('[data-negpos]')

const calculator = new Calculator(previousInputTextElement, currentInputTextElement)

//memory logging and clearing parts here!
var memory = 0;

function logMemoryItems() {
    console.log("triggered for storage")
    var newRow = document.createElement('tr')
    newRow.innerText = memory;
    console.log("appending things to the table " + newRow.innerText)
    document.getElementById('memoryStuff').appendChild(newRow)
}

function memoryListClear() {
    console.log("cleared the storage list")
    document.getElementById('memoryStuff').innerText = ""
}

//for each button in the numberButtons query, add and event listener called click
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log(button.innerText)
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

//do the same for operation buttons
operationButtons.forEach(button => {
    button.addEventListener('click', function() {

        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

//event listener for equals button
equalsButton.addEventListener('click', function() {
    console.log(equalsButton.innerText)
    calculator.compute()
    calculator.updateDisplay()
})

//event listener for the CE button or Clear Entrey Button
allClearButton.addEventListener('click', function() {
    console.log(allClearButton.innerText)
    calculator.clear()
    calculator.updateDisplay()
    memoryListClear();
})

//adding an event listener for the delete button
deleteButton.addEventListener('click', function() {
    console.log(deleteButton.innerText)
    calculator.delete()
    calculator.updateDisplay()
})

//memory clear
memoryclearButton.addEventListener('click', function() {
    console.log(memoryclearButton.innerText)
    calculator.clearMemory()
    memoryListClear()
    calculator.updateDisplay()
})

//memory minus
memoryminusButton.addEventListener('click', function() {
    console.log(memoryminusButton.innerText)
    calculator.minusMemory()
    logMemoryItems()
    calculator.updateDisplay
})

//memory plus
memoryplusButton.addEventListener('click', function() {
    console.log(memoryplusButton.innerText)
    calculator.plusMemory()
    logMemoryItems()
    calculator.updateDisplay
})

//memory store
memorystoreButton.addEventListener('click', function() {
    console.log(memorystoreButton.innerText)
    calculator.storeMemory()
    logMemoryItems()
    calculator.updateDisplay
})

//memory recall
memoryrecallButton.addEventListener('click', function() {
    console.log(memoryrecallButton.innerText)
    calculator.recallMemory()
    calculator.updateDisplay()
})

//neg to pos and pos to neg button
negposButton.addEventListener('click', function() {
    console.log(negposButton.innerText)
    calculator.negpos()
    calculator.updateDisplay()
})

//need a function to filter out which keys can have inputs on keypress
function valid(key) {
    var validKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "=", "+", "-", "*", "/", "Enter", "=", "Delete"];
    if (validKeys.indexOf(key) > -1) return true;
    return false;
}

//filter keys to respective inputs
document.addEventListener('keydown', function(event) {
    console.log("the key value is " + event.key);
    event.preventDefault();
    if (valid(event.key)) {

        if (event.key >= "0" && event.key <= "9") calculator.appendNumber(event.key);
        if (event.key === ".") calculator.appendNumber(event.key);
        if (event.key === "+") calculator.chooseOperation(event.key);
        if (event.key === "-") calculator.chooseOperation(event.key);
        if (event.key === "Enter" || event.key === "=") calculator.compute()
        if (event.key === "*") calculator.chooseOperation(event.key);
        if (event.key === "/") calculator.chooseOperation(event.key);
        if (event.key === "Delete") calculator.delete(event.key);
    }
    calculator.updateDisplay()
})