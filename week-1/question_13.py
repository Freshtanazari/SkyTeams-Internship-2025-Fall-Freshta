# month name and number of days 

days = [31, "28 or 29", 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
months = ["January", "February", "March", "April", "May", "June", "July", 
          "August", "September", "October", "November", "December"]

def daysOfMonth(monthNumber):
    """
    returns the month and number of days for that month

    Args:
        monthNumber (int): a number between 1 to 12
    
    Returns:
        str: "month, (number of days) days"
    
    Raises:
        ValueError: if monthNumber is not integer or is not between 1 to 12
    """

    try:
        monthNumber = int(monthNumber)-1
    except ValueError:
        raise ValueError("Enter a valid integer")
    if monthNumber >= 11 | monthNumber < 0:
        raise ValueError("Enter a Number between 1-12")
    return f"{months[monthNumber]}, {days[monthNumber]} days"

print(daysOfMonth(12))
