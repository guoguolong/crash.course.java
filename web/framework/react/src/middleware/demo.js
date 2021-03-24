import store from './store'

function patchStoreToAddLogging(store) {
    const next = store.dispatch
    store.dispatch = function dispatchAndLog(action) {
        console.log('  Middlware1: dispatching', action)
        let result = next(action)
        console.log('  Middlware1: next state', store.getState())
        return result
    }
}

function patchStoreToAddCrashReporting(store) {
    const next = store.dispatch
    store.dispatch = function dispatchAndReportErrors(action) {
        try {
            console.log('Middlware2: Crash Reporting')
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
}

patchStoreToAddLogging(store)
patchStoreToAddCrashReporting(store)

function addTodo(prdName) {
    console.log('addTodo : ' + prdName)
}
store.dispatch('addTodo')