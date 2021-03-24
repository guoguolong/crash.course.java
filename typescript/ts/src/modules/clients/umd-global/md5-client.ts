/// <reference path = "../../libs/umd/md5/md5.global.d.ts" /> 

function echo(s:string):string {
    return md5(s);
}