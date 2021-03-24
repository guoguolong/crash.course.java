import md5 = require('../../libs/umd/md5/md5')

export function echo(s:string):string {
    return md5(s);
}
