import { useState } from 'react';
import { Github, Mail, Phone, MapPin, Smartphone, Server, Globe, ExternalLink, User } from 'lucide-react';

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'en', name: 'EN' },
  { code: 'fr', name: 'FR' }
];

const translations = {
  en: {
    // Navigation
    about: 'About',
    mobileApps: 'Mobile Apps',
    backendProjects: 'Backend Projects',
    contact: 'Contact',

    // Hero section
    heroTitle: 'Mobile & Backend Developer',
    heroSubtitle: 'Passionate about creating innovative fintech solutions, super apps, and robust backend systems',
    heroDescription: 'With 5+ years of experience in mobile development with Flutter and backend development with Java/Spring Boot & Laravel, I create scalable fintech solutions and payment systems that make a difference.',

    // About section
    aboutTitle: 'About Me',
    aboutText: 'I am a young person motivated by hard work and a passion for computers and knowledge. I am also ambitious and very respectful. Apart from my academic studies and my knowledge of systems and networking, I have skills and experience in programming and software development, specializing in fintech applications, payment gateways, and scalable backend architectures.',
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects Completed',
    technologiesMastered: 'Technologies Mastered',

    // Mobile Apps
    mobileAppsTitle: 'Mobile Applications',
    mobileAppsSubtitle: 'Flutter fintech and super app solutions I\'ve developed',

    // Backend Projects
    backendTitle: 'Backend Projects',
    backendSubtitle: 'Java/Spring Boot, Laravel systems and payment solutions',

    // Technologies
    technologies: 'Technologies',
    viewOnPlayStore: 'View on Play Store',
    viewOnAppStore: 'View on App Store',
    viewProject: 'View Project',

    // Contact
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Let\'s discuss your next fintech or backend project',

    // Projects data
    projects: {
      tuinguiling: {
        name: 'Tuinguiling',
        description: 'A comprehensive fintech application designed for banking operations, offering secure money transfers, account management, and financial services with advanced security features.',
        category: 'Banking Fintech'
      },
      koree: {
        name: 'Koree',
        description: 'Super app combining fintech, payment solutions, cashback rewards, and marketplace functionality. Available on both Play Store and App Store with integrated payment systems.',
        category: 'Super App'
      },
      koreePro: {
        name: 'Koree Pro',
        description: 'Professional version of Koree with advanced merchant tools, analytics dashboard, and enhanced payment processing capabilities.',
        category: 'Business Super App'
      },
      optimiseSizeDartPackage: {
        name: 'Optimise Size Dart Package',
        description: 'The flutter_unused_assets package generates a report of unused assets in your Flutter application, allowing you to optimize your app by removing unnecessary files. This helps in reducing the app size and improving performance.',
        category: 'Optimization'
      },
      monprof: {
        name: 'MonProf',
        description: 'Educational platform for course management, teacher-student interaction, and real-time course tracking with video encryption and secure content delivery.',
        category: 'Education'
      },
      projectManagement: {
        name: 'Project Management System',
        description: 'Comprehensive project management application built with Spring Boot, featuring task management, team collaboration, and real-time updates.',
        category: 'Enterprise Software'
      },
      paymentGateway: {
        name: 'Payment Gateway',
        description: 'Secure payment gateway system built with Spring Boot, supporting multiple payment methods, transaction processing, and Stripe integration.',
        category: 'Payment Processing'
      },
      monprofApi: {
        name: 'MonProf API & Admin Panel',
        description: 'RESTful API and administration panel built with Laravel, providing comprehensive backend services for the educational platform.',
        category: 'API Development'
      },
      adaddoFirebase: {
        name: 'Adaddo Eat',
        description: 'Firebase-based backend demonstrating expertise in Realtime Database, Firestore, Authentication, and cloud functions for marketplace operations.',
        category: 'Cloud Backend'
      }
    }
  },
  fr: {
    // Navigation
    about: 'À Propos',
    mobileApps: 'Apps Mobiles',
    backendProjects: 'Projets Backend',
    contact: 'Contact',

    // Hero section
    heroTitle: 'Développeur Mobile & Backend',
    heroSubtitle: 'Passionné par la création de solutions fintech innovantes, super apps et systèmes backend robustes',
    heroDescription: 'Avec plus de 5 ans d\'expérience en développement mobile Flutter et backend Java/Spring Boot & Laravel, je crée des solutions fintech évolutives et des systèmes de paiement qui font la différence.',

    // About section
    aboutTitle: 'À Propos de Moi',
    aboutText: 'Je suis une jeune personne motivée par le travail acharné et une passion pour l\'informatique et la connaissance. Je suis aussi ambitieux et très respectueux. En dehors de mes études académiques et mes connaissances en systèmes et réseaux, j\'ai des compétences et une expérience en programmation et développement logiciel, spécialisé dans les applications fintech, passerelles de paiement et architectures backend évolutives.',
    yearsExperience: 'Années d\'Expérience',
    projectsCompleted: 'Projets Complétés',
    technologiesMastered: 'Technologies Maîtrisées',

    // Mobile Apps
    mobileAppsTitle: 'Applications Mobiles',
    mobileAppsSubtitle: 'Solutions fintech et super app Flutter que j\'ai développées',

    // Backend Projects
    backendTitle: 'Projets Backend',
    backendSubtitle: 'Systèmes Java/Spring Boot, Laravel et solutions de paiement',

    // Technologies
    technologies: 'Technologies',
    viewOnPlayStore: 'Voir sur Play Store',
    viewOnAppStore: 'Voir sur App Store',
    viewProject: 'Voir le Projet',

    // Contact
    contactTitle: 'Prenons Contact',
    contactSubtitle: 'Discutons de votre prochain projet fintech ou backend',

    // Projects data
    projects: {
      tuinguiling: {
        name: 'Tuinguiling',
        description: 'Application fintech complète conçue pour les opérations bancaires, offrant des virements sécurisés, gestion de comptes et services financiers avec fonctionnalités de sécurité avancées.',
        category: 'Fintech Bancaire'
      },
      koree: {
        name: 'Koree',
        description: 'Super app combinant fintech, solutions de paiement, récompenses cashback et fonctionnalités marketplace. Disponible sur Play Store et App Store avec systèmes de paiement intégrés.',
        category: 'Super App'
      },
      koreePro: {
        name: 'Koree Pro',
        description: 'Version professionnelle de Koree avec outils marchands avancés, tableau de bord analytique et capacités de traitement de paiement améliorées.',
        category: 'Super App Business'
      },
      monprof: {
        name: 'MonProf',
        description: 'Plateforme éducative pour gestion de cours, interaction professeur-étudiant et suivi en temps réel avec chiffrement vidéo et livraison de contenu sécurisée.',
        category: 'Éducation'
      },
      projectManagement: {
        name: 'Système de Gestion de Projets',
        description: 'Application complète de gestion de projets construite avec Spring Boot, incluant gestion des tâches, collaboration d\'équipe et mises à jour en temps réel.',
        category: 'Logiciel d\'Entreprise'
      },
      optimiseSizeDartPackage: {
        name: 'Optimisation de la Taille du Package Dart',
        description: 'Le package flutter_unused_assets génère un rapport des ressources inutilisées dans votre application Flutter, vous permettant d\'optimiser votre application en supprimant les fichiers inutiles. Cela aide à réduire la taille de l\'application et à améliorer les performances.',
        category: 'Optimisation'
      },
      paymentGateway: {
        name: 'Passerelle de Paiement',
        description: 'Système de passerelle de paiement sécurisé construit avec Spring Boot, supportant plusieurs méthodes de paiement, traitement des transactions et intégration Stripe.',
        category: 'Traitement de Paiement'
      },
      monprofApi: {
        name: 'API MonProf & Panel Admin',
        description: 'API RESTful et panneau d\'administration construits avec Laravel, fournissant des services backend complets pour la plateforme éducative.',
        category: 'Développement API'
      },
      adaddoFirebase: {
        name: 'Adaddo Eat',
        description: 'Backend basé sur Firebase démontrant l\'expertise en Realtime Database, Firestore, Authentication et fonctions cloud pour les opérations marketplace.',
        category: 'Backend Cloud'
      }
    }
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState<string>('en');
  const t = translations[currentLang as keyof typeof translations];

  const switchLanguage = (langCode: string) => {
    setCurrentLang(langCode);
  };

  const mobileApps = [
    {
      name: t.projects.tuinguiling.name,
      description: t.projects.tuinguiling.description,
      category: t.projects.tuinguiling.category,
      technologies: ['Flutter', 'Dart', 'Banking APIs', 'Security', 'Fintech'],
      icon: '🏦',
      playStore: 'https://play.google.com/store/apps/details?id=mobile.bank.app&pli=1',
      appStore: 'https://apps.apple.com/us/app/tinguling/id6748082580'
    },
    {
      name: t.projects.koree.name,
      description: t.projects.koree.description,
      category: t.projects.koree.category,
      technologies: ['Flutter', 'Dart', 'Payment APIs', "Django", "Django Rest Framework", "..."],
      icon: '🚀',
      playStore: 'https://play.google.com/store/apps/details?id=com.koree.app.koree_client&hl=fr',
      appStore: 'https://apps.apple.com/cm/app/koree-vos-achats-r%C3%A9compens%C3%A9s/id1635986454?l=en-GB'
    },
    {
      name: t.projects.koreePro.name,
      description: t.projects.koreePro.description,
      category: t.projects.koreePro.category,
      technologies: ['Flutter', 'Analytics', 'Business Tools', 'Payment Processing'],
      icon: '💼',
      playStore: '#'
    },
    {
      name: t.projects.monprof.name,
      description: t.projects.monprof.description,
      category: t.projects.monprof.category,
      technologies: ['Flutter', 'Video Encryption', 'Real-time', 'Education'],
      icon: '🎓',
      playStore: 'https://play.google.com/store/apps/details?id=mutrix_tech.monprof.app'
    }
  ];

  const backendProjects = [

    {
      name: t.projects.optimiseSizeDartPackage.name,
      description: t.projects.optimiseSizeDartPackage.description,
      category: t.projects.optimiseSizeDartPackage.category,
      technologies: ['Dart'],
      github: 'https://github.com/engel-rich/flutter_unused_assets'
    },
    {
      name: t.projects.projectManagement.name,
      description: t.projects.projectManagement.description,
      category: t.projects.projectManagement.category,
      technologies: ['Spring Boot', 'Java', 'MySQL', 'REST API', 'Microservices'],
      // github: 'https://github.com/engel-rich'
    },
    {
      name: t.projects.paymentGateway.name,
      description: t.projects.paymentGateway.description,
      category: t.projects.paymentGateway.category,
      technologies: ['Spring Boot', 'Stripe', 'Payment Processing', 'Security'],
      // github: 'https://github.com/engel-rich'
    },
    {
      name: t.projects.monprofApi.name,
      description: t.projects.monprofApi.description,
      category: t.projects.monprofApi.category,
      technologies: ['Laravel', 'PHP', 'REST API', 'Admin Panel', 'MySQL'],
      // github: 'https://github.com/engel-rich'
    },
    {
      name: t.projects.adaddoFirebase.name,
      description: t.projects.adaddoFirebase.description,
      category: t.projects.adaddoFirebase.category,
      technologies: ['Firebase Realtime Database', 'Firestore', 'Dart & Flutter', 'Firebase Auth', 'Cloud Functions', "Firebase Storage", "Stripe"],
      // github: 'https://github.com/engel-rich'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-400">
              Engelbert Mbarga Tsinda
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">{t.about}</a>
              <a href="#mobile-apps" className="hover:text-blue-400 transition-colors">{t.mobileApps}</a>
              <a href="#backend" className="hover:text-blue-400 transition-colors">{t.backendProjects}</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">{t.contact}</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-800 rounded-lg p-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-all ${currentLang === lang.code
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Engelbert Mbarga Tsinda
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                {t.heroTitle}
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                {t.heroSubtitle}
              </p>
              <p className="text-lg text-gray-500 max-w-4xl mx-auto mb-12">
                {t.heroDescription}
              </p>

              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/engel-rich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-lg font-medium transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
              <User className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.aboutTitle}</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.aboutText}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-gray-400">{t.yearsExperience}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">15+</div>
              <div className="text-gray-400">{t.projectsCompleted}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-400">{t.technologiesMastered}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section id="mobile-apps" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-lg mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.mobileAppsTitle}</h2>
            <p className="text-xl text-gray-400">{t.mobileAppsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileApps.map((app, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{app.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{app.name}</h3>
                      <span className="text-sm text-emerald-400">{app.category}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{app.description}</p>

                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">{t.technologies}:</div>
                  <div className="flex flex-wrap gap-2">
                    {app.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  {app.playStore && (
                    <a
                      href={app.playStore}
                      className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      {t.viewOnPlayStore}
                    </a>
                  )}
                  {app.appStore && (
                    <a
                      href={app.appStore}
                      className="inline-flex items-center px-4 py-2 border border-gray-600 hover:border-gray-500 rounded-lg text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.viewOnAppStore}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Projects Section */}
      <section id="backend" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
              <Server className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.backendTitle}</h2>
            <p className="text-xl text-gray-400">{t.backendSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {backendProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors group">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <span className="text-sm text-purple-400">{project.category}</span>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">{t.technologies}:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t.viewProject}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.contactTitle}</h2>
            <p className="text-xl text-gray-400">{t.contactSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+237 693 231 569 / +237 673 132 228</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-600/20 rounded-lg mb-4">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">engelbertrichelieutsinda@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mb-4">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Douala VI, Cameroon</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-600/20 rounded-lg mb-4">
                <Github className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/engel-rich"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                @engel-rich
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Engelbert Mbarga Tsinda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;