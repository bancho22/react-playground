import React from 'react'
import classNames from 'classnames'
import './imageExplorerItem.css'

const ImageExplorerItem = ({isSelected, title, imageUrl, imageAlt}) => (
  <div className={classNames('imageExplorerItem', {selected: isSelected})}>
    <img src={imageUrl} alt={imageAlt} />
    <span className='title'>{title}</span>
  </div>
)

export default ImageExplorerItem
