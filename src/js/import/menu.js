  document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.header__menu-toggle');
  const menu = document.querySelector('.header-list');
  const closeBtn = document.querySelector('.header__menu-close');
  const menuLinks = document.querySelectorAll('.header-list__link[href^="#"]'); // только якорные ссылки

  menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.add('open');
  });

  closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('open');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }

    menu.classList.remove('open');
    });
  });
});

