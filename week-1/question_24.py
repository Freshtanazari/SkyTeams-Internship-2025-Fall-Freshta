# find GCD of two numbers

def GCD(num1, num2):
    """
    returns the greatest common divisoner of two numbers using Eulidean algorithm 

    Args:
        num1 (int): the first integer
        num2 (int): the second integer
    
    Returns:
        int : the greated common divisioner between the two parameters
    
    Raises:
        ValueError: if not integer
    """

    try: 
        num1, num2 = abs(int(num1)), abs(int(num2))
    except ValueError:
        raise ValueError("Please Enter a valid integer")
    
    if num1 == num2:
        # the GCD is the number itself
        return num1
    elif num1 > num2:
        greater, smaller = num1, num2
    else: 
        greater, smaller = num2, num1

    # if the one is the multiple of other, if divided the 
    # remainder will be zero. thus, the smaller value becomes GCD
    remainder = smaller
    while True:
        if greater % smaller == 0:
            return remainder
        remainder = greater % smaller
        greater = smaller 
        smaller = remainder
   
    

    

