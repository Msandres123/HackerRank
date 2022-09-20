string = 'abcZ'

def convert(str, k):
    new_str = ""
    for letter in str:
        code = ord(letter)
        if (code >= 97 and code <= 122):
            if code + k > 122:
                new_str+=chr(97+k-1)
            else:
                new_str+=chr(code+k)
        elif (code >=65 and code <= 90):
            if code + k > 90:
                new_str+=chr(65+k-1)
            else:
                new_str+=chr(code+k)
        else:
            new_str+=letter
    return new_str

print(convert(string, 8))