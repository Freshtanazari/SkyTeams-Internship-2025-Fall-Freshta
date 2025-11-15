# find LCM of two numbers 
from question_24 import GCD

def LCM(num1, num2):
    """
    returns the Least common multiple of two numbers 

    Dependencies:
        -requires question_25.py file to use GCD function

    Args:
        num1 (int): first paramter
        num2 (int): second paramter

    Returns:
        int: least common multiple of the two numbers 
    
    Raises:
        ValueError: if num1 or num2 is not integer
    """
    try:
        num1, num2 = abs(int(num1)), abs(int(num2))
    except ValueError:
        ValueError("Please Enter a valid Integer")

    lcm = num1 * num2 / GCD(num1, num2)
    return int(lcm)


    
