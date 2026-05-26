document.addEventListener("DOMContentLoaded", () => {
    // On cible TOUS les séparateurs au cas où tu en aurais plusieurs sur la page
    const elasticSeparators = document.querySelectorAll('.elastic-separator');
    
    if (elasticSeparators.length === 0) return;

    const observerOptions = {
        root: null, 
        threshold: 0.3 // Se déclenche quand 30% du séparateur est visible
    };

    const separatorObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Le séparateur est visible -> on joue l'animation
                entry.target.classList.add('is-visible');
            } else {
                // Le séparateur sort de l'écran -> on réinitialise l'état pour la prochaine fois
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // On lance l'écoute sur chaque séparateur trouvé
    elasticSeparators.forEach(separator => separatorObserver.observe(separator));
});