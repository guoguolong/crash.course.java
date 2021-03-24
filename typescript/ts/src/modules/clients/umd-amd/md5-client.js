define(["require", "exports", "../../libs/umd/md5/md5"], function (require, exports, md5) {
    "use strict";
    exports.__esModule = true;
    function echo(s) {
        return md5(s);
    }
    exports.echo = echo;
});
