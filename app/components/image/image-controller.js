import ImageService from "./image-service.js"

//Your ImageService is a global class what can you do here to instantiate it?
let _imageService = new ImageService()

function getImage() {
  _imageService.getImage(drawPic)
}

function drawPic(img) {
  var template = ''
  document.getElementById('body').style.backgroundImage = `url(${img.url})`
}

export default class ImageController {
  constructor() {
    _imageService.getImage(drawPic)

  }

}

