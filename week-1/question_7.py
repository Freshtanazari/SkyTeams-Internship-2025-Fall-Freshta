# even or odd 

def EvenOrOdd(number):
    """
    identifies if a number is even or odd

    Args:
        number (int): the input number
    
    Returns:
        str: even or odd
    
    Raises:
        ValueError: if number cannot be converted to integer
    """

    try:
        number = int(number)
    except ValueError:
        ValueError("Kindly input only integers")
    
    if(number % 2 == 0):
        return "even"
    else: 
        return "odd"

print(EvenOrOdd(35346))