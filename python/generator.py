def flatten(nested):
    try :
        for sublist in nested:
            print('eneter: ', sublist)
            try :
                for element in sublist:
                    print('normal')
                    yield element
            except Exception as e:
                print('exception')
                yield sublist
        yield 234
    except Exception as e:
        print('nested except:', nested)


r = flatten([[23, 88], 918])
# [[1, 2], [3, 4], [5]]
x = next(r)
print(x)
print('----------------------------')

x = next(r)
print(x)
print('----------------------------')

x = next(r)
print(x)
print('----------------------------')

try:
    x = next(r)
    print('x::::', x)
except StopIteration as e:
    print('StopIteration::::')

# r = list(flatten([[23, 88], 918]))
# print(r)

