import React from 'react'
import {Link} from 'react-router-dom'
import './appLink.css'

const AppLink = ({to, children}) => (
  <Link className='app-link' to={to}>
    {children}
  </Link>
)

export default AppLink
