import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    return (
        <ul>
            {props.todos.map((todo, index) => (
                <Todo key={index} {...todo} onClick={() => props.onTodoClick(index)} />
            ))}
        </ul>
    )
}