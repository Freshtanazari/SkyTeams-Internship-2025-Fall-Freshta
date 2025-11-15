# count digits in a number:

def countDigits(num):
    """
    returns the number of digits

    Args:
        num (int): the given integer
    
    Returns:
        int: count of the digits 

    Raises:
        ValueError: if not integer
    """
    try:
        num = int(num)
    except ValueError:
        raise ValueError("Please Enter a valid integer only")
    
    num = str(num)
    return len(num)

print(countDigits("235"))
