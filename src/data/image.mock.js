const imageDimensions = [
  '200/300',
  '300/200',
  '300/300'
]

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
}

export default () => {
  const dimensions = imageDimensions[getRandomInt(3)]
  return {
    title: 'Nicolas Cage',
    imageUrl: `https://www.placecage.com/${dimensions}`,
    imageAlt: `cage-${dimensions}`
  }
}
