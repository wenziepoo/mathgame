function check () {
    if (input.isGesture(Gesture.Shake)) {
        bob += 1
    }
    if (bob > 3) {
        bob = 0
    }
}
input.onButtonPressed(Button.A, function () {
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
})
input.onButtonPressed(Button.AB, function () {
    a = 50
})
function mathgame () {
    num1 = randint(1, a)
    num2 = randint(1, a)
    ans = randint(1, 50)
    operations = [
    "x",
    "/",
    "+",
    "-"
    ]
    operation = operations[bob]
    if (operation == "/") {
        if (num1 % num2 != 0) {
            mathgame()
        }
    }
    string = "  " + ("" + num1) + operation + (" " + ("" + num2))
    basic.showString("" + (string))
}
let string = ""
let operations: string[] = []
let ans = 0
let num2 = 0
let num1 = 0
let op = 0
let operation = ""
let bob = 0
let a = 0
a = 10
mathgame()
basic.forever(function () {
    check()
})
