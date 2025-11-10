# Find the largest and smallest of three numbers

def maxAndMin(listOf3Nums):
    """
    finds the min and max from a list/array

    Args:
        listOf3Nums (Array, list, tuple): as long as it is iterable with indexing

    Returns:
        tuple: The max and min of the list

    """

    min = listOf3Nums[0]
    max = listOf3Nums[0]
   
    for i in range(len(listOf3Nums)):
        # if there is a larger value, set it as max
        if max < listOf3Nums[i]:
            max = listOf3Nums[i]
        # if there is a smaller value, set it as min
        if min > listOf3Nums[i]:
            min = listOf3Nums[i]
    return max, min

print(maxAndMin([300, 0, 30]))
print(maxAndMin([300, 0, 30, 3000, 432, 223523, 0]))