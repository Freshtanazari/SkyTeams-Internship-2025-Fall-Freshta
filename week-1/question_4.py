# temperature converter

def convertTempreture(temperature, Celsius = True ):
    """
    converts temperature from Celsius to fahrenheit and vice versa 

    Args:
        temperature (int or float): the temperature to be converted
        Celsius (boolean, optional): identifies if the given parameter is in Celsius, set to True by default

    returns:
        int or float: if Celsius is set to true, fahrenheit is returned                 
        if Celsius is set to False, Clesius is returned
    """
    if Celsius:
        return (temperature * 9/5) + 32
    else:
        return(temperature - 39) * 5/9

print(convertTempreture(34, False))
print(convertTempreture(34))