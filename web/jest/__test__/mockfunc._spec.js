function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

test('length should be 2', () => {
    expect(mockCallback.mock.calls.length).toBe(2)
    expect(mockCallback.mock.calls[0][0]).toBe(0)
    expect(mockCallback.mock.calls[1][0]).toBe(1)
    expect(mockCallback.mock.results[0].value).toBe(42)
    expect(mockCallback.mock.results[1].value).toBe(43)
})

const myMockFn = jest
  .fn()
  .mockImplementationOnce(cb => {
    const sum = 3 + 5;
    cb(null, sum)
})
  .mockImplementationOnce(cb => cb(null, false))
   .mockName('add42');

myMockFn((error, value) => null)
expect(myMockFn).toBeCalled();
    // myMockFn((err, val) => {
    //     expect(val).toBe(10);
    // });

// test('errr', () => {
//     myMockFn((err, val) => {
//         expect(val).toBe(10);
//     });
// })
// myMockFn((err, val) => console.log(val));
// // > true

// myMockFn((err, val) => console.log(val));