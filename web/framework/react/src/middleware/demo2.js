import store from './store'

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

const crashReporter = store => next => action => {
    try {
        console.log('Raven Report')
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        })
        throw err
    }
}

function applyMiddleware(store, middlewares) {
    middlewares = middlewares.slice()
    middlewares.reverse()
    let dispatch = store.dispatch
    middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)))
    return Object.assign({}, store, { dispatch })
}

const store2 = applyMiddleware(store, [logger, crashReporter])

function addTodo(prdName) {
    console.log('addTodo : ' + prdName)
}

console.log(store2.dispatch.toString())

store2.dispatch({ type: 'icecream' })
