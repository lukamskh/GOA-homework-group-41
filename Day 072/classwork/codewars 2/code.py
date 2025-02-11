def even_numbers(arr, number):
    result = []
    arr.reverse()
    for i in arr:
        if i % 2 == 0:
            result.append(i)
            if len(result) == number:
                break
    result.reverse()
    return result