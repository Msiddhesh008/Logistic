var prevBtn = document.getElementById('prev')
var nextBtn = document.getElementById('next')
var firstImg = document.querySelectorAll('img')[0]
let carousel = document.querySelector('.carousel')

prevBtn.addEventListener('click', () => {
  carousel.scrollLeft += -firstImg.clientWidth + 14
})
nextBtn.addEventListener('click', () => {
  carousel.scrollLeft += firstImg.clientWidth + 14
})