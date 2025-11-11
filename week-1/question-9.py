# grade calculator

def gradeCalculator(mark):
    """
    converts marks 0-100 to grades in the scale of A-F

    Args:
        mark (int, float): input mark on the scale of 0-100

    Returns:
        str: grades from A, B, C, D, F accordingly
    
    Raises:
        ValueError: if mark cannot be converted to float or it isnt between 0-100
    """

    try:
        mark = float(mark)
    except ValueError:
        raise ValueError("Please Enter only Integers or float.")
    if mark < 0 or mark > 100:
        raise ValueError("Please Enter a valid Value between 0-100")

    if mark >= 90:
        return "A"
    elif mark >= 80:
        return "B"
    elif mark >= 70:
        return "C"
    elif mark >= 60:
        return "D"
    else:
        return "F"



