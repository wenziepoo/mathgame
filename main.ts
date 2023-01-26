function check () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        a = 50
    }
}
function output () {
    let op: number;
if (input.buttonIsPressed(Button.A)) {
        if (operation == "x") {
            op = num1 * num2
            basic.showString("" + op)
        } else if (operation == "/") {
            op = num1 / num2
            basic.showString("" + op)
        } else if (operation == "+") {
            op = num1 + num2
            basic.showString("" + op)
        } else if (operation == "-") {
            op = num1 - num2
            basic.showString("" + op)
        }
        basic.pause(1000)
        mathgame()
    }
}
function mathgame () {
    a = 10
    num1 = randint(1, a)
    ans = randint(1, 50)
    operations = [
    "x",
    "/",
    "+",
    "-"
    ]
    operation = operations[randint(0, 3)]
    if (operation == "x") {
        num2 = ans / num1
        if (num2 % 1 != 0) {
            mathgame()
        }
    } else if (operation == "/") {
        num2 = num1 / ans
        if (num2 % 1 != 0) {
            mathgame()
        }
    } else if (operation == "+") {
        num2 = ans - num1
    } else if (operation == "-") {
        num2 = 0 - ans + num1
    }
    string = "  " + ("" + num1) + operation + (" " + ("" + num2))
    basic.showString("" + (string))
}
let string = ""
let operations: string[] = []
let ans = 0
let num2 = 0
let num1 = 0
let operation = ""
let a = 0
mathgame()
basic.forever(function () {
    check()
    output()
})
