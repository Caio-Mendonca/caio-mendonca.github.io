'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'pt' | 'en' | 'fr' | 'es' | 'it'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.cta': 'Comece seu projeto',
    
    // Hero Section
    'hero.badge': 'Disponível para oportunidades',
    'hero.title': 'Software Engineer',
    'hero.subtitle': '& AI Engineer',
    'hero.description': 'Construindo soluções escaláveis com Python, React & Node.js',
    'hero.bio': 'Engenheiro de Software com mais de 4 anos de experiência, focado na construção de microsserviços escaláveis, soluções backend e frontend. Baseado em Dublin, Irlanda.',
    'hero.cta.primary': 'Vamos trabalhar juntos',
    'hero.cta.secondary': 'Download CV',
    'hero.connect': 'Conecte-se:',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.description': 'Sou um desenvolvedor apaixonado por tecnologia com expertise em Python, React e Node.js. Tenho experiência sólida em arquitetura de microsserviços, desenvolvimento de APIs RESTful e GraphQL, integração de sistemas e implementação de práticas DevOps.',
    'about.description2': 'Trabalho diariamente com ferramentas como RabbitMQ, Redis, AWS SQS para comunicação assíncrona, e Docker/Kubernetes para orquestração de containers. Baseado em Dublin, Irlanda, estou sempre em busca de novos desafios que me permitam aplicar minha paixão por tecnologia.',
    'about.skills.title': 'Expertise Técnica',
    'about.skills.backend': 'Backend',
    'about.skills.frontend': 'Frontend',
    'about.skills.database': 'Database',
    'about.skills.devops': 'DevOps',
    
    // Experience Section
    'experience.title': 'Experiência Profissional',
    
    // TrustPanel Experience
    'experience.trustpanel.title': 'Software Engineer',
    'experience.trustpanel.company': 'TrustPanel',
    'experience.trustpanel.location': 'Dublin, Irlanda',
    'experience.trustpanel.period': '06/2025 - Presente',
    'experience.trustpanel.desc1': 'Desenvolvo plataforma de gestão de certificados digitais com controle de permissões, rastreamento de expiração e monitoramento de acesso',
    'experience.trustpanel.desc2': 'Construo APIs seguras e sustentáveis usando Python e Django Rest integradas com PostgreSQL',
    'experience.trustpanel.desc3': 'Desenvolvo interfaces responsivas e performáticas com React e Vite',
    'experience.trustpanel.desc4': 'Implemento testes unitários e de integração para garantir confiabilidade do sistema',
    'experience.trustpanel.desc5': 'Participo ativamente de decisões técnicas, code reviews, processos de CI e metodologias ágeis',
    'experience.trustpanel.desc6': 'Colaboro com equipes de produto e design para alinhar entregas com necessidades dos usuários',
    
    // JMD Experience
    'experience.jmd.title': 'Software Engineer',
    'experience.jmd.company': 'JMD Urbanism',
    'experience.jmd.location': 'Sinop, BR',
    'experience.jmd.period': '10/2022 - 06/2025',
    'experience.jmd.desc1': 'Coordenei o squad de tecnologia, conduzi levantamento de requisitos técnicos e gerenciei backlog',
    'experience.jmd.desc2': 'Desenvolvi sistema de precificação imobiliária que reduziu o processo de 15 dias para 4 horas',
    'experience.jmd.desc3': 'Construí app de delivery para restaurante de condomínio privado',
    'experience.jmd.desc4': 'Implementei integrações entre sistema ERP e CRM usando microsserviços',
    
    // DevForBusiness Experience
    'experience.devforbusiness.title': 'Software Engineer',
    'experience.devforbusiness.company': 'DevForBusiness',
    'experience.devforbusiness.location': 'Remoto',
    'experience.devforbusiness.period': '03/2022 - 06/2022',
    'experience.devforbusiness.desc1': 'Desenvolvi sistema de gestão de qualidade para condomínios residenciais',
    'experience.devforbusiness.desc2': 'Construí interfaces mobile e frontend eficientes com foco na experiência do usuário',
    'experience.devforbusiness.desc3': 'Contribuí para automação de processos administrativos, melhorando workflows operacionais',
    'experience.devforbusiness.desc4': 'Criei aplicativo mobile completo com checklists de tarefas para profissionais de campo',
    
    // Coplan Experience
    'experience.coplan.title': 'Software Developer',
    'experience.coplan.company': 'Coplan',
    'experience.coplan.location': 'Cuiabá, BR',
    'experience.coplan.period': '05/2022 - 10/2022',
    'experience.coplan.desc1': 'Participei ativamente de projeto em parceria com a prefeitura de Salvador',
    'experience.coplan.desc2': 'Trabalhei no desenvolvimento front-end e back-end usando plataforma Genexus',
    'experience.coplan.desc3': 'Contribuí para gerenciamento de banco de dados e criação de interfaces baseadas em wireframes',
    'experience.coplan.desc4': 'Implementei regras de negócio para sistema de gestão e cobrança tributária',
    
    // NightApp Experience
    'experience.nightapp.title': 'Software Engineer',
    'experience.nightapp.company': 'NightApp',
    'experience.nightapp.location': 'Sinop, BR',
    'experience.nightapp.period': '01/2021 - 05/2022',
    'experience.nightapp.desc1': 'Trabalhei no desenvolvimento e manutenção do sistema web Night Business',
    'experience.nightapp.desc2': 'Responsável por implementar novas funcionalidades e melhorar usabilidade',
    'experience.nightapp.desc3': 'Criei site principal, aprimorando usabilidade e funcionalidade',
    'experience.nightapp.desc4': 'Otimizei gestão de negócios noturnos através de soluções web',
    
    // Projects Section
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Projetos recentes demonstrando minha expertise na construção de soluções escaláveis e de nível empresarial',
    'projects.viewDetails': 'Ver Detalhes Completos',
    'projects.moreInfo': 'Cada projeto representa soluções reais implementadas com foco em escalabilidade e performance',
    'projects.modal.technologies': 'Tecnologias Utilizadas',
    'projects.modal.results': 'Resultados Alcançados',
    'projects.modal.challenges': 'Principais Desafios',
    'projects.modal.keyFeatures': 'Características Principais',
    'projects.modal.keyFeaturesDefault': 'Solução completa desenvolvida com foco em performance, segurança e experiência do usuário.',
    'projects.modal.status': 'Status',
    'projects.modal.completed': 'Concluído',
    'projects.modal.type': 'Tipo',
    
    // Contact Section
    'contact.title': 'Vamos Trabalhar Juntos',
    'contact.subtitle': 'Estou sempre interessado em novos desafios e oportunidades. Entre em contato para discutirmos seu próximo projeto.',
    'contact.getInTouch': 'Entre em Contato',
    'contact.linkedin.title': 'Vamos Conversar no LinkedIn',
    'contact.linkedin.description': 'A melhor forma de entrar em contato comigo é através do LinkedIn. Clique no botão abaixo para enviar uma mensagem direta.',
    'contact.linkedin.button': 'Enviar Mensagem no LinkedIn',
    
    // Footer
    'footer.description': 'Software Engineer & AI Engineer construindo soluções escaláveis com Python, React & Node.js',
    'footer.connect': 'Conecte-se:',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.built': 'Construído com Next.js & Material-UI',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': 'Start your project',
    
    // Hero Section
    'hero.badge': 'Available for opportunities',
    'hero.title': 'Software Engineer',
    'hero.subtitle': '& AI Engineer',
    'hero.description': 'Building scalable solutions with Python, React & Node.js',
    'hero.bio': 'Software Engineer with over 4+ years of experience, focused on building scalable microservices, backend and frontend solutions. Based in Dublin, Ireland.',
    'hero.cta.primary': 'Let\'s work together',
    'hero.cta.secondary': 'Download CV',
    'hero.connect': 'Connect:',
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'I am a technology-passionate developer with expertise in Python, React, and Node.js. I have solid experience in microservices architecture, RESTful and GraphQL API development, systems integration, and DevOps practices implementation.',
    'about.description2': 'I work daily with tools like RabbitMQ, Redis, AWS SQS for asynchronous communication, and Docker/Kubernetes for container orchestration. Based in Dublin, Ireland, I\'m always looking for new challenges that allow me to apply my passion for technology.',
    'about.skills.title': 'Technical Expertise',
    'about.skills.backend': 'Backend',
    'about.skills.frontend': 'Frontend',
    'about.skills.database': 'Database',
    'about.skills.devops': 'DevOps',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    
    // TrustPanel Experience
    'experience.trustpanel.title': 'Software Engineer',
    'experience.trustpanel.company': 'TrustPanel',
    'experience.trustpanel.location': 'Dublin, Ireland',
    'experience.trustpanel.period': '06/2025 - Present',
    'experience.trustpanel.desc1': 'Develop digital certificate management platform with permission control, expiration tracking and access monitoring',
    'experience.trustpanel.desc2': 'Build secure and sustainable APIs using Python and Django Rest integrated with PostgreSQL',
    'experience.trustpanel.desc3': 'Develop responsive and performant interfaces with React and Vite',
    'experience.trustpanel.desc4': 'Implement unit and integration tests to ensure system reliability',
    'experience.trustpanel.desc5': 'Actively participate in technical decisions, code reviews, CI processes and agile methodologies',
    'experience.trustpanel.desc6': 'Collaborate with product and design teams to align deliveries with user needs',
    
    // JMD Experience
    'experience.jmd.title': 'Software Engineer',
    'experience.jmd.company': 'JMD Urbanism',
    'experience.jmd.location': 'Sinop, BR',
    'experience.jmd.period': '10/2022 - 06/2025',
    'experience.jmd.desc1': 'Coordinated technology squad, conducted technical requirements gathering and managed backlog',
    'experience.jmd.desc2': 'Developed real estate pricing system that reduced process from 15 days to 4 hours',
    'experience.jmd.desc3': 'Built delivery app for private condominium restaurant',
    'experience.jmd.desc4': 'Implemented integrations between ERP and CRM systems using microservices',
    
    // DevForBusiness Experience
    'experience.devforbusiness.title': 'Software Engineer',
    'experience.devforbusiness.company': 'DevForBusiness',
    'experience.devforbusiness.location': 'Remote',
    'experience.devforbusiness.period': '03/2022 - 06/2022',
    'experience.devforbusiness.desc1': 'Developed quality management system for residential condominiums',
    'experience.devforbusiness.desc2': 'Built efficient mobile and frontend interfaces focused on user experience',
    'experience.devforbusiness.desc3': 'Contributed to administrative process automation, improving operational workflows',
    'experience.devforbusiness.desc4': 'Created complete mobile application with task checklists for field professionals',
    
    // Coplan Experience
    'experience.coplan.title': 'Software Developer',
    'experience.coplan.company': 'Coplan',
    'experience.coplan.location': 'Cuiabá, BR',
    'experience.coplan.period': '05/2022 - 10/2022',
    'experience.coplan.desc1': 'Actively participated in partnership project with Salvador city hall',
    'experience.coplan.desc2': 'Worked on front-end and back-end development using Genexus platform',
    'experience.coplan.desc3': 'Contributed to database management and interface creation based on wireframes',
    'experience.coplan.desc4': 'Implemented business rules for tax management and collection system',
    
    // NightApp Experience
    'experience.nightapp.title': 'Software Engineer',
    'experience.nightapp.company': 'NightApp',
    'experience.nightapp.location': 'Sinop, BR',
    'experience.nightapp.period': '01/2021 - 05/2022',
    'experience.nightapp.desc1': 'Worked on development and maintenance of Night Business web system',
    'experience.nightapp.desc2': 'Responsible for implementing new features and improving usability',
    'experience.nightapp.desc3': 'Created main website, enhancing usability and functionality',
    'experience.nightapp.desc4': 'Optimized nightlife business management through web solutions',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Recent projects showcasing my expertise in building scalable, enterprise-grade solutions',
    'projects.viewDetails': 'View Complete Details',
    'projects.moreInfo': 'Each project represents real-world solutions implemented with focus on scalability and performance',
    'projects.modal.technologies': 'Technologies Used',
    'projects.modal.results': 'Results Achieved',
    'projects.modal.challenges': 'Main Challenges',
    'projects.modal.keyFeatures': 'Key Features',
    'projects.modal.keyFeaturesDefault': 'Complete solution developed with focus on performance, security and user experience.',
    'projects.modal.status': 'Status',
    'projects.modal.completed': 'Completed',
    'projects.modal.type': 'Type',
    
    // Contact Section
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'I\'m always interested in new challenges and opportunities. Get in touch to discuss your next project.',
    'contact.getInTouch': 'Get in Touch',
    'contact.linkedin.title': 'Let\'s Connect on LinkedIn',
    'contact.linkedin.description': 'The best way to reach me is through LinkedIn. Click the button below to send me a direct message.',
    'contact.linkedin.button': 'Send LinkedIn Message',
    
    // Footer
    'footer.description': 'Software Engineer & AI Engineer building scalable solutions with Python, React & Node.js',
    'footer.connect': 'Connect:',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Next.js & Material-UI',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.cta': 'Commencez votre projet',
    
    // Hero Section
    'hero.badge': 'Disponible pour opportunités',
    'hero.title': 'Ingénieur Logiciel',
    'hero.subtitle': '& Ingénieur IA',
    'hero.description': 'Construire des solutions évolutives avec Python, React et Node.js',
    'hero.bio': 'Ingénieur logiciel avec plus de 4 ans d\'expérience, axé sur la construction de microservices évolutifs, solutions backend et frontend. Basé à Dublin, Irlande.',
    'hero.cta.primary': 'Travaillons ensemble',
    'hero.cta.secondary': 'Télécharger CV',
    'hero.connect': 'Connectez-vous:',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.description': 'Je suis un développeur passionné de technologie avec une expertise en Python, React et Node.js. J\'ai une expérience solide en architecture de microservices, développement d\'API RESTful et GraphQL, intégration de systèmes et implémentation de pratiques DevOps.',
    'about.description2': 'Je travaille quotidiennement avec des outils comme RabbitMQ, Redis, AWS SQS pour la communication asynchrone, et Docker/Kubernetes pour l\'orchestration de conteneurs. Basé à Dublin, Irlande, je recherche toujours de nouveaux défis qui me permettent d\'appliquer ma passion pour la technologie.',
    'about.skills.title': 'Expertise Technique',
    'about.skills.backend': 'Backend',
    'about.skills.frontend': 'Frontend',
    'about.skills.database': 'Base de données',
    'about.skills.devops': 'DevOps',
    
    // Experience Section
    'experience.title': 'Expérience Professionnelle',
    
    // TrustPanel Experience
    'experience.trustpanel.title': 'Ingénieur Logiciel',
    'experience.trustpanel.company': 'TrustPanel',
    'experience.trustpanel.location': 'Dublin, Irlande',
    'experience.trustpanel.period': '06/2025 - Présent',
    'experience.trustpanel.desc1': 'Développe une plateforme de gestion de certificats numériques avec contrôle des permissions, suivi d\'expiration et surveillance d\'accès',
    'experience.trustpanel.desc2': 'Construis des APIs sécurisées et durables utilisant Python et Django Rest intégrées avec PostgreSQL',
    'experience.trustpanel.desc3': 'Développe des interfaces responsives et performantes avec React et Vite',
    'experience.trustpanel.desc4': 'Implémente des tests unitaires et d\'intégration pour assurer la fiabilité du système',
    'experience.trustpanel.desc5': 'Participe activement aux décisions techniques, revues de code, processus CI et méthodologies agiles',
    'experience.trustpanel.desc6': 'Collabore avec les équipes produit et design pour aligner les livraisons avec les besoins des utilisateurs',
    
    // JMD Experience
    'experience.jmd.title': 'Ingénieur Logiciel',
    'experience.jmd.company': 'JMD Urbanism',
    'experience.jmd.location': 'Sinop, BR',
    'experience.jmd.period': '10/2022 - 06/2025',
    'experience.jmd.desc1': 'Coordonné l\'équipe technologique, mené la collecte d\'exigences techniques et géré le backlog',
    'experience.jmd.desc2': 'Développé un système de tarification immobilière qui a réduit le processus de 15 jours à 4 heures',
    'experience.jmd.desc3': 'Construit une app de livraison pour restaurant de copropriété privée',
    'experience.jmd.desc4': 'Implémenté des intégrations entre systèmes ERP et CRM utilisant des microservices',
    
    // DevForBusiness Experience
    'experience.devforbusiness.title': 'Ingénieur Logiciel',
    'experience.devforbusiness.company': 'DevForBusiness',
    'experience.devforbusiness.location': 'À distance',
    'experience.devforbusiness.period': '03/2022 - 06/2022',
    'experience.devforbusiness.desc1': 'Développé un système de gestion de qualité pour copropriétés résidentielles',
    'experience.devforbusiness.desc2': 'Construit des interfaces mobiles et frontend efficaces axées sur l\'expérience utilisateur',
    'experience.devforbusiness.desc3': 'Contribué à l\'automatisation des processus administratifs, améliorant les workflows opérationnels',
    'experience.devforbusiness.desc4': 'Créé une application mobile complète avec des listes de tâches pour les professionnels de terrain',
    
    // Coplan Experience
    'experience.coplan.title': 'Développeur Logiciel',
    'experience.coplan.company': 'Coplan',
    'experience.coplan.location': 'Cuiabá, BR',
    'experience.coplan.period': '05/2022 - 10/2022',
    'experience.coplan.desc1': 'Participé activement au projet en partenariat avec la mairie de Salvador',
    'experience.coplan.desc2': 'Travaillé sur le développement front-end et back-end utilisant la plateforme Genexus',
    'experience.coplan.desc3': 'Contribué à la gestion de base de données et création d\'interfaces basées sur des wireframes',
    'experience.coplan.desc4': 'Implémenté des règles métier pour système de gestion et perception fiscale',
    
    // NightApp Experience
    'experience.nightapp.title': 'Ingénieur Logiciel',
    'experience.nightapp.company': 'NightApp',
    'experience.nightapp.location': 'Sinop, BR',
    'experience.nightapp.period': '01/2021 - 05/2022',
    'experience.nightapp.desc1': 'Travaillé sur le développement et la maintenance du système web Night Business',
    'experience.nightapp.desc2': 'Responsable de l\'implémentation de nouvelles fonctionnalités et amélioration de l\'utilisabilité',
    'experience.nightapp.desc3': 'Créé le site principal, améliorant l\'utilisabilité et la fonctionnalité',
    'experience.nightapp.desc4': 'Optimisé la gestion des entreprises nocturnes grâce à des solutions web',
    
    // Projects Section
    'projects.title': 'Projets en Vedette',
    'projects.subtitle': 'Projets récents démontrant mon expertise dans la construction de solutions évolutives de niveau entreprise',
    'projects.viewDetails': 'Voir les Détails Complets',
    'projects.moreInfo': 'Chaque projet représente des solutions réelles implémentées avec un focus sur l\'évolutivité et la performance',
    'projects.modal.technologies': 'Technologies Utilisées',
    'projects.modal.results': 'Résultats Obtenus',
    'projects.modal.challenges': 'Principaux Défis',
    'projects.modal.keyFeatures': 'Caractéristiques Principales',
    'projects.modal.keyFeaturesDefault': 'Solution complète développée avec un focus sur la performance, la sécurité et l\'expérience utilisateur.',
    'projects.modal.status': 'Statut',
    'projects.modal.completed': 'Terminé',
    'projects.modal.type': 'Type',
    
    // Contact Section
    'contact.title': 'Travaillons Ensemble',
    'contact.subtitle': 'Je suis toujours intéressé par de nouveaux défis et opportunités. Contactez-moi pour discuter de votre prochain projet.',
    'contact.getInTouch': 'Entrer en Contact',
    'contact.linkedin.title': 'Connectons-nous sur LinkedIn',
    'contact.linkedin.description': 'La meilleure façon de me contacter est via LinkedIn. Cliquez sur le bouton ci-dessous pour m\'envoyer un message direct.',
    'contact.linkedin.button': 'Envoyer un Message LinkedIn',
    
    // Footer
    'footer.description': 'Ingénieur Logiciel & Ingénieur IA construisant des solutions évolutives avec Python, React et Node.js',
    'footer.connect': 'Connectez-vous:',
    'footer.rights': 'Tous droits réservés.',
    'footer.built': 'Construit avec Next.js & Material-UI',
  },
  
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.cta': 'Comienza tu proyecto',
    
    // Hero Section
    'hero.badge': 'Disponible para oportunidades',
    'hero.title': 'Ingeniero de Software',
    'hero.subtitle': '& Ingeniero de IA',
    'hero.description': 'Construyendo soluciones escalables con Python, React y Node.js',
    'hero.bio': 'Ingeniero de Software con más de 4 años de experiencia, enfocado en construir microservicios escalables, soluciones backend y frontend. Basado en Dublín, Irlanda.',
    'hero.cta.primary': 'Trabajemos juntos',
    'hero.cta.secondary': 'Descargar CV',
    'hero.connect': 'Conectar:',
    
    // About Section
    'about.title': 'Acerca de Mí',
    'about.description': 'Soy un desarrollador apasionado por la tecnología con experiencia en Python, React y Node.js. Tengo experiencia sólida en arquitectura de microservicios, desarrollo de APIs RESTful y GraphQL, integración de sistemas e implementación de prácticas DevOps.',
    'about.description2': 'Trabajo diariamente con herramientas como RabbitMQ, Redis, AWS SQS para comunicación asíncrona, y Docker/Kubernetes para orquestación de contenedores. Basado en Dublín, Irlanda, siempre busco nuevos desafíos que me permitan aplicar mi pasión por la tecnología.',
    'about.skills.title': 'Experiencia Técnica',
    'about.skills.backend': 'Backend',
    'about.skills.frontend': 'Frontend',
    'about.skills.database': 'Base de datos',
    'about.skills.devops': 'DevOps',
    
    // Experience Section
    'experience.title': 'Experiencia Profesional',
    
    // TrustPanel Experience
    'experience.trustpanel.title': 'Ingeniero de Software',
    'experience.trustpanel.company': 'TrustPanel',
    'experience.trustpanel.location': 'Dublín, Irlanda',
    'experience.trustpanel.period': '06/2025 - Presente',
    'experience.trustpanel.desc1': 'Desarrollo plataforma de gestión de certificados digitales con control de permisos, seguimiento de expiración y monitoreo de acceso',
    'experience.trustpanel.desc2': 'Construyo APIs seguras y sostenibles usando Python y Django Rest integradas con PostgreSQL',
    'experience.trustpanel.desc3': 'Desarrollo interfaces responsivas y performantes con React y Vite',
    'experience.trustpanel.desc4': 'Implemento pruebas unitarias y de integración para garantizar confiabilidad del sistema',
    'experience.trustpanel.desc5': 'Participo activamente en decisiones técnicas, revisiones de código, procesos CI y metodologías ágiles',
    'experience.trustpanel.desc6': 'Colaboro con equipos de producto y diseño para alinear entregas con necesidades de usuarios',
    
    // JMD Experience
    'experience.jmd.title': 'Ingeniero de Software',
    'experience.jmd.company': 'JMD Urbanism',
    'experience.jmd.location': 'Sinop, BR',
    'experience.jmd.period': '10/2022 - 06/2025',
    'experience.jmd.desc1': 'Coordiné el equipo de tecnología, conduje levantamiento de requisitos técnicos y gestioné backlog',
    'experience.jmd.desc2': 'Desarrollé sistema de precios inmobiliarios que redujo el proceso de 15 días a 4 horas',
    'experience.jmd.desc3': 'Construí app de delivery para restaurante de condominio privado',
    'experience.jmd.desc4': 'Implementé integraciones entre sistemas ERP y CRM usando microservicios',
    
    // DevForBusiness Experience
    'experience.devforbusiness.title': 'Ingeniero de Software',
    'experience.devforbusiness.company': 'DevForBusiness',
    'experience.devforbusiness.location': 'Remoto',
    'experience.devforbusiness.period': '03/2022 - 06/2022',
    'experience.devforbusiness.desc1': 'Desarrollé sistema de gestión de calidad para condominios residenciales',
    'experience.devforbusiness.desc2': 'Construí interfaces móviles y frontend eficientes enfocadas en experiencia del usuario',
    'experience.devforbusiness.desc3': 'Contribuí a automatización de procesos administrativos, mejorando workflows operacionales',
    'experience.devforbusiness.desc4': 'Creé aplicación móvil completa con listas de tareas para profesionales de campo',
    
    // Coplan Experience
    'experience.coplan.title': 'Desarrollador de Software',
    'experience.coplan.company': 'Coplan',
    'experience.coplan.location': 'Cuiabá, BR',
    'experience.coplan.period': '05/2022 - 10/2022',
    'experience.coplan.desc1': 'Participé activamente en proyecto en asociación con la alcaldía de Salvador',
    'experience.coplan.desc2': 'Trabajé en desarrollo front-end y back-end usando plataforma Genexus',
    'experience.coplan.desc3': 'Contribuí a gestión de base de datos y creación de interfaces basadas en wireframes',
    'experience.coplan.desc4': 'Implementé reglas de negocio para sistema de gestión y cobranza tributaria',
    
    // NightApp Experience
    'experience.nightapp.title': 'Ingeniero de Software',
    'experience.nightapp.company': 'NightApp',
    'experience.nightapp.location': 'Sinop, BR',
    'experience.nightapp.period': '01/2021 - 05/2022',
    'experience.nightapp.desc1': 'Trabajé en desarrollo y mantenimiento del sistema web Night Business',
    'experience.nightapp.desc2': 'Responsable de implementar nuevas funcionalidades y mejorar usabilidad',
    'experience.nightapp.desc3': 'Creé sitio principal, mejorando usabilidad y funcionalidad',
    'experience.nightapp.desc4': 'Optimicé gestión de negocios nocturnos a través de soluciones web',
    
    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Proyectos recientes que demuestran mi experiencia en la construcción de soluciones escalables de nivel empresarial',
    'projects.viewDetails': 'Ver Detalles Completos',
    'projects.moreInfo': 'Cada proyecto representa soluciones reales implementadas con enfoque en escalabilidad y rendimiento',
    'projects.modal.technologies': 'Tecnologías Utilizadas',
    'projects.modal.results': 'Resultados Logrados',
    'projects.modal.challenges': 'Principales Desafíos',
    'projects.modal.keyFeatures': 'Características Principales',
    'projects.modal.keyFeaturesDefault': 'Solución completa desarrollada con enfoque en rendimiento, seguridad y experiencia del usuario.',
    'projects.modal.status': 'Estado',
    'projects.modal.completed': 'Completado',
    'projects.modal.type': 'Tipo',
    
    // Contact Section
    'contact.title': 'Trabajemos Juntos',
    'contact.subtitle': 'Siempre estoy interesado en nuevos desafíos y oportunidades. Ponte en contacto para discutir tu próximo proyecto.',
    'contact.getInTouch': 'Ponerse en Contacto',
    'contact.linkedin.title': 'Conectemos en LinkedIn',
    'contact.linkedin.description': 'La mejor manera de contactarme es a través de LinkedIn. Haz clic en el botón de abajo para enviarme un mensaje directo.',
    'contact.linkedin.button': 'Enviar Mensaje en LinkedIn',
    
    // Footer
    'footer.description': 'Ingeniero de Software & Ingeniero de IA construyendo soluciones escalables con Python, React y Node.js',
    'footer.connect': 'Conectar:',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Construido con Next.js & Material-UI',
  },
  
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Chi Sono',
    'nav.experience': 'Esperienza',
    'nav.projects': 'Progetti',
    'nav.contact': 'Contatto',
    'nav.cta': 'Inizia il tuo progetto',
    
    // Hero Section
    'hero.badge': 'Disponibile per opportunità',
    'hero.title': 'Ingegnere Software',
    'hero.subtitle': '& Ingegnere IA',
    'hero.description': 'Costruendo soluzioni scalabili con Python, React e Node.js',
    'hero.bio': 'Ingegnere Software con oltre 4 anni di esperienza, focalizzato sulla costruzione di microservizi scalabili, soluzioni backend e frontend. Con base a Dublino, Irlanda.',
    'hero.cta.primary': 'Lavoriamo insieme',
    'hero.cta.secondary': 'Scarica CV',
    'hero.connect': 'Connettiti:',
    
    // About Section
    'about.title': 'Chi Sono',
    'about.description': 'Sono uno sviluppatore appassionato di tecnologia con competenze in Python, React e Node.js. Ho esperienza solida in architettura di microservizi, sviluppo di API RESTful e GraphQL, integrazione di sistemi e implementazione di pratiche DevOps.',
    'about.description2': 'Lavoro quotidianamente con strumenti come RabbitMQ, Redis, AWS SQS per comunicazione asincrona, e Docker/Kubernetes per orchestrazione di container. Con base a Dublino, Irlanda, cerco sempre nuove sfide che mi permettano di applicare la mia passione per la tecnologia.',
    'about.skills.title': 'Competenza Tecnica',
    'about.skills.backend': 'Backend',
    'about.skills.frontend': 'Frontend',
    'about.skills.database': 'Database',
    'about.skills.devops': 'DevOps',
    
    // Experience Section
    'experience.title': 'Esperienza Professionale',
    
    // TrustPanel Experience
    'experience.trustpanel.title': 'Ingegnere Software',
    'experience.trustpanel.company': 'TrustPanel',
    'experience.trustpanel.location': 'Dublino, Irlanda',
    'experience.trustpanel.period': '06/2025 - Presente',
    'experience.trustpanel.desc1': 'Sviluppo piattaforma di gestione certificati digitali con controllo permessi, tracciamento scadenze e monitoraggio accessi',
    'experience.trustpanel.desc2': 'Costruisco API sicure e sostenibili usando Python e Django Rest integrate con PostgreSQL',
    'experience.trustpanel.desc3': 'Sviluppo interfacce responsive e performanti con React e Vite',
    'experience.trustpanel.desc4': 'Implemento test unitari e di integrazione per garantire affidabilità del sistema',
    'experience.trustpanel.desc5': 'Partecipo attivamente a decisioni tecniche, code review, processi CI e metodologie agili',
    'experience.trustpanel.desc6': 'Collaboro con team di prodotto e design per allineare consegne con esigenze utenti',
    
    // JMD Experience
    'experience.jmd.title': 'Ingegnere Software',
    'experience.jmd.company': 'JMD Urbanism',
    'experience.jmd.location': 'Sinop, BR',
    'experience.jmd.period': '10/2022 - 06/2025',
    'experience.jmd.desc1': 'Coordinato squad tecnologico, condotto raccolta requisiti tecnici e gestito backlog',
    'experience.jmd.desc2': 'Sviluppato sistema prezzi immobiliari che ha ridotto processo da 15 giorni a 4 ore',
    'experience.jmd.desc3': 'Costruito app delivery per ristorante di condominio privato',
    'experience.jmd.desc4': 'Implementato integrazioni tra sistemi ERP e CRM usando microservizi',
    
    // DevForBusiness Experience
    'experience.devforbusiness.title': 'Ingegnere Software',
    'experience.devforbusiness.company': 'DevForBusiness',
    'experience.devforbusiness.location': 'Remoto',
    'experience.devforbusiness.period': '03/2022 - 06/2022',
    'experience.devforbusiness.desc1': 'Sviluppato sistema gestione qualità per condomini residenziali',
    'experience.devforbusiness.desc2': 'Costruito interfacce mobile e frontend efficienti focalizzate su esperienza utente',
    'experience.devforbusiness.desc3': 'Contribuito ad automazione processi amministrativi, migliorando workflow operativi',
    'experience.devforbusiness.desc4': 'Creato applicazione mobile completa con checklist attività per professionisti sul campo',
    
    // Coplan Experience
    'experience.coplan.title': 'Sviluppatore Software',
    'experience.coplan.company': 'Coplan',
    'experience.coplan.location': 'Cuiabá, BR',
    'experience.coplan.period': '05/2022 - 10/2022',
    'experience.coplan.desc1': 'Partecipato attivamente a progetto in partnership con comune di Salvador',
    'experience.coplan.desc2': 'Lavorato su sviluppo front-end e back-end usando piattaforma Genexus',
    'experience.coplan.desc3': 'Contribuito a gestione database e creazione interfacce basate su wireframe',
    'experience.coplan.desc4': 'Implementato regole business per sistema gestione e riscossione tributaria',
    
    // NightApp Experience
    'experience.nightapp.title': 'Ingegnere Software',
    'experience.nightapp.company': 'NightApp',
    'experience.nightapp.location': 'Sinop, BR',
    'experience.nightapp.period': '01/2021 - 05/2022',
    'experience.nightapp.desc1': 'Lavorato su sviluppo e manutenzione sistema web Night Business',
    'experience.nightapp.desc2': 'Responsabile implementazione nuove funzionalità e miglioramento usabilità',
    'experience.nightapp.desc3': 'Creato sito principale, migliorando usabilità e funzionalità',
    'experience.nightapp.desc4': 'Ottimizzato gestione attività notturne attraverso soluzioni web',
    
    // Projects Section
    'projects.title': 'Progetti in Evidenza',
    'projects.subtitle': 'Progetti recenti che dimostrano la mia competenza nella costruzione di soluzioni scalabili di livello aziendale',
    'projects.viewDetails': 'Vedi Dettagli Completi',
    'projects.moreInfo': 'Ogni progetto rappresenta soluzioni reali implementate con focus su scalabilità e performance',
    'projects.modal.technologies': 'Tecnologie Utilizzate',
    'projects.modal.results': 'Risultati Raggiunti',
    'projects.modal.challenges': 'Sfide Principali',
    'projects.modal.keyFeatures': 'Caratteristiche Principali',
    'projects.modal.keyFeaturesDefault': 'Soluzione completa sviluppata con focus su performance, sicurezza ed esperienza utente.',
    'projects.modal.status': 'Stato',
    'projects.modal.completed': 'Completato',
    'projects.modal.type': 'Tipo',
    
    // Contact Section
    'contact.title': 'Lavoriamo Insieme',
    'contact.subtitle': 'Sono sempre interessato a nuove sfide e opportunità. Contattami per discutere il tuo prossimo progetto.',
    'contact.getInTouch': 'Mettersi in Contatto',
    'contact.linkedin.title': 'Connettiamoci su LinkedIn',
    'contact.linkedin.description': 'Il modo migliore per contattarmi è tramite LinkedIn. Clicca il pulsante qui sotto per inviarmi un messaggio diretto.',
    'contact.linkedin.button': 'Invia Messaggio LinkedIn',
    
    // Footer
    'footer.description': 'Ingegnere Software & Ingegnere IA che costruisce soluzioni scalabili con Python, React e Node.js',
    'footer.connect': 'Connettiti:',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.built': 'Costruito con Next.js & Material-UI',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}