# traffic light system

def trafficLight(color):
    """
    returns a command based on traffic light color 

    Args:
        color (str): a given color from green, red, or yellow

    return 
        str: Ready, Go, Stop accordingly

    """

    color = str(color).lower()
    match color:
        case "red":
            return "Stop"
        case "yellow":
            return "Ready"
        case "green":
            return "Go"
        case _:
            return "Please Enter a traffic light color."

print(trafficLight("Red"))