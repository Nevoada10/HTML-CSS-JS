"""
Pyramid Generation Module

This module provides a Pyramid class for creating and drawing pyramids in different positions:
"""

from typing import List # Type hinting


class Pyramid:
    def __init__(self, height: int, angle: int) -> None:
        self.height = height # or number of rows
        self.angle = angle
        self.matrix = []

    def draw_centered(self) -> List[str]:
        maxCounter = 2 * self.height - 1
        for row in range(1, self.height+1):  
            counter = 2 * row - 1
            m = int((maxCounter - counter) // 2)  
            print("." * m + "#" * counter + "." * m)
    
    def draw_a_rectangular_triangle(self) -> List[str]:
        for row in range(1, self.height+1):  
            counter = row
            print("#" * counter)

    def draw_rotated(self,angle: int) -> List[str]:
        for row in range(1, self.height+1):
            counter = row



pyramid = Pyramid(5,0)
pyramid.draw_centered()