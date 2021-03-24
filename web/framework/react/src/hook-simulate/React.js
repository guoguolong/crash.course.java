const hooks = []
let cursor = 0; // 当前 memoizedState 下标

const instances = {}

export function useState(initialState, thisObj, meta) {
    hooks[cursor] = hooks[cursor] || initialState
    function setState(newState) {
        console.log('setState:::::', this)
        hooks[cursor] = newState;
        thisObj.render(meta);
    }
    const result = [
        hooks[cursor++], setState
    ]
    // console.log(hooks)
    return result
}

class ComponentClass {

}

export default function(componentFunc, ...args) {
    const inst = new ComponentClass();
    inst.render = componentFunc
    instances[inst] = inst;
    instances[inst].render(...args);
}