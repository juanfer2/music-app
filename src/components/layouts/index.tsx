import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

function Layout({ children }: InferProps<typeof Layout.propTypes>) {
  return (
    <div className="layout">
      { children }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
}

export default Layout
