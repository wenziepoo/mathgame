def check():
    global a
    if input.button_is_pressed(Button.A) and input.button_is_pressed(Button.B):
        a = 50
def output():
    if input.button_is_pressed(Button.A):
        if operation == "x":
            op = num1 * num2
            basic.show_string("" + str(op))
        elif operation == "/":
            op = num1 / num2
            basic.show_string("" + str(op))
        elif operation == "+":
            op = num1 + num2
            basic.show_string("" + str(op))
        elif operation == "-":
            op = num1 - num2
            basic.show_string("" + str(op))
        basic.pause(1000)
        mathgame()
def mathgame():
    global a, num1, ans, operations, operation, num2, string
    a = 10
    num1 = randint(1, a)
    ans = randint(1, 50)
    operations = ["x", "/", "+", "-"]
    operation = operations[randint(0, 3)]
    if operation == "x":
        num2 = ans / num1
        if num2 % 1 != 0:
            mathgame()
    elif operation == "/":
        num2 = num1 / ans
        if num2 % 1 != 0:
            mathgame()
    elif operation == "+":
        num2 = ans - num1
    elif operation == "-":
        num2 = 0 - ans + num1
    string = "  " + ("" + str(num1)) + operation + (" " + ("" + str(num2)))
    basic.show_string("" + (string))
string = ""
operations: List[str] = []
ans = 0
num2 = 0
num1 = 0
operation = ""
a = 0
mathgame()

def on_forever():
    check()
    output()
basic.forever(on_forever)
