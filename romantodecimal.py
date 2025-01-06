# 88 - Roman to Integer (Solution)
# Author: Uriel Neves Silva
# Top interview 150 https://leetcode.com/problems/roman-to-integer/?envType=study-plan-v2&envId=top-interview-150
# Github: https://github.com/nevoada10

from typing import List

class Solution:
    def romanToInt(self, s: str) -> int:
        roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    
        result = 0
        prev_value = 0

        for char in s[::-1]:
            current_value = roman[char] # Get the value of the current character in the dictionary

            if current_value < prev_value:
                result -= current_value

            else: # current_value >= prev_value
                result += current_value
                prev_value = current_value

        return result

# Time complexity: O(n) = O(len(s))
# - Uses a single pass through the input string, each character is processed once.

# Space complexity: O(1) 
# - Uses a constant amount of extra space (result and prev_value variables)
# - The input dictionary is fixed size and does not grow with input

# Test cases
def test_cases():
    solution = Solution()
    
    test_cases = [
        ("III", 3),        # Simple addition
        ("IV", 4),          # Subtraction case
        ("IX", 9),          # Another subtraction case
        ("LVIII", 58),      # Mixed case
        ("MCMXCIV", 1994),  # Complex case
        ("I", 1),           # Single character
        ("MMXXI", 2021)     # Year representation
    ]
    
    # Run tests
    for roman, expected in test_cases:
        result = solution.romanToInt(roman)
        print(f"Roman: {roman}, Expected: {expected}, Result: {result}, Passed: {result == expected}")

# Run the tests
if __name__ == "__main__":
    solution = Solution()
    solution.romanToInt

"""

Test Result
Test Result
13. Roman to Integer
Easy

Topics
Companies

Hint
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
"""