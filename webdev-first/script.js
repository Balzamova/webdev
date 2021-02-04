// Burger Click
document.querySelector('.header__burger').onclick = function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__img').classList.toggle('active');


    


    document.querySelector('.header__menu-left').classList.toggle('active');
    document.querySelector('.header__menu-right').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
  }

