import React from 'react'
import ImageExplorerItem from 'components/imageExplorerItem/imageExplorerItem'
import AppLink from 'components/appLink/appLink'
import './imageExplorer.css'

const ImageExplorer = ({images = [], selectedImageId, onSelectImageId, draggedImageId, onSetDraggedImageId}) => (
  <div
    className='imageExplorer'
    onClick={() => onSelectImageId()}
  >
    <AppLink to='/'>
      Go back
    </AppLink>
    <div className='explorerPane'>
      {images.map(({id, title, imageUrl, imageAlt}) => (
        <ImageExplorerItem
          id={id}
          key={id}
          isSelected={selectedImageId === id}
          isDragged={draggedImageId === id}
          onSetDraggedImageId={onSetDraggedImageId}
          onSelect={onSelectImageId}
          title={title}
          imageUrl={imageUrl}
          imageAlt={imageAlt}
        />
      ))}
    </div>
  </div>
)

export default ImageExplorer
