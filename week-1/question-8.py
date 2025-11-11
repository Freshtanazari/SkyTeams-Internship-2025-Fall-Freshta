# recognize a number is postive, negative, or zero

def signOfNumber(number):
    """
    identifies the sign of a number. 

    Args:
        number (int): the given input number

    Returns:
        str: Positive, Negative or Zero accordingly

    Raises:
        ValueError: if number cannot be coverted to integer.
    """

    try:
        number = int(number)
    except ValueError:
        ValueError("Please Enter only integers")
    
    if(number == 0):
        return "Zero"
    if(number > 0):
        return "Positive"
    else:
        return "Negative"

