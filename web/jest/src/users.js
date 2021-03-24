import axios from 'axios';

class Users {
  static async all() {
    const resp = await axios.get('https://camp.banyuan.club/users.json')
    return resp.data
  }
}

export default Users;