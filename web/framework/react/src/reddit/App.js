import React from 'react'
import Reddit from './Reddit'
import ErrorBoundary from '../error/ErrorBoundary'

export default function(props) {
  return (
    <ErrorBoundary>
      <div>
        <Reddit></Reddit>
      </div>
    </ErrorBoundary>
  )
}
