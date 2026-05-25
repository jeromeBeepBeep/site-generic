document.addEventListener("DOMContentLoaded", () => {
    // 1. On cible l'élément à animer
    const elasticSeparator = document.querySelector('.elastic-separator');
    
    // Si l'élément n'existe pas sur la page, on arrête le script pour éviter les erreurs
    if (!elasticSeparator) return;

    // 2. Configuration de l'Observer
    const observerOptions = {
        root: null, // Utilise la fenêtre du navigateur (viewport)
        threshold: 0.3 // Se déclenche dès que 30% du séparateur est visible à l'écran
    };

    // 3. Création de l'Observer
    const separatorObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si le séparateur entre dans l'écran
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // On coupe l'observation pour que l'animation ne se joue qu'une seule fois
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 4. On lance l'écoute sur notre séparateur
    separatorObserver.observe(elasticSeparator);
});