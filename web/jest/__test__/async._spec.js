function fetchData(f) {
    return new Promise((resolve, reject) => {
        if (f) {
            return setTimeout(reject('Unknown Error'), 1000);
        }
        return setTimeout(resolve('course from magicmooc'), 1000);
    })
}

function fetchDataError() {
    return new Promise((resolve, reject) => {
        throw new Error('Unknown Error')
    })
}

test('The data is course', ()=>{
    return fetchData().then(data => {
        expect(data).toBe('course from magicmooc')
    })
})

test('ASYNC:The data is course', async ()=>{
    let data = await fetchData()
    expect(data).toBe('course from magicmooc')
})

test('course is execption', ()=>{
    expect.assertions(1);
    return fetchData(true).catch(e => {
        expect(e).toMatch('Unknown Error')
    })    
})

test('ASYNC-ERROR:course execption', async ()=>{
    expect.assertions(1)
    try {
        await fetchData(true)
    } catch (error) {
        expect(error).toMatch('Unknown Error')
    }
})

test('ASYNC-PROMISE:The data is course.', async ()=>{
    await expect(fetchData()).resolves.toBe('course from magicmooc')
})

test('the fetch fails with an error', async () => {
    expect.assertions(1)
    await expect(fetchDataError()).rejects.toThrow('Unknown Error');
});
