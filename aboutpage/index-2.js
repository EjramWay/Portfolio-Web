const moreButton = document.getElementById('more-button');
const moreMenu = document.getElementById('more-section');
const aboutButton = document.getElementById('about')

aboutButton.addEventListener('click', () => {
    location.reload()
})



moreButton.addEventListener('click', () => {

    moreMenu.classList.toggle('active')

})
  