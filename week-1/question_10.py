# leap year checker 

def isLeapYear(year):
    """
    checks if a given year is a leap year or not

    Args:
        year (int):  given year as input

    Returns:
        str: Leap year or Not leap year accordinlgy 
    
    Raises:
        ValueError: if year cannot be converted to integer or it is negative
    """

    try:
        year = int(year)
    except ValueError:
        raise ValueError("Enter an Integer please")
    
    if(year < 0):
        raise ValueError("Time cannot be negative")

    if(year % 100 == 0):
        if(year % 400 == 0):
            return "Leap year"
        else:
            return "Not leap year"
    elif(year % 4 == 0):
        return "Leap year"
    else:
        return "Not leap year"

print(isLeapYear(1900))
print(isLeapYear(2000))
        