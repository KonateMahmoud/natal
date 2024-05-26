function toggleMenu(){
    const navLink= document.querySelector('.navLink');
    navLink.style.display=navLink.style.display==='flex'?'none':'flex'
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupérez les valeurs des champs
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;

    // Faites quelque chose avec les données (par exemple, envoyez-les à un serveur)
    console.log('Nom complet:', fullName);
    console.log('E-mail:', email);
    console.log('Numéro de téléphone:', phoneNumber);
    console.log('Message:', message);
});
