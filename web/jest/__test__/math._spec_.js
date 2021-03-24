const sum = require('../src/math')

// jest.setTimeout(10000)

function compileAndAndroidCode() {
    throw new Error('you are using the wrong JDK.');
}
test('compiling android goes as expected', () => {
    expect(compileAndAndroidCode).toThrow();
    expect(compileAndAndroidCode).toThrow(Error);
    expect(compileAndAndroidCode).not.toThrow('you are using the wrong JdK.');
    expect(compileAndAndroidCode).toThrow(/JDK/);
    expect(compileAndAndroidCode).toThrow(/jdk/i);
})

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer'
]

test('the shopping list has beer on it', () =>{
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer')
})

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
});

test('add 1 + 2 to equals 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('object assignment', () =>{
    const data = {one: 1}
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2})
})


test('adding positive numbers is not zero', () =>{
    for (let a = 1; a < 10; a++) {
        for (let b = 0; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
})

test('null', ()=>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
})

test('two plust two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

test('adding floating point numbers', ()=>{
    const value = 0.1 + 0.2;
    console.log('value:', value)
    expect(value).toBeCloseTo(0.3)
})