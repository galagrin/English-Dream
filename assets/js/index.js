window.addEventListener('scroll', function() { // Добавление полупрозрачного фона при прокрутке 
    if (scrollY > 50) {
      document.querySelector('.header__logo-image-container').classList.add('top-of-page')
    } else {
      document.querySelector('.header__logo-image-container').classList.remove('top-of-page')
    }
  })

  // const stickyDiv = document.querySelector('.header__logo-image-container '); // Выбираем необходимый div
  // const stickyPoint = stickyDiv.offsetTop; // Точка, при достижении которой элемент становится фиксированным

  // window.addEventListener('scroll', () => {
  //   if (window.pageYOffset >= stickyPoint) {
  //     stickyDiv.classList.add('sticky-top'); // Фиксируем элемент, когда прокрутили до нужной точки
  //   } else {
  //     stickyDiv.classList.remove('sticky-top'); // Освобождаем его, если скролл находится выше этой точки
  //   }
  // });