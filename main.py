def mathgame():
    global a, num1, ans, operations, operation, num2, string
    a = 10
    num1 = randint(0, a)
    ans = randint(0, 30)
    operations = ["x", "/", "+", "-"]
    operation = operations[randint(0, 3)]
    if operation == "x":
        num2 = ans / num1
    elif operation == "/":
        num2 = num1/ans
    elif operation == "+":
        num2 = ans - num1
    elif operation == "-":
        num2 = -ans + num1
    string = "" + str(num1) + operation + ("" + str(num2))
    basic.show_string(string)
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
        mathgame()
string = ""
num2 = 0
operation = ""
operations: List[str] = []
ans = 0
num1 = 0
a = 0
basic.show_string(";)")
mathgame()