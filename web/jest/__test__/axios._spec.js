jest.mock('axios');
import axios from 'axios';
import users from '../src/users'

test('should fetch users', async () => {
    const resp = {
        data: {
            code: 0,
            message: '请求成功',
            data: [{name: 'Bob'}]
        }
    };
    axios.get.mockResolvedValueOnce(resp);

    const userResp = await users.all();
    expect(userResp.data[0].name).toEqual('Bob')
})


test('should fetch products', async () => {

    const resp = {
        data: {
            code: 0,
            message: '请求成功',
            data: [{name: 'MP3'}]
        }
    };
    axios.get.mockResolvedValueOnce(resp);

    const userResp = await users.all();
    expect(userResp.data[0].name).toEqual('MP3')
})