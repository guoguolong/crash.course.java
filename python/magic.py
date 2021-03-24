from abc import ABC, abstractmethod
class Rectangle(ABC):
    @abstractmethod
    def ab():
        '''ab is a static method'''
    def __init__(self, size=0):
        print('Init me')
        self.capacity = size

    # @staticmethod
    def count():
        print('I AM STATIC METHOD.')

    count = staticmethod(count)
    # @classmethod
    def calc(cls):
        print('Calculate me...', cls)
    calc = classmethod(calc)

    def get_size(self):
        print('get me..')
        return self.capacity

    def set_size(self, size):
        print('set me!')
        self.capacity = size
    size = property(get_size, set_size)

class BlueRectangle(Rectangle):
    def ab(self):
        print("I am ab from blue")

br = BlueRectangle()
br.ab()
# rt.calc();
Rectangle.count()
Rectangle.calc()
# rt.calc()
# class Rectangle:
#     def __init__(self):
#         self.width = 0
#         self.height = 0
#         self.capacity = {};
#     def set_size(self, size):
#         self.width, self.height = size
#     def get_size(self):
#         return self.capacity;
#         # return self.width, self.height
#     size = property(get_size, set_size)

# r = Rectangle();
# r.size = {'width': 199, 'height': 90}

