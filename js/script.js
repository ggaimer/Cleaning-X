const burger = document.querySelector('.burger');

addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('stop-scroll');

    burger.classList.toggle('active');
    burger.classList.toggle('burger--active')
    document.querySelector('.header__list').classList.toggle('open');
})