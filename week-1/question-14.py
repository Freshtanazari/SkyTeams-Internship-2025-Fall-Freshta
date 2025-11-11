# check chracter type

def checkCharType(char):
    """
    classifies the input character into vowel, consonant, digit, special char

    Args:
        char (str, int): a single character of number or string
    
    Returns:
        str: Digit, Vowel, Consonants, Special character

    Raises:
        ValueError: if char is not a single character
    """

    vowels = ["a", "i", "e", "u", "o"]
    consonants =[ "b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
                 "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
    char = str(char)
    if(len(char) != 1 ):
        raise ValueError("Please Enter one character")
    
    if(char.isdigit()):
        return "Digit"
    elif(char in vowels):
        return "Vowel"
    elif(char in consonants):
        return "Consonant"
    else:
        return "Special Symbol"

print(checkCharType(""))



