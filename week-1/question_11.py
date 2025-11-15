# simple calculator

def calculate(num1, num2, operand):
    """
    Does Simple calculations including +, -, *, /

    Args:
        num1 (int or float): first parameter
        num2 (int or float): second paramter
        operand(str): accepted characters [+, -, *, /]
    
    Returns:
        float: the result of the calculation or informs of wrong operand

    Raises:
        ValueError: if two first parameters are not numeric
    """

    try:
        num1, num2 = float(num1), float(num2)
        operand = str(operand.strip())
    except ValueError:
        raise ValueError("Please Enter a numeric value")

    match operand:
        case "+":
            return num1 + num2 
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
        case _: 
            return "Invalid operand. accepted operands [+, -, *, /]"
    