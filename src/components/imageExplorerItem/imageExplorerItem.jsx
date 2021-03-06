import React from 'react'
import classNames from 'classnames'
import './imageExplorerItem.css'

const ImageExplorerItem = ({id, isSelected, isDragged, onSetDraggedImageId, onSelect, title, imageUrl, imageAlt}) => (
  <div
    className={classNames('imageExplorerItem', {selected: isSelected, dragged: isDragged})}
    onClick={event => {
      event.stopPropagation()
      onSelect(id)
    }}
    draggable
    onDragStart={event => {
      const image = new Image()
      image.src = 'https://www.placecage.com/100/100'
      event.dataTransfer.setDragImage(image, 100, 100)
      onSetDraggedImageId(id)
    }}
    onDragEnd={() => onSetDraggedImageId()}
  >
    <img src={imageUrl} alt={imageAlt} draggable={false} />
    <span className='title'>{title}</span>
  </div>
)

export default ImageExplorerItem
