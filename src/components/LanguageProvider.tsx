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
    'nav.consulting': 'Consultorias',
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
    'experience.trustpanel.desc1': 'Participo do desenvolvimento de uma plataforma de gestão de certificados digitais com controle de permissões, rastreamento de expiração e monitoramento de acesso',
    'experience.trustpanel.desc2': 'Construo APIs seguras e sustentáveis usando Python e Django Rest integradas com PostgreSQL',
    'experience.trustpanel.desc3': 'Desenvolvo interfaces responsivas e performáticas com React e Vite',
    'experience.trustpanel.desc4': 'Implemento testes unitários e de integração para garantir confiabilidade do sistema',
    'experience.trustpanel.desc5': 'Participo ativamente de decisões técnicas, code reviews, processos de CI e metodologias ágeis',
    'experience.trustpanel.desc6': 'Colaboro com equipes de produto e design para alinhar entregas com necessidades dos usuários',
    
    // JMD Experience
    'experience.jmd.title': 'Software Engineer',
    'experience.jmd.company': 'JMD Urbanismo',
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
    
    // Consulting Section
    'consulting.title': 'Consultorias Especializadas',
    'consulting.subtitle': 'Projetos de consultoria desenvolvidos para resolver desafios específicos de negócio com soluções tecnológicas inovadoras',
    'consulting.objectives': 'Objetivos',
    'consulting.results': 'Resultados',
    'consulting.technologies': 'Tecnologias Utilizadas',
    'consulting.modal.period': 'Período',
    'consulting.modal.location': 'Localização',
    'consulting.modal.category': 'Categoria',
    'consulting.modal.platforms': 'Plataformas Desenvolvidas',
    'consulting.modal.mainResults': 'Principais Resultados',

    // Panic Button Project
    'consulting.panicButton.title': 'Sistema Botão do Pânico',
    'consulting.panicButton.client': 'Sinop Segforte',
    'consulting.panicButton.location': 'Sinop, MT',
    'consulting.panicButton.period': '2023',
    'consulting.panicButton.category': 'Segurança & Emergência',
    'consulting.panicButton.description': 'Desenvolvimento de aplicativo móvel de segurança com sistema de alerta de emergência em tempo real, integrado com central de monitoramento 24h para resposta rápida a situações de risco.',
    'consulting.panicButton.fullDescription': 'Sistema completo de segurança pessoal desenvolvido para a Sinop Segforte, incluindo aplicativo mobile para usuários finais e painel web administrativo para operadores da central de monitoramento. O sistema permite acionamento de emergência com um toque, enviando localização GPS precisa e dados do usuário instantaneamente para a central 24h.',
    'consulting.panicButton.obj1': 'Criar sistema de alerta instantâneo para situações de emergência',
    'consulting.panicButton.obj2': 'Integrar com central de monitoramento 24h da empresa',
    'consulting.panicButton.obj3': 'Implementar rastreamento GPS preciso para localização',
    'consulting.panicButton.obj4': 'Garantir funcionamento offline e alta disponibilidade',
    'consulting.panicButton.result1': 'Tempo de resposta reduzido para menos de 2 minutos',
    'consulting.panicButton.result2': 'Sistema com 99.9% de disponibilidade operacional',
    'consulting.panicButton.result3': 'Integração completa com central de monitoramento',
    'consulting.panicButton.result4': 'Mais de 500 usuários ativos utilizando o sistema',
    'consulting.panicButton.mobile.title': 'App Mobile - Usuário Final',
    'consulting.panicButton.mobile.description': 'Interface intuitiva para acionamento de emergência com um toque, visualização de status da conexão e histórico de acionamentos.',
    'consulting.panicButton.web.title': 'Painel Web - Central de Monitoramento',
    'consulting.panicButton.web.description': 'Dashboard completo para operadores com mapa em tempo real, gestão de usuários, histórico de ocorrências e relatórios detalhados.',

    // Fraud Analysis Project
    'consulting.fraudAnalysis.title': 'Sistema de Análise de Fraudes',
    'consulting.fraudAnalysis.client': 'Urbano Norte',
    'consulting.fraudAnalysis.location': 'Cuiabá, MT',
    'consulting.fraudAnalysis.period': '2023',
    'consulting.fraudAnalysis.category': 'Análise de Dados & IA',
    'consulting.fraudAnalysis.description': 'Desenvolvimento de sistema inteligente para detecção e análise de fraudes em corridas de transporte, utilizando algoritmos de machine learning para identificar padrões suspeitos e comportamentos anômalos.',
    'consulting.fraudAnalysis.fullDescription': 'Sistema inteligente de análise de fraudes desenvolvido para a Urbano Norte, utilizando algoritmos de Machine Learning para detectar padrões suspeitos em corridas de transporte urbano. O sistema analisa em tempo real dados como rotas, horários, valores e comportamentos para identificar possíveis fraudes.',
    'consulting.fraudAnalysis.obj1': 'Detectar automaticamente corridas fraudulentas ou suspeitas',
    'consulting.fraudAnalysis.obj2': 'Analisar padrões de comportamento de motoristas e passageiros',
    'consulting.fraudAnalysis.obj3': 'Reduzir perdas financeiras por fraudes no sistema',
    'consulting.fraudAnalysis.obj4': 'Criar dashboard para monitoramento em tempo real',
    'consulting.fraudAnalysis.result1': 'Redução de 85% em fraudes detectadas no sistema',
    'consulting.fraudAnalysis.result2': 'Economia de R$ 50.000 mensais em perdas por fraude',
    'consulting.fraudAnalysis.result3': 'Sistema de alertas automáticos implementado',
    'consulting.fraudAnalysis.result4': 'Dashboard analítico para tomada de decisões',
    'consulting.fraudAnalysis.web.title': 'Dashboard Analítico',
    'consulting.fraudAnalysis.web.description': 'Interface completa com gráficos em tempo real, alertas de fraude, relatórios detalhados e ferramentas de análise de dados.',
    
    // CTA
    'consulting.cta.title': 'Precisa de uma Consultoria Especializada?',
    'consulting.cta.description': 'Desenvolvo soluções personalizadas para resolver desafios específicos do seu negócio com tecnologia de ponta.',
    
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
    'nav.consulting': 'Consulting',
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
    'experience.jmd.company': 'JMD Urbanismo',
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
    
    // Consulting Section
    'consulting.title': 'Specialized Consulting',
    'consulting.subtitle': 'Consulting projects developed to solve specific business challenges with innovative technological solutions',
    'consulting.objectives': 'Objectives',
    'consulting.results': 'Results',
    'consulting.technologies': 'Technologies Used',
    'consulting.modal.period': 'Period',
    'consulting.modal.location': 'Location',
    'consulting.modal.category': 'Category',
    'consulting.modal.platforms': 'Developed Platforms',
    'consulting.modal.mainResults': 'Main Results',

    // Panic Button Project
    'consulting.panicButton.title': 'Panic Button System',
    'consulting.panicButton.client': 'Sinop Segforte',
    'consulting.panicButton.location': 'Sinop, MT',
    'consulting.panicButton.period': '2023',
    'consulting.panicButton.category': 'Security & Emergency',
    'consulting.panicButton.description': 'Development of mobile security application with real-time emergency alert system, integrated with 24h monitoring center for rapid response to risk situations.',
    'consulting.panicButton.fullDescription': 'Complete personal security system developed for Sinop Segforte, including mobile app for end users and administrative web panel for monitoring center operators. The system allows emergency activation with one touch, instantly sending precise GPS location and user data to the 24h center.',
    'consulting.panicButton.obj1': 'Create instant alert system for emergency situations',
    'consulting.panicButton.obj2': 'Integrate with company\'s 24h monitoring center',
    'consulting.panicButton.obj3': 'Implement precise GPS tracking for location',
    'consulting.panicButton.obj4': 'Ensure offline functionality and high availability',
    'consulting.panicButton.result1': 'Response time reduced to less than 2 minutes',
    'consulting.panicButton.result2': 'System with 99.9% operational availability',
    'consulting.panicButton.result3': 'Complete integration with monitoring center',
    'consulting.panicButton.result4': 'Over 500 active users using the system',
    'consulting.panicButton.mobile.title': 'Mobile App - End User',
    'consulting.panicButton.mobile.description': 'Intuitive interface for one-touch emergency activation, connection status visualization and activation history.',
    'consulting.panicButton.web.title': 'Web Panel - Monitoring Center',
    'consulting.panicButton.web.description': 'Complete dashboard for operators with real-time map, user management, incident history and detailed reports.',

    // Fraud Analysis Project
    'consulting.fraudAnalysis.title': 'Fraud Analysis System',
    'consulting.fraudAnalysis.client': 'Urbano Norte',
    'consulting.fraudAnalysis.location': 'Cuiabá, MT',
    'consulting.fraudAnalysis.period': '2023',
    'consulting.fraudAnalysis.category': 'Data Analysis & AI',
    'consulting.fraudAnalysis.description': 'Development of intelligent system for fraud detection and analysis in transport rides, using machine learning algorithms to identify suspicious patterns and anomalous behaviors.',
    'consulting.fraudAnalysis.fullDescription': 'Intelligent fraud analysis system developed for Urbano Norte, using Machine Learning algorithms to detect suspicious patterns in urban transport rides. The system analyzes in real-time data such as routes, schedules, values and behaviors to identify possible frauds.',
    'consulting.fraudAnalysis.obj1': 'Automatically detect fraudulent or suspicious rides',
    'consulting.fraudAnalysis.obj2': 'Analyze behavior patterns of drivers and passengers',
    'consulting.fraudAnalysis.obj3': 'Reduce financial losses from system fraud',
    'consulting.fraudAnalysis.obj4': 'Create dashboard for real-time monitoring',
    'consulting.fraudAnalysis.result1': '85% reduction in detected fraud in the system',
    'consulting.fraudAnalysis.result2': 'Monthly savings of R$ 50,000 in fraud losses',
    'consulting.fraudAnalysis.result3': 'Automatic alert system implemented',
    'consulting.fraudAnalysis.result4': 'Analytical dashboard for decision making',
    'consulting.fraudAnalysis.web.title': 'Analytical Dashboard',
    'consulting.fraudAnalysis.web.description': 'Complete interface with real-time charts, fraud alerts, detailed reports and data analysis tools.',
    
    // CTA
    'consulting.cta.title': 'Need Specialized Consulting?',
    'consulting.cta.description': 'I develop customized solutions to solve your business specific challenges with cutting-edge technology.',
    
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
    'nav.consulting': 'Conseil',
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
    'experience.jmd.company': 'JMD Urbanismo',
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
    
    // Consulting Section
    'consulting.title': 'Conseil Spécialisé',
    'consulting.subtitle': 'Projets de conseil développés pour résoudre des défis commerciaux spécifiques avec des solutions technologiques innovantes',
    'consulting.objectives': 'Objectifs',
    'consulting.results': 'Résultats',
    'consulting.technologies': 'Technologies Utilisées',
    'consulting.modal.period': 'Période',
    'consulting.modal.location': 'Localisation',
    'consulting.modal.category': 'Catégorie',
    'consulting.modal.platforms': 'Plateformes Développées',
    'consulting.modal.mainResults': 'Principaux Résultats',

    // Panic Button Project
    'consulting.panicButton.title': 'Système Bouton de Panique',
    'consulting.panicButton.client': 'Sinop Segforte',
    'consulting.panicButton.location': 'Sinop, MT',
    'consulting.panicButton.period': '2023',
    'consulting.panicButton.category': 'Sécurité & Urgence',
    'consulting.panicButton.description': 'Développement d\'application mobile de sécurité avec système d\'alerte d\'urgence en temps réel, intégré avec centre de surveillance 24h pour réponse rapide aux situations à risque.',
    'consulting.panicButton.fullDescription': 'Système complet de sécurité personnelle développé pour Sinop Segforte, incluant application mobile pour utilisateurs finaux et panneau web administratif pour opérateurs du centre de surveillance. Le système permet activation d\'urgence en un toucher, envoyant instantanément localisation GPS précise et données utilisateur au centre 24h.',
    'consulting.panicButton.obj1': 'Créer système d\'alerte instantané pour situations d\'urgence',
    'consulting.panicButton.obj2': 'Intégrer avec centre de surveillance 24h de l\'entreprise',
    'consulting.panicButton.obj3': 'Implémenter suivi GPS précis pour localisation',
    'consulting.panicButton.obj4': 'Garantir fonctionnement hors ligne et haute disponibilité',
    'consulting.panicButton.result1': 'Temps de réponse réduit à moins de 2 minutes',
    'consulting.panicButton.result2': 'Système avec 99,9% de disponibilité opérationnelle',
    'consulting.panicButton.result3': 'Intégration complète avec centre de surveillance',
    'consulting.panicButton.result4': 'Plus de 500 utilisateurs actifs utilisant le système',
    'consulting.panicButton.mobile.title': 'App Mobile - Utilisateur Final',
    'consulting.panicButton.mobile.description': 'Interface intuitive pour activation d\'urgence en un toucher, visualisation du statut de connexion et historique des activations.',
    'consulting.panicButton.web.title': 'Panneau Web - Centre de Surveillance',
    'consulting.panicButton.web.description': 'Tableau de bord complet pour opérateurs avec carte en temps réel, gestion des utilisateurs, historique des incidents et rapports détaillés.',

    // Fraud Analysis Project
    'consulting.fraudAnalysis.title': 'Système d\'Analyse de Fraudes',
    'consulting.fraudAnalysis.client': 'Urbano Norte',
    'consulting.fraudAnalysis.location': 'Cuiabá, MT',
    'consulting.fraudAnalysis.period': '2023',
    'consulting.fraudAnalysis.category': 'Analyse de Données & IA',
    'consulting.fraudAnalysis.description': 'Développement de système intelligent pour détection et analyse de fraudes dans courses de transport, utilisant algorithmes d\'apprentissage automatique pour identifier motifs suspects et comportements anormaux.',
    'consulting.fraudAnalysis.fullDescription': 'Système intelligent d\'analyse de fraudes développé pour Urbano Norte, utilisant algorithmes de Machine Learning pour détecter motifs suspects dans courses de transport urbain. Le système analyse en temps réel données comme itinéraires, horaires, valeurs et comportements pour identifier fraudes possibles.',
    'consulting.fraudAnalysis.obj1': 'Détecter automatiquement courses frauduleuses ou suspectes',
    'consulting.fraudAnalysis.obj2': 'Analyser motifs de comportement des conducteurs et passagers',
    'consulting.fraudAnalysis.obj3': 'Réduire pertes financières par fraudes dans le système',
    'consulting.fraudAnalysis.obj4': 'Créer tableau de bord pour surveillance en temps réel',
    'consulting.fraudAnalysis.result1': 'Réduction de 85% des fraudes détectées dans le système',
    'consulting.fraudAnalysis.result2': 'Économie de R$ 50 000 mensuels en pertes par fraude',
    'consulting.fraudAnalysis.result3': 'Système d\'alertes automatiques implémenté',
    'consulting.fraudAnalysis.result4': 'Tableau de bord analytique pour prise de décisions',
    'consulting.fraudAnalysis.web.title': 'Tableau de Bord Analytique',
    'consulting.fraudAnalysis.web.description': 'Interface complète avec graphiques en temps réel, alertes de fraude, rapports détaillés et outils d\'analyse de données.',
    
    // CTA
    'consulting.cta.title': 'Besoin de Conseil Spécialisé?',
    'consulting.cta.description': 'Je développe des solutions personnalisées pour résoudre les défis spécifiques de votre entreprise avec une technologie de pointe.',
    
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
    'nav.consulting': 'Consultoría',
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
    'experience.jmd.company': 'JMD Urbanismo',
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
    
    // Consulting Section
    'consulting.title': 'Consultoría Especializada',
    'consulting.subtitle': 'Proyectos de consultoría desarrollados para resolver desafíos comerciales específicos con soluciones tecnológicas innovadoras',
    'consulting.objectives': 'Objetivos',
    'consulting.results': 'Resultados',
    'consulting.technologies': 'Tecnologías Utilizadas',
    'consulting.modal.period': 'Período',
    'consulting.modal.location': 'Ubicación',
    'consulting.modal.category': 'Categoría',
    'consulting.modal.platforms': 'Plataformas Desarrolladas',
    'consulting.modal.mainResults': 'Principales Resultados',

    // Panic Button Project
    'consulting.panicButton.title': 'Sistema Botón de Pánico',
    'consulting.panicButton.client': 'Sinop Segforte',
    'consulting.panicButton.location': 'Sinop, MT',
    'consulting.panicButton.period': '2023',
    'consulting.panicButton.category': 'Seguridad & Emergencia',
    'consulting.panicButton.description': 'Desarrollo de aplicación móvil de seguridad con sistema de alerta de emergencia en tiempo real, integrado con centro de monitoreo 24h para respuesta rápida a situaciones de riesgo.',
    'consulting.panicButton.fullDescription': 'Sistema completo de seguridad personal desarrollado para Sinop Segforte, incluyendo aplicación móvil para usuarios finales y panel web administrativo para operadores del centro de monitoreo. El sistema permite activación de emergencia con un toque, enviando instantáneamente ubicación GPS precisa y datos del usuario al centro 24h.',
    'consulting.panicButton.obj1': 'Crear sistema de alerta instantáneo para situaciones de emergencia',
    'consulting.panicButton.obj2': 'Integrar con centro de monitoreo 24h de la empresa',
    'consulting.panicButton.obj3': 'Implementar rastreo GPS preciso para localización',
    'consulting.panicButton.obj4': 'Garantizar funcionamiento offline y alta disponibilidad',
    'consulting.panicButton.result1': 'Tiempo de respuesta reducido a menos de 2 minutos',
    'consulting.panicButton.result2': 'Sistema con 99.9% de disponibilidad operacional',
    'consulting.panicButton.result3': 'Integración completa con centro de monitoreo',
    'consulting.panicButton.result4': 'Más de 500 usuarios activos utilizando el sistema',
    'consulting.panicButton.mobile.title': 'App Móvil - Usuario Final',
    'consulting.panicButton.mobile.description': 'Interfaz intuitiva para activación de emergencia con un toque, visualización del estado de conexión e historial de activaciones.',
    'consulting.panicButton.web.title': 'Panel Web - Centro de Monitoreo',
    'consulting.panicButton.web.description': 'Dashboard completo para operadores con mapa en tiempo real, gestión de usuarios, historial de incidentes e informes detallados.',

    // Fraud Analysis Project
    'consulting.fraudAnalysis.title': 'Sistema de Análisis de Fraudes',
    'consulting.fraudAnalysis.client': 'Urbano Norte',
    'consulting.fraudAnalysis.location': 'Cuiabá, MT',
    'consulting.fraudAnalysis.period': '2023',
    'consulting.fraudAnalysis.category': 'Análisis de Datos & IA',
    'consulting.fraudAnalysis.description': 'Desarrollo de sistema inteligente para detección y análisis de fraudes en carreras de transporte, utilizando algoritmos de machine learning para identificar patrones sospechosos y comportamientos anómalos.',
    'consulting.fraudAnalysis.fullDescription': 'Sistema inteligente de análisis de fraudes desarrollado para Urbano Norte, utilizando algoritmos de Machine Learning para detectar patrones sospechosos en carreras de transporte urbano. El sistema analiza en tiempo real datos como rutas, horarios, valores y comportamientos para identificar posibles fraudes.',
    'consulting.fraudAnalysis.obj1': 'Detectar automáticamente carreras fraudulentas o sospechosas',
    'consulting.fraudAnalysis.obj2': 'Analizar patrones de comportamiento de conductores y pasajeros',
    'consulting.fraudAnalysis.obj3': 'Reducir pérdidas financieras por fraudes en el sistema',
    'consulting.fraudAnalysis.obj4': 'Crear dashboard para monitoreo en tiempo real',
    'consulting.fraudAnalysis.result1': 'Reducción del 85% en fraudes detectados en el sistema',
    'consulting.fraudAnalysis.result2': 'Ahorro de R$ 50.000 mensuales en pérdidas por fraude',
    'consulting.fraudAnalysis.result3': 'Sistema de alertas automáticas implementado',
    'consulting.fraudAnalysis.result4': 'Dashboard analítico para toma de decisiones',
    'consulting.fraudAnalysis.web.title': 'Dashboard Analítico',
    'consulting.fraudAnalysis.web.description': 'Interfaz completa con gráficos en tiempo real, alertas de fraude, informes detallados y herramientas de análisis de datos.',
    
    // CTA
    'consulting.cta.title': '¿Necesitas Consultoría Especializada?',
    'consulting.cta.description': 'Desarrollo soluciones personalizadas para resolver desafíos específicos de tu negocio con tecnología de vanguardia.',
    
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
    'nav.consulting': 'Consulenza',
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
    'experience.jmd.company': 'JMD Urbanismo',
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
    
    // Consulting Section
    'consulting.title': 'Consulenza Specializzata',
    'consulting.subtitle': 'Progetti di consulenza sviluppati per risolvere sfide commerciali specifiche con soluzioni tecnologiche innovative',
    'consulting.objectives': 'Obiettivi',
    'consulting.results': 'Risultati',
    'consulting.technologies': 'Tecnologie Utilizzate',
    'consulting.modal.period': 'Periodo',
    'consulting.modal.location': 'Posizione',
    'consulting.modal.category': 'Categoria',
    'consulting.modal.platforms': 'Piattaforme Sviluppate',
    'consulting.modal.mainResults': 'Risultati Principali',

    // Panic Button Project
    'consulting.panicButton.title': 'Sistema Pulsante di Panico',
    'consulting.panicButton.client': 'Sinop Segforte',
    'consulting.panicButton.location': 'Sinop, MT',
    'consulting.panicButton.period': '2023',
    'consulting.panicButton.category': 'Sicurezza & Emergenza',
    'consulting.panicButton.description': 'Sviluppo di applicazione mobile di sicurezza con sistema di allerta di emergenza in tempo reale, integrato con centro di monitoraggio 24h per risposta rapida a situazioni di rischio.',
    'consulting.panicButton.fullDescription': 'Sistema completo di sicurezza personale sviluppato per Sinop Segforte, includendo applicazione mobile per utenti finali e pannello web amministrativo per operatori del centro di monitoraggio. Il sistema permette attivazione di emergenza con un tocco, inviando istantaneamente posizione GPS precisa e dati utente al centro 24h.',
    'consulting.panicButton.obj1': 'Creare sistema di allerta istantaneo per situazioni di emergenza',
    'consulting.panicButton.obj2': 'Integrare con centro di monitoraggio 24h dell\'azienda',
    'consulting.panicButton.obj3': 'Implementare tracciamento GPS preciso per localizzazione',
    'consulting.panicButton.obj4': 'Garantire funzionamento offline e alta disponibilità',
    'consulting.panicButton.result1': 'Tempo di risposta ridotto a meno di 2 minuti',
    'consulting.panicButton.result2': 'Sistema con 99,9% di disponibilità operativa',
    'consulting.panicButton.result3': 'Integrazione completa con centro di monitoraggio',
    'consulting.panicButton.result4': 'Oltre 500 utenti attivi che utilizzano il sistema',
    'consulting.panicButton.mobile.title': 'App Mobile - Utente Finale',
    'consulting.panicButton.mobile.description': 'Interfaccia intuitiva per attivazione emergenza con un tocco, visualizzazione stato connessione e storico attivazioni.',
    'consulting.panicButton.web.title': 'Pannello Web - Centro di Monitoraggio',
    'consulting.panicButton.web.description': 'Dashboard completo per operatori con mappa in tempo reale, gestione utenti, storico incidenti e report dettagliati.',

    // Fraud Analysis Project
    'consulting.fraudAnalysis.title': 'Sistema di Analisi Frodi',
    'consulting.fraudAnalysis.client': 'Urbano Norte',
    'consulting.fraudAnalysis.location': 'Cuiabá, MT',
    'consulting.fraudAnalysis.period': '2023',
    'consulting.fraudAnalysis.category': 'Analisi Dati & IA',
    'consulting.fraudAnalysis.description': 'Sviluppo di sistema intelligente per rilevamento e analisi frodi in corse di trasporto, utilizzando algoritmi di machine learning per identificare pattern sospetti e comportamenti anomali.',
    'consulting.fraudAnalysis.fullDescription': 'Sistema intelligente di analisi frodi sviluppato per Urbano Norte, utilizzando algoritmi di Machine Learning per rilevare pattern sospetti in corse di trasporto urbano. Il sistema analizza in tempo reale dati come percorsi, orari, valori e comportamenti per identificare possibili frodi.',
    'consulting.fraudAnalysis.obj1': 'Rilevare automaticamente corse fraudolente o sospette',
    'consulting.fraudAnalysis.obj2': 'Analizzare pattern di comportamento di autisti e passeggeri',
    'consulting.fraudAnalysis.obj3': 'Ridurre perdite finanziarie da frodi nel sistema',
    'consulting.fraudAnalysis.obj4': 'Creare dashboard per monitoraggio in tempo reale',
    'consulting.fraudAnalysis.result1': 'Riduzione dell\'85% delle frodi rilevate nel sistema',
    'consulting.fraudAnalysis.result2': 'Risparmio di R$ 50.000 mensili in perdite da frode',
    'consulting.fraudAnalysis.result3': 'Sistema di allerte automatiche implementato',
    'consulting.fraudAnalysis.result4': 'Dashboard analitico per presa di decisioni',
    'consulting.fraudAnalysis.web.title': 'Dashboard Analitico',
    'consulting.fraudAnalysis.web.description': 'Interfaccia completa con grafici in tempo reale, allerte frode, report dettagliati e strumenti analisi dati.',
    
    // CTA
    'consulting.cta.title': 'Hai Bisogno di Consulenza Specializzata?',
    'consulting.cta.description': 'Sviluppo soluzioni personalizzate per risolvere le sfide specifiche della tua azienda con tecnologia all\'avanguardia.',
    
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