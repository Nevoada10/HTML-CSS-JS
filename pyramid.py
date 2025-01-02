from typing import List

def main (height: int):
    pyramid = create_pyramid(height) # Pyramid is a list, where each element is a string
    print_full_pyramid(pyramid)

def create_pyramid(height: int) -> List[str]:
    pyramid = []
    for i in range(1, height + 1):
        pyramid.append("#" * i)
    return pyramid

def print_half_plus_one_ascending(pyramid: List[str]) -> int:
    for element in pyramid:
        print(element)
    return 0

def print_half_minus_one_descending(pyramid: List[str]) -> int:
    for element in pyramid[-2::-1]:
        print(element)
    return 0

def print_half_descending(pyramid: List[str]) -> int:
    for element in pyramid[::-1]:
        print(element)
    return 0

def print_full_pyramid(pyramid: List[str]) -> int:
    print_half_plus_one_ascending(pyramid)
    print_half_minus_one_descending(pyramid)
    return 0

if __name__ == "__main__":
    main(8)

