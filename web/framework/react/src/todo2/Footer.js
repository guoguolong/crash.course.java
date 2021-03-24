import React from 'react'
import RouteFilterLink from './containers/RouteFilterLink'
import { VisibilityFilters } from './redux/actions'

export default function Footer(props) {
  return (
    <section>
      <ul>
        <li><RouteFilterLink filter={VisibilityFilters.SHOW_ALL}>All</RouteFilterLink></li>
        <li><RouteFilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</RouteFilterLink></li>
        <li><RouteFilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</RouteFilterLink></li>
      </ul>
    </section>
  )
}