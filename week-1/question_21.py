# sum of digits

def sumOfDigits(num):
    """
    Calculates the sum of digits of the given number

    Args:
        num (int): the argument should be an integer
    
    Returns:
        int : sum of the digits 
    
    Raises:
        ValueError: if the input is not convertable to integer
    """

    try:
        num = int(num)
    except ValueError:
        ValueError("Please Enter a valid integer")
    
    num = str(num)
    sum = 0
    for i in range(len(str(num))):
        sum += int(num[i])
    return sum

