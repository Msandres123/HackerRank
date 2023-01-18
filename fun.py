def fun(array):
    result = []
    for i in range(len(array)-1):
        for n in range(i+1, len(array)):
            if sorted(array[i]) == sorted(array[n]):
                result.append(array[i])
    return sorted(result)

arr1 = ["code", "aaagrnms", "anagrams", "doec"]

print(fun(arr1))