var firstImg = document.querySelectorAll('img')[0]
let carousel = document.querySelector('.carousel')
var icon = document.querySelectorAll('i')

icon.forEach((eachIcon)=>{
  eachIcon.addEventListener('click', () => {
  carousel.scrollLeft += eachIcon.id === 'next' ? firstImg.clientWidth + 14 : -firstImg.clientWidth + 14
  })
})