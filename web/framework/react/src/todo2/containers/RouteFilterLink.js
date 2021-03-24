import React from 'react'
import { NavLink } from 'react-router-dom'

export default function({filter, children}) {
    return (
        <NavLink
            exact
            to={filter == 'SHOW_ALL'?'/':filter}
            activeStyle={{
                textDecoration: 'none',
                color: 'pink'
            }}
        >
            {children}
        </NavLink>
    )
}