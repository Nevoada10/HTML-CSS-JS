l = [43, 91, 13, 67, 25, 59, 85, 39, 76, 11]

# Bubble sort

for i in range(len(l)):
    for j in range(i+1,len(l)):
        if l[i] > l[j]:
            l[i], l[j] = l[j],l[i]

print(l)
# i = 0 j = 1
# n**2