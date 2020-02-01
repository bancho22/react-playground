import React, {useState, useEffect} from 'react'
import imageMock from 'data/image.mock'
import ImageExplorer from './imageExplorer'

const ImageExplorerContainer = () => {
  const [images, setImages] = useState()
  const [selectedImageId, onSelectImageId] = useState()
  useEffect(() => {
    setImages(new Array(13).fill(0).map((_, index) => ({
      id: index,
      ...imageMock()
    })))
  }, [])
  return (
    <ImageExplorer
      images={images}
      selectedImageId={selectedImageId}
      onSelectImageId={onSelectImageId}
    />
  )
}

export default ImageExplorerContainer
