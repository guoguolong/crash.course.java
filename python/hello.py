def check_index(key): 
	"""指定的键是否是可接受的索引?
键必须是非负整数，才是可接受的。如果不是整数， 将引发TypeError异常;
如果是负数，将引发Index Error异常(因为这个序列的长度是无穷的)
	"""
	if not isinstance(key, int):
		raise TypeError 
	if key < 0: 
		raise IndexError

class ArithmeticSequence:
	def __init__(self, start=0, step=1): 
		self.start = start
		self.step = step
		self.changed = {}

	def __getitem__(self, key):
		check_index(key);
		try : 
			return self.changed[key]
		except KeyError:
			return self.start + key * self.step

	def __setitem__(self, key ,value):
		check_index(key);
		self.changed[key] = value;

	def __len__(self):
		return 10

	def __delitem__(self, key):
		check_index(key);
		del self.changed[key]

# aseq = ArithmeticSequence(0, 5)

# aseq[7] = 'abc'
# aseq[2] = 'def'
# print(aseq.changed)
# del aseq[2]
# print(aseq.changed)
# print(aseq[22])


