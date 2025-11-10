# calculate the area and perimeter of a rectangle 

def areaOfRectangle(length, width):
    """
    Calculate the area and perimeter of a rectangle 

    Args:
        length (int or float): Length of the rectangle 
        width (int or float): Width of the rectange

    Returns:
        tuple: The area and the perimeter of the rectangle
    """
    area = length * width
    perimeter = 2 * length + 2 * width
    return area, perimeter