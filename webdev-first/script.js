// Burger Click
document.querySelector('.header__burger').onclick = function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__body').classList.toggle('active');
    
    document.querySelector('body').classList.toggle('lock');
  }

