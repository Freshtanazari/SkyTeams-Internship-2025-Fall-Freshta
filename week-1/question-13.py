# month name and number of days 

days = [31, "28 or 29", 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
months = ["January", "February", "March", "April", "May", "June", "July", 
          "August", "September", "October", "November", "December"]

def daysOfMonth(monthNumber):
    try:
        monthNumber = int(monthNumber)-1
    except ValueError:
        raise ValueError("Enter a valid integer")
    if monthNumber >= 11 | monthNumber < 0:
        raise ValueError("Enter a Number between 1-12")
    return f"{months[monthNumber]}, {days[monthNumber]} days"

print(daysOfMonth(12))
