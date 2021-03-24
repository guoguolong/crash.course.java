import random

def conflict(state, nextX):
    nextY = len(state)
    for i in range(nextY):
        if abs(state[i] - nextX) in (0, nextY - i): 
            return True
    return False

def queens(num, state):
    if len(state) == num-1:
        for pos in range(num):
            if not conflict(state, pos):
                yield pos

NUM = 4;
state = [0]

board = [];
# board.append('a')

for y in range(NUM):
    x = len(state)
    isPassed = conflict(state, y);
    if not isPassed:
        state.append(y)
        print(x, y)
        break;

print(state)

for y in range(NUM):
    x = len(state)
    isPassed = conflict(state, y);
    if not isPassed:
        state.append(y)
        print(x, y)
        break;

print(state)

for y in range(NUM):
    x = len(state)
    isPassed = conflict(state, y);
    if not isPassed:
        state.append(y)
        print(x, y)
        break;

print(state)
