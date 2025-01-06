# 88 - Int to Roman 
# Author: Uriel Neves Silva
# Github: https://github.com/nevoada10

# This code receives an integer and returns a roman digit

x = 1994
roman = {1000: "M", 900: "CM", 500: "D", 400: "CD", 100: "C", 90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I"}
def intToRoman(x):
    result = ""
    keys = list(roman.keys())
    keys.sort(reverse=True)
    i = 0
    while x > 0:
        if x >= keys[i]:
            x -= keys[i]
            result += roman[keys[i]]
        else:
            i += 1
    return result

print(intToRoman(x))








