
const navPanel = document.getElementById('nav-panel');
const menuToggle = document.getElementById('menu-toggle');

menuToggle
.addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
  navPanel.classList.toggle('is-open');
});