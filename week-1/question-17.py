# sum of first N natural numbers

def sumOfAllSquence(number):
    """
    calculates the sum of first N natural numbers

    Args:
        number (int): the ending number
    
    Returns:
        int : sum of all first N(number) natural numbers
    
    Raises:
        TypeError: if number's type is not integer
        ValueError: if number is not natural number
    """
    if not isinstance(number, (int)):
        raise TypeError("Enter a valid integer")
    if (number < 0):
        raise ValueError("Negative numbers are not natural numbers")
    total = 0
    for num in range(number +1):
        total = total + num
    return total
    
print(sumOfAllSquence(-1))