// Initialize i18next
document.addEventListener("DOMContentLoaded", () => {
    // Get the saved language from localStorage, default to 'en' if not found
    const savedLanguage = localStorage.getItem('language') || 'en';

    // Initialize i18next with the saved language
    i18next.init({
        lng: savedLanguage, // Use the saved language or default to 'en'
        debug: true,
        resources: {
            en: {
                translation: {
                    hero1: "Hello, My Name Is",
                    hero2: "MOHAMED LAAGUILI",
                    hero3: "and I am",
                    hero4: "Resume",
                    about1: "About",
                    about2: `Being a web developer is very difficult. It requires many skills and attention to detail. I quickly adapt to new environments and am open to long-term contracts.`,
                    about3: "Infos",
                    about4: "Birth",
                    "work-title": "Work",
                    "achievements-title": "Achievements",
                    "skills-title": "Digital Skills",
                    "skills-description": "Here’s an overview of my expertise in web development and what I’m proficient in",
                    "resume-title": "Resume",
                    "resume-name": "LAAGUILI MOHAMED",
                    "resume-description": "Full-stack developer with 1 year of experience in freelance front-end and back-end development.",
                    "resume-education-title": "Education",
                    "resume-experience-title": "Experience",
                    "resume-certificates-title": "Certificates",
                    "resume-note-title": "Note:",
                    "resume-note-description": "I stopped collecting certificates in 2022. Now, I focus more on acquiring knowledge and skills than a piece of paper.",
                    "services-title": "What I Offer?",
                    "services-description": "Explore the range of services I provide to help bring your project to life.",
                    "portfolio-title": "My Portfolio",
                    "portfolio-description": "A showcase of my top 10 projects",
                    "portfolio-more-button": "More projects soon ...",
                    "testimonials-title": "Testimonial",
                    "testimonials-description": "Feedback and insights from those I've worked with."
                }
            },
            fr: {
                translation: {
                    hero1: "Salut, Je m'appelle",
                    hero2: "MOHAMED LAAGUILI",
                    hero3: "et je suis",
                    hero4: "CV",
                    about1: "A propos",
                    about2: `Être développeur web est très difficile. Cela nécessite de nombreuses compétences et une attention particulière aux détails. Je m'adapte rapidement à de nouveaux environnements et je suis ouvert aux contrats à long terme.`,
                    about3: "Infos",
                    about4: "Naissance",
                    "work-title": "Travail",
                    "achievements-title": "Réalisations",
                    "skills-title": "Compétences numériques",
                    "skills-description": "Voici un aperçu de mon expertise en développement web et de mes compétences.",
                    "resume-title": "CV",
                    "resume-name": "LAAGUILI MOHAMED",
                    "resume-description": "Développeur full-stack avec 1 an d'expérience en développement front-end et back-end en freelance.",
                    "resume-education-title": "Éducation",
                    "resume-experience-title": "Expérience",
                    "resume-certificates-title": "Certificats",
                    "resume-note-title": "Note :",
                    "resume-note-description": "J'ai arrêté de collecter des certificats en 2022. Maintenant, je me concentre plus sur l'acquisition de connaissances et de compétences que sur un papier.",
                    "services-title": "Ce que je propose ?",
                    "services-description": "Découvrez les services que je propose pour donner vie à votre projet.",
                    "portfolio-title": "Mon Portfolio",
                    "portfolio-description": "Une vitrine de mes 10 meilleurs projets",
                    "portfolio-more-button": "Plus de projets bientôt ...",
                    "testimonials-title": "Témoignages",
                    "testimonials-description": "Retours et avis de ceux avec qui j'ai travaillé."
                }
            }
        }
    }, (err, t) => {
        updateContent(); // Update the content with the initial language
    });

    // Set the dropdown's value to the saved language
    document.getElementById('languageSwitcher').value = savedLanguage;

    // Change language on dropdown change
    document.getElementById('languageSwitcher').addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;

        // Change language in i18next
        i18next.changeLanguage(selectedLanguage, () => {
            updateContent(); // Update content after changing language
            updateDirection(selectedLanguage); // Update text direction if necessary
        });

        // Save the selected language in localStorage
        localStorage.setItem('language', selectedLanguage);
    });

    // Update text content dynamically based on the selected language
    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            el.textContent = i18next.t(el.getAttribute('data-i18n'));
        });
    }

    // Update text direction for RTL (if necessary)
    function updateDirection(lang) {
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
});
