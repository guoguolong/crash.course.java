define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function removeTags(s) {
        return String(s).replace(/<[a-zA-Z\/][^<>]*>/g, '');
    }
    exports.removeTags = removeTags;
});
