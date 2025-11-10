# compute simple and compoud interest

def simpleAndCompound(principal, rate, time ):
    """
    calculate simple and compound interest 

    Args:
        principal (int or float): given principal 
        rate (int or float): given rate
        time(int or float): given time
    
    returns:
        tuple : returns the simple and compound interest
    """
    simpleInterest = (principal * rate * time) / 100
    compoundInterest =  principal *((1 + rate/100 )**time - 1)
    return simpleInterest, compoundInterest


print(simpleAndCompound(1000, 5, 2))