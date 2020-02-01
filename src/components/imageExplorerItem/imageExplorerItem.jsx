import React from 'react'
import classNames from 'classnames'
import './imageExplorerItem.css'

const ImageExplorerItem = ({id, isSelected, onSelect, title, imageUrl, imageAlt}) => (
  <div
    className={classNames('imageExplorerItem', {selected: isSelected})}
    onClick={event => {
      event.stopPropagation()
      onSelect(id)
    }}
    draggable
  >
    <img src={imageUrl} alt={imageAlt} draggable={false} />
    <span className='title'>{title}</span>
  </div>
)

export default ImageExplorerItem
