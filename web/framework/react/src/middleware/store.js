export default {
    getState: function() {
        return {
            name: 'allen',
            age: 34
        }
    },
    dispatch:function(callFunc) {
        const action = '---origin action---'
        console.log('    ', action)
        // callFunc(action)
    }
}