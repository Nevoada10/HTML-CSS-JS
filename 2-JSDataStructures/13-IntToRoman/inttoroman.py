# Roman to Integer (romantoint.py)
# Author: Uriel Neves Silva
# Github: https://github.com/nevoada10

# This is a program that converts integers to roman numerals.

from typing import List

def main() -> None:
    while True:
        try: 
            n= input("Type a number or 'q' to quit: ")

            if n.lower() == "q":
                print("Operation cancelled by user.")
                break

            print(int_to_roman(n))

        except ValueError as VE:
            print(" Invalid input. Please enter a valid integer.",VE)
            break

        except KeyboardInterrupt as KI: # Ctrl + C
            print(" Operation cancelled by user.",KI)
            break
    

def int_to_roman(num: int) -> str: 

    # We remove whitespaces from the string and check if it's empty
    num = str(num).replace(" ", "")
    if num == "":
        print("Type something!")
        return 1

    num = int(num)

    # Num should be at least equal to 1 and can't be bigger than 3999
    if num < 1:
        print("Num should be at least equal to 1")
        return 1

    if num > 3999:
        print("Num can't be bigger than 3999")
        return 1

    # Dict structure {key: value}
    # How to acess a value? romanDict[key] -> value
    # How to acess keys? romanDict.values() -> all keys
    # DICT usual usage we use keys to acess values, not the other way around

    romanDict = {1000: "M", 900: "CM", 500: "D", 400: "CD", 100: "C", 90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I"}

    result = ""

    # For every key in the dict
    # We will sort them in descending order

    # romanDict.keys() -> dict_keys special object(OOP) = an iterable
    # key = function to customize the sorting logic | if None -> default sorting logic (small to big)

    """
    key = int ; value = string
    for keys in range(first key, length of the dict +1, +1):
        if the key is smaller than num:
            subtract the key from num
            add the value of the corresponding value to the key on the left to the result
    """

    # Sorted (iterable, key=function(), reverse=bool )
    # In our case sorted() returns (sorted list in descending order because of reverse=True)
    # So, key in the loop below is an element of the list

    descendingKeys = sorted(romanDict.keys(), reverse=True)
    
    for key in descendingKeys: # -> (sorted descending list)
        while key <= num:
            num -= key
            result += romanDict[key]
    return result

if __name__ == "__main__":
    main()