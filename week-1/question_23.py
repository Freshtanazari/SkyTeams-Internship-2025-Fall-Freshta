# fibonacci series up to N terms
series = []

def fibonacci(num):
    """
    returns the Fibonacci sequence up to num terms

    Args:
        num (int): starting point
    
    Returns:
        str: a sequence of the fibonacci series up to the num terms

    Raises:
        ValueError: if num is not integer, or not postive
    """
    try:
        num = int(num)
    except ValueError:
        raise ValueError("Please Enter a Valid integer")
    if num < 0:
        raise ValueError("Please Enter a postive Integer")

    i = 0
    while i < num:
        if i == 0 or i == 1: 
            series.append(i) 
            i += 1 
        else:
            value = series[-1] + series[-2]
            series.append(value)
            i += 1 
    return series
    
    