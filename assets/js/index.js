window.addEventListener('scroll', function() {
    if (scrollY > 50) {
      document.querySelector('.header__logo-image-container').classList.add('top-of-page')
    } else {
      document.querySelector('.header__logo-image-container').classList.remove('top-of-page')
    }
  })