var carousel = document.querySelector('.carousel')
var firstImageCard = document.querySelectorAll('.Image-Card')[0]
var ImageCard = document.querySelectorAll('.Image-Card')
const prev = () => carousel.scrollLeft -= firstImageCard.clientWidth + 28

setInterval(function() {next()}, 1000);

const next = () => {
    carousel.scrollLeft += firstImageCard.clientWidth + 28 
    for (let i = 0; i < ImageCard.length; i++) {
      let singleImageCard = carousel.children[i]
      let cloneCards = singleImageCard.cloneNode(true)
      carousel.appendChild(cloneCards)
    }
}
