# this is a python prototype for a palindrome checker 
# this is a prototype for the logic behind the palindrome checker in JavaScript

from typing import List

def testingcases():
    print(checkPalindrome("madam")) # true
    print(checkPalindrome("Hello")) # false
    print(checkPalindrome("Race a car")) # false
    print(checkPalindrome("A man a plan a canal Panama")) # true
    print(checkPalindrome("Was it a car or a cat I saw?")) # true
    print(checkPalindrome("12321")) # true
    print(checkPalindrome("")) # true
    print(checkPalindrome("a")) # true


def checkPalindrome(userInput: str) -> bool:

    # 1. userInput.lower() converts the string to lowercase, (str) -> (str)
    # These 2 operations remove non alphanumeric characters
    # 2. filter(str.isalnum, userInput) checks each character and keeps ONLY alphanumeric ones, (str) -> (iterator)
    # An iterator is a memory-efficient(dinamically), one-time-use sequence that generates items on-demand
    # Unlike a list, it doesn't store all elements at once, but creates them as you need them
    # 3. ''.join() reconstructs the string with ONLY those characters, (iterator) -> (str)
    userInput = ''.join(filter(str.isalnum, userInput.lower()))

    # reverse the string
    reversedString = userInput[::-1]

    # check if the reversed string is equal to the original string
    return userInput == reversedString # true or false

# test cases

        
if __name__ == "__main__":
    testingcases()
