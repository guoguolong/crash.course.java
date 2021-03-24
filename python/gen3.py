def repeater(value):
    while True:
        print('mmda', value)
        new = (yield value)
        print('new:', new)
        if new is not None:
            value = new

r = repeater(34);

result = next(r)
print(result)
print('----------')

result = r.send("SHIT")
# print(result)
print('----------')

result = r.send("XP")
result = next(r)
# print(result)

