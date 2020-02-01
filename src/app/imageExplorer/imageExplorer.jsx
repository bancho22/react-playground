import React from 'react'
import ImageExplorerItem from 'components/imageExplorerItem/imageExplorerItem'
import AppLink from 'components/appLink/appLink'
import './imageExplorer.css'

const ImageExplorer = () => (
  <div className='imageExplorer'>
    <AppLink to='/'>
      Go back
    </AppLink>
    <div className='explorerPane'>
      <ImageExplorerItem type='image' />
    </div>
  </div>
)

export default ImageExplorer
