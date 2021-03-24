def flatten(nested): 
    print("flatten(", nested, ')')
    try:
        for sublist in nested:
            for element in flatten(sublist):
                print('ELE..', element, '>>>', sublist)
                yield element + 20
                print('round 1')
    except TypeError:
        k = nested * 100;
        print("inner except:", k)
        yield k

# ft = flatten([[[1], 2], 3, 4, [5, [6, 7]], 8])
ft = flatten([[2,3]])

r = next(ft)
print(r)
# print('-----------------------------------')

# r = next(ft)
# print(r)
# print('-----------------------------------')
