function mathgame() {
    let op: number;
    
    a = 10
    num1 = randint(0, a)
    ans = randint(0, 30)
    operations = ["x", "/", "+", "-"]
    operation = operations[randint(0, 3)]
    if (operation == "x") {
        num2 = ans / num1
    } else if (operation == "/") {
        num2 = num1 / ans
    } else if (operation == "+") {
        num2 = ans - num1
    } else if (operation == "-") {
        num2 = -ans + num1
    }
    
    string = "" + ("" + num1) + operation + ("" + ("" + num2))
    basic.showString(string)
    if (input.buttonIsPressed(Button.A)) {
        if (operation == "x") {
            op = num1 * num2
            basic.showString("" + ("" + op))
        } else if (operation == "/") {
            op = num1 / num2
            basic.showString("" + ("" + op))
        } else if (operation == "+") {
            op = num1 + num2
            basic.showString("" + ("" + op))
        } else if (operation == "-") {
            op = num1 - num2
            basic.showString("" + ("" + op))
        }
        
        mathgame()
    }
    
}

let string = ""
let num2 = 0
let operation = ""
let operations : string[] = []
let ans = 0
let num1 = 0
let a = 0
basic.showString(";)")
mathgame()
