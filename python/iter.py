class Fibs:
    def __init__(self):
        self.a = 0
        self.b = 1

    def __next__(self):
        self.a, self.b = self.b, self.a + self.b
        print(self.a, self.b)
        if self.a > 1000:
            raise StopIteration
        return self.a
    def __iter__(self):
        return self

fibs = Fibs()

list(fibs)
# next(fibs)
# next(fibs)

# for f in fibs:
#     # print(f)
#     if f > 1000:
#         print('----')
#         break
