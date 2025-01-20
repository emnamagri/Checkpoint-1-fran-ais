function validerFormulaire() {
    // Effacer les messages d'erreur précédents
    réinitialiserRésultatsTests();

    let résultats = [];
    let estValide = true;

    // **Principe 1 : Les tests montrent la présence de défauts**
    const nom = document.getElementById('name').value.trim();
    if (nom === "") {
        document.getElementById('name-error').style.display = 'inline';
        résultats.push("Défaut trouvé : Le champ Nom est vide !");
        estValide = false;
    }

    // **Principe 2 : Les tests exhaustifs sont impossibles**
    const email = document.getElementById('email').value.trim();
    if (!email.includes('@')) {
        document.getElementById('email-error').style.display = 'inline';
        résultats.push("Défaut trouvé : Le format de l'email est invalide.");
        estValide = false;
    }

    // **Principe 3 : Tester tôt**
    const motDePasse = document.getElementById('password').value.trim();
    if (motDePasse.length < 6) {
        document.getElementById('password-error').style.display = 'inline';
        résultats.push("Défaut trouvé : Le mot de passe est trop court.");
        estValide = false;
    }

    // **Principe 4 : Les tests doivent être effectués sur une application complète**
    const confirmerMotDePasse = document.getElementById('confirm-password').value.trim();
    if (motDePasse !== confirmerMotDePasse) {
        document.getElementById('confirm-password-error').style.display = 'inline';
        résultats.push("Défaut trouvé : Les mots de passe ne correspondent pas.");
        estValide = false;
    }

    // **Principe 5 : Les tests dépendent du contexte**
    if (email === "test@example.com") {
        résultats.push("Test dépendant du contexte : Adresse email spécifique détectée.");
    }

    // **Principe 6 : L'absence d'erreurs est une fausse croyance**
    if (estValide) {
        résultats.push("Aucun défaut trouvé. Mais l'absence d'erreurs ne signifie pas toujours la conformité.");
    }

    // **Principe 7 : Le coût des défauts augmente au fur et à mesure que les tests progressent**
    if (!estValide) {
        résultats.push("Défauts trouvés ! Le coût pour corriger ces problèmes augmente à mesure que le développement progresse.");
    }

    // Afficher les résultats des tests
    afficherRésultatsTests(résultats);

    // Empêcher la soumission du formulaire à des fins de test
    return false;
}

function réinitialiserRésultatsTests() {
    document.getElementById('name-error').style.display = 'none';
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';
    document.getElementById('confirm-password-error').style.display = 'none';
    document.getElementById('results-list').innerHTML = '';
}

function afficherRésultatsTests(résultats) {
    const listeRésultats = document.getElementById('results-list');
    résultats.forEach(resultat => {
        const li = document.createElement('li');
        li.textContent = resultat;
        listeRésultats.appendChild(li);
    });
}
