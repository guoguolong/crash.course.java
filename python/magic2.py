class Rectangle:
    def __init__(self):
        self.width = 0
        self.height = 0
        self._bag = '***bag***'
        self.bag = 'cccc';

    def __setattr__(self, name, value):
        if name == 'size':
            self.width, self.height = value
        else:
            print('Setattr : ', name , value)
            self.__dict__[name] = value

    # def __getattr__(self, name):
    #     print('__getattr__:::::')
    #     if name == 'size':
    #         return self.width, self.height
    #     else:
    #         raise AttributeError()

    def __getattribute__(self, name):
        print('<<<<<<<<<__getattribute__:::::', name)
        return super().__getattribute__(name);

    def get_a(self):
        print('<<<<<<<<<<<<<<<<<<GET get_a')
        return self._bag;

    def set_a(self, value):
        print('SET set_a')
        self._bag = 'new bag'

    bag = property(get_a, set_a)

r = Rectangle()
print('------------------- MAIN --------------------------\n\n')
# r.bag = 'dongdong'
r.bag
print('---------------------------------------------')
r.bag = 'NEW BAG'