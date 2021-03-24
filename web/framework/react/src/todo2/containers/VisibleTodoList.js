import { connect } from 'react-redux'
import TodoList from '../TodoList'
import { toggleTodo } from '../redux/actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = (state, props) => {
    return {
        // todos: getVisibleTodos(state.todos, state.visibilityFilter)
        todos: getVisibleTodos(state.todos, props.filter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default VisibleTodoList