# convert total seconds into hours, minutes, and seconds
import math 

def secondsToTime(totalSeconds):
    """
    converts total seconds into hours, minutes and seconds

    Args:
        totalSeconds (int): an integer value of total seconds
    
    returns:
        tuple: hours, minutes, seconds.
    
    Raises:
        ValueError: if totalSeconds cannot be converted into integer
        ValueError: if totalSeconds is negative
    """

    try:
        totalSeconds = int(totalSeconds)
    except ValueError:
        ValueError("Please Enter a valid input")

    if(totalSeconds < 0):
        raise ValueError("Please Enter a Positive value") 
    
    totalMinutes = math.floor(totalSeconds / 60)
    totalHours = math.floor(totalMinutes / 60)
    secondsLeft = totalSeconds % 60
    minutesLeft = totalMinutes % 60
    return totalHours, minutesLeft, secondsLeft
    
