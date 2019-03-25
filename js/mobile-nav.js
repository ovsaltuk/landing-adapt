let burgerBtnHeader = document.querySelector('.nav__burger-btn_header');
let mobileNav = document.querySelector('.mobile-nav');
let navCloseBtn = mobileNav.querySelector('.mobile-nav__close-button');
let burgerBtnFooter = document.querySelector('.nav__burger-btn_footer');


burgerBtnHeader.addEventListener('click', function(e){
    e.preventDefault();
    mobileNav.classList.add('mobile-nav_visible');

});

navCloseBtn.addEventListener('click', function (e) {
  e.preventDefault();
  mobileNav.classList.remove('mobile-nav_visible');
});
burgerBtnFooter.addEventListener('click', function () {
  mobileNav.classList.add('mobile-nav_visible');
});