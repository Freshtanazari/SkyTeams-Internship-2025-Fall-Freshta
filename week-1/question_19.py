# reverse a number:

def reverseDigit(num):
    """
    Returns the reversed of the given number

    Args:
        num (int): given number to be reversed
    
    Returns:
        int : reveresed integer
    
    Raises:
        ValueError: if num is not type of Integer

    Note:
    This function converts a float to integer for processing and would return an integer type
    """
    try:
        num = int(num)
    except ValueError:
        raise ValueError("Please Enter a valid Integer")
    
    digits = str(num)
    reversed = ""
    i = len(digits) - 1 
    while i >= 0:
        reversed += digits[i]
        i -= 1
    return int(reversed)

print(reverseDigit(10000))
    