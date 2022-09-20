string = 'Always-Look-on-the-Bright-Side-of-Life'

def convert(str, k):
    k = k%26
    new_str = ""
    for letter in str:
        code = ord(letter)
        if (code >= 97 and code <= 122):
            if code + k > 122:
                new_str+=chr(code-(26-k))
            else:
                new_str+=chr(code+k)
        elif (code >=65 and code <= 90):
            if code + k > 90:
                new_str+=chr(code-(26-k))
            else:
                new_str+=chr(code+k)
        else:
            new_str+=letter
    return new_str

print(convert(string, 5))