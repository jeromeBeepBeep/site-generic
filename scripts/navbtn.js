const navPanel = document.getElementById('nav-panel');
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.responsiveNavbar');

menuToggle.addEventListener('click', function(){
  // 1. On vérifie si on est en train d'ouvrir le menu
  const isOpening = !document.body.classList.contains('nav-open');
  
  if (isOpening) {
    // On calcule la position exacte de la navbar par rapport au haut du document
    // Si la navbar est déjà en haut, navbarOffset vaudra la hauteur du Hero.
    const navbarOffset = navbar.offsetTop;

    // 2. On force la page à scroller exactement au niveau de la navbar
    window.scrollTo({
      top: navbarOffset,
      behavior: 'smooth' 
    });
    
    // On attend la fin de l'animation de scroll (300ms) avant de figer le body
    setTimeout(() => {
      document.body.classList.add('nav-open');
      navPanel.classList.add('is-open');
    }, 300);
    
  } else {
    // 3. Si on ferme le menu, on retire simplement les classes normalement
    document.body.classList.remove('nav-open');
    navPanel.classList.remove('is-open');
  }
});