import React from 'react'
import {Link} from 'react-router-dom'

const AppLink = ({to, children}) => (
  <Link className='app-link' to={to}>
    {children}
  </Link>
)

export default AppLink
