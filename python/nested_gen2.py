c = 0
def generator():
    global c
    while 1:
        c += 1
        yield c
        print('first 22222')

def get_num():
    gen = generator()
    for i in range(9):
        yield next(gen)
        print('first 11111')

iter = get_num()

r = next(iter)
print(r)


# r = next(iter)
# print(r)

# def main():
#     for i in range(5):
#         for j in get_num():
#             print(j)

# if __name__ == '__main__':
#     main()