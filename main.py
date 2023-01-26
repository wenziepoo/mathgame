def check():
    global bob
    if input.button_is_pressed(Button.B) and not (input.button_is_pressed(Button.A)):
        bob += 1
    if bob > 3:
        bob = 0

def on_button_pressed_a():
    global op
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
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def mathgame():
    global num1, num2, ans, operations, operation, string
    num1 = randint(1, a)
    num2 = randint(1, a)
    ans = randint(1, 50)
    operations = ["x", "/", "+", "-"]
    operation = operations[bob]
    if operation == "/":
        if num1 % num2 != 0:
            mathgame()
    string = "  " + ("" + str(num1)) + operation + (" " + ("" + str(num2)))
    basic.show_string("" + (string))
string = ""
operations: List[str] = []
ans = 0
num2 = 0
num1 = 0
op = 0
operation = ""
bob = 0
a = 0
a = 10
mathgame()

def on_forever():
    check()
basic.forever(on_forever)
a = 50
