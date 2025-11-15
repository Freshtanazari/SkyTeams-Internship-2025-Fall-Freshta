# print even number in a range

def evenNumbersFrom(start, end):
    """
    returns the even numbers from start to end

    Args:
        start (int): a starting integer included
        end (int): an ending integer included

    Returns:
        str : a list of even numbers 
    
    Raises: 
        ValueError: if start or end is not integer
    """
    try:
        start, end = int(start), int(end)
    except ValueError:
        raise ValueError("Please enter valid integers for start and end point")
    
    for i in range(start, end + 1):
        if i % 2 == 0: 
            print(i, end=", ")
 