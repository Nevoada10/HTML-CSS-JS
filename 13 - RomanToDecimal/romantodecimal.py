# 88 - Int to Roman 
# Author: Uriel Neves Silva
# Github: https://github.com/nevoada10

# This code receives an integer and returns a roman digit

from typing import List

n = int(1999)

def int_to_roman(num: int) -> str: 

    # We remove whitespaces from the string
    num = str(num).replace(" ", "")
    # If after removing whitespaces the string is empty, ask the user to type something("Type something")
    if num == "":
        print("Type something!")
        return 1 

    # Num should be at least equal to 1
    if num < 1:
        print("Num should be at least equal to 1")
        return 1

    if num > 3999: # Num can't be bigger than 3999
        print("Num can't be bigger than 3999")
        return 1

    # Dict structure {key: value}
    # How to acess a value? romanDict[key] -> value
    # How to acess keys? romanDict.values() -> all keys
    # DICT usual usage we use keys to acess values, not the other way around

    romanDict = {1000: "M", 900: "CM", 500: "D", 400: "CD", 100: "C", 90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I"}

    """
    for keys in range(first key, length of the dict +1, +1):
        if the key is smaller than num:
            subtract the key from num
            add the value of the key on the left to the result
        
        
    """

    result = ""

    # For every key in the dict
    # We will sort them in descending order

    # romanDict.keys() -> dict_keys special object(OOP) = an iterable
    # key = function to sort according to | Ex:     # Sorted (iterable, key=function(), reverse=bool ): 
    # A custom key function can be supplied to customize the sort order, and the reverse flag can be set to request the result in descending order.

    for key in sorted(romanDict.keys(), key = None, reverse=True): # -> (list)
        while num >= key:
            num -= key
            result += romanDict[key]
    return result


    


int_to_roman(n)








