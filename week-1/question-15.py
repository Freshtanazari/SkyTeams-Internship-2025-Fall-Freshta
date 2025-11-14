# triangle validity and type

def triangleType(side1, side2, side3):
    """
    checks if the given sides are valid for a triangle and determines the type of triangle

    Args:
        side1 (int): first side of the triangle
        side2 (int): second side of the traingle
        side3 (int): third side of the triangle

    Returns:
        str: valid/invalid triangle, if valid, type of triangle.

    Raises:
        ValueError: if sides are not numerical
    """
    try:
        side1, side2, side3 = float(side1), float(side2), float(side3)
    except ValueError:
        raise ValueError("The given sides are not numerical values")

    if side1 + side2 > side3 and side1 + side3 > side2 and side3 + side2> side1:
        allsides = [side1, side2, side3]
        setOfAllSides = set(allsides)
        if len(setOfAllSides) ==1:
            return "Valid triangle, Equaliteral"
        elif len(setOfAllSides) ==2:
            return "Valid triangle, Isosceles"
        elif len(setOfAllSides) ==3:
            return "Valid Triangle, Scalene"
    return "Not a Triangle"
        
    

print(triangleType(6, 6, 6))
print(triangleType(7, 10, 10))
print(triangleType(3, 4, 5))
print(triangleType("33b", 4, 5))
