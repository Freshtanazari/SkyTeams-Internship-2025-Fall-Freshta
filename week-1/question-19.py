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
    """
    if not isinstance(num, (int)):
        raise TypeError("Please Enter a valid Integer")