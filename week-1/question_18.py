# Multiplication tableof a number
def multiplicationOf(num):
    """
    returns the multiplication of number num

    Args:
        num (int): the selected number 
    
    Returns:
        str: prints the multiplication by each line till n * 10
    
    Raises:
        ValueError: if n is not integer
    
    Note:
    This function works with float values too
    """

    if not isinstance(num, (int, float)):
        raise ValueError("Please Enter only an integer")

    for i in range(11):
        print(f"{num} x { i } = {num*i}")
