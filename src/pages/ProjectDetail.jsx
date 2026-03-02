import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Users, TrendingUp, Calendar, MapPin, Star, Wifi, Trees, Droplets, BarChart3, PieChart, Activity, CreditCard, ArrowRight, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ProjectDetail = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const projectsData = {
    starlink: {
      title: 'Starlink',
      subtitle: 'Connectivité Satellite Haut Débit',
      description: 'Révolutionnez l\'accès à internet dans les zones rurales avec notre solution satellite de pointe.',
      icon: Wifi,
      color: 'from-blue-500 to-blue-600',
      status: 'Actif',
      launchDate: 'Janvier 2024',
      location: 'Guinée',
      team: [
        { name: 'Marie Konaté', role: 'Chef de Projet', avatar: 'MK' },
        { name: 'Paul Diallo', role: 'Ingénieur Satellite', avatar: 'PD' },
        { name: 'Fatoumata Bah', role: 'Support Client', avatar: 'FB' }
      ],
      faq: [
        {
          question: 'Quelle est la vitesse de connexion réelle avec Starlink ?',
          answer: 'Starlink offre des vitesses de téléchargement allant de 20 à 150 Mbps et des vitesses de téléversement de 5 à 25 Mbps. La latence varie de 20 à 40 ms, ce qui est excellent pour les applications en temps réel.'
        },
        {
          question: 'Starlink fonctionne-t-il pendant les orages ?',
          answer: 'Oui, Starlink est conçu pour fonctionner dans la plupart des conditions météorologiques. Cependant, des orages très violents avec de fortes précipitations peuvent temporairement affecter la qualité du signal.'
        },
        {
          question: 'Quelle est la couverture géographique en Guinée ?',
          answer: 'Starlink couvre actuellement 95% du territoire guinéen, y compris les zones rurales les plus reculées. Seules quelques zones montagneuses très spécifiques peuvent avoir une couverture limitée.'
        },
        {
          question: 'L\'installation est-elle compliquée ?',
          answer: 'Non, l\'installation est très simple. Nos techniciens certifiés viennent installer l\'antenne et le routeur en moins de 2 heures. Tout est inclus dans votre abonnement.'
        },
        {
          question: 'Puis-je utiliser Starlink pour les jeux en ligne ?',
          answer: 'Oui, avec une latence de 20-40 ms, Starlink est tout à fait adapté aux jeux en ligne. Vous pourrez jouer à la plupart des jeux multijoueurs sans problème.'
        },
        {
          question: 'Que se passe-t-il en cas de problème technique ?',
          answer: 'Notre support technique est disponible 24/7. Nous intervenons généralement sous 24h en cas de problème matériel et offrons une assistance immédiate pour les problèmes logiciels.'
        }
      ],
      features: [
        'Internet haut débit via satellite',
        'Installation professionnelle gratuite',
        'Support technique 24/7',
        'Latence ultra-basse',
        'Réseau mondial de satellites',
        'Mises à jour automatiques'
      ],
      benefits: [
        'Accès internet dans les zones rurales',
        'Idéal pour le télétravail',
        'Parfait pour les entreprises',
        'Éducation en ligne',
        'Téléconférence fluide',
        'Streaming HD sans coupure'
      ],
      progress: [
        { date: '2024-01', milestone: 'Lancement du projet', completed: true },
        { date: '2024-02', milestone: 'Installation des premières antennes', completed: true },
        { date: '2024-03', milestone: 'Couverture de 50% du territoire', completed: true },
        { date: '2024-04', milestone: 'Couverture de 75% du territoire', completed: false },
        { date: '2024-05', milestone: 'Couverture complète', completed: false }
      ],
      achievements: [
        '10,000+ utilisateurs actifs',
        '150 villages connectés',
        '95% de satisfaction client',
        '99.5% de temps de disponibilité'
      ],
      fullDescription: `
        Le projet Starlink INITAM vise à fournir une connectivité internet haut débit aux communautés rurales 
        et isolées grâce à la technologie satellite de pointe. Nous avons développé un modèle économique 
        accessible qui permet aux écoles, centres de santé et entreprises de bénéficier d\'une connexion 
        fiable et performante.
        
        Notre approche inclut l\'installation professionnelle, la formation des utilisateurs locaux, 
        et un support technique continu pour garantir une adoption réussie et un impact durable.
      `,
      objectives: [
        'Connecter 150 villages d\'ici 2025',
        'Réduire la fracture numérique de 60%',
        'Créer 200 emplois locaux',
        'Améliorer l\'accès à l\'éducation en ligne'
      ],
      team: [
        { name: 'Mapendo Romeo', role: 'Chef de Projet', avatar: 'MR' },
        { name: 'Mr Gloire', role: 'Ingénieur Réseau', avatar: 'MG' },
        { name: 'Mr Tresor', role: 'Technicien Principal', avatar: 'MT' }
      ]
    },
    bois: {
      title: 'Bois',
      subtitle: 'Gestion Forestière Durable',
      description: 'Une approche innovante pour la gestion durable des ressources forestières.',
      icon: Trees,
      color: 'from-green-500 to-green-600',
      status: 'Actif',
      launchDate: 'Mars 2024',
      image: '/api/placeholder/800/400',
      faq: [
        {
          question: 'Quels types de ressources forestières sont gérées ?',
          answer: 'Nous gérons principalement le bois d\'œuvre, le bois énergie, les produits forestiers non ligneux (PFNL) comme les fruits, plantes médicinales, et le bambou. Notre approche respecte les cycles naturels de régénération.'
        },
        {
          question: 'Comment assurez-vous la durabilité des forêts ?',
          answer: 'Nous appliquons les principes de la gestion forestière durable : plantation de 3 arbres pour chaque arbre coupé, rotation des zones d\'exploitation, certification FSC, et monitoring constant de la biodiversité.'
        },
        {
          question: 'Quels sont les avantages pour les communautés locales ?',
          answer: 'Les bénéfices incluent : création d\'emplois locaux, revenus durables, formation professionnelle, accès aux ressources, développement d\'activités économiques, et préservation de l\'environnement.'
        },
        {
          question: 'Comment les bénéficiaires sont-ils formés ?',
          answer: 'Nous organisons des formations sur les techniques d\'exploitation durable, la transformation du bois, la gestion commerciale, et les normes environnementales. Les formations sont gratuites et certifiantes.'
        },
        {
          question: 'Quelle est la différence avec l\'exploitation traditionnelle ?',
          answer: 'Notre approche moderne inclut : traçabilité complète, exploitation sélective, régénération active, certification internationale, et partage équitable des revenus avec les communautés.'
        },
        {
          question: 'Comment puis-je bénéficier des ressources forestières ?',
          answer: 'En vous abonnant au projet, vous accédez aux ressources certifiées, bénéficiez de prix préférentiels, recevez une formation, et participez à la gestion durable des forêts.'
        }
      ],
      fullDescription: `
        Notre projet Bois est un programme complet de gestion forestière durable qui combine 
        reforestation, transformation locale du bois, et création d'emplois. Nous travaillons 
        en étroite collaboration avec les communautés locales pour développer des pratiques 
        forestières responsables qui bénéficient à la fois à l'environnement et à l'économie locale.
        
        Le projet inclut la formation des forestiers, la certification FSC, et le développement 
        de chaînes d'approvisionnement locales pour maximiser les bénéfices économiques.
      `,
      objectives: [
        'Reforester 10,000 hectares',
        'Créer 500 emplois directs',
        'Obtenir la certification FSC',
        'Développer 3 unités de transformation'
      ],
      achievements: [
        '5,000+ hectares reboisés',
        '500+ emplois créés',
        '1M+ arbres plantés',
        '100% de pratiques durables'
      ],
      team: [
        { name: 'Paul Traoré', role: 'Directeur Forestier', avatar: 'PT' },
        { name: 'Mr. Jovan', role: 'Responsable RSE', avatar: 'MJ' },
        { name: 'Koumba Fofana', role: 'Chef d\'Équipe', avatar: 'KF' }
      ]
    },
    eau: {
      title: 'Eau',
      subtitle: 'Accès Universel à l\'Eau Potable',
      description: 'Des solutions innovantes pour garantir l\'accès à l\'eau potable pour tous.',
      icon: Droplets,
      color: 'from-cyan-500 to-cyan-600',
      status: 'Actif',
      launchDate: 'Février 2024',
      image: '/api/placeholder/800/400',
      faq: [
        {
          question: 'Quelle est la qualité de l\'eau fournie ?',
          answer: 'Notre eau est traitée selon les normes OMS et certifiée potable. Nous effectuons des tests quotidiens sur les paramètres physiques, chimiques et bactériologiques pour garantir une qualité irréprochable.'
        },
        {
          question: 'Comment l\'eau est-elle distribuée ?',
          answer: 'Nous utilisons un système de distribution moderne : forages profonds, stations de traitement, réseau de canalisations, et points d\'accès publics. Chaque abonné peut aussi avoir une connexion domestique.'
        },
        {
          question: 'Quelles sont les zones couvertes ?',
          answer: 'Nous couvrons actuellement 15 villages dans la région de Mamou et prévoyons d\'étendre à 50 villages d\'ici fin 2024. Les zones sont sélectionnées selon les besoins et la viabilité technique.'
        },
        {
          question: 'Comment les tarifs sont-ils calculés ?',
          answer: 'Nos tarifs sont sociaux : 8,000 FCFA/mois pour un accès illimité. Nous offrons des tarifs réduits pour les écoles, centres de santé, et familles à faible revenu.'
        },
        {
          question: 'Que faire en cas de coupure d\'eau ?',
          answer: 'Notre service client est disponible 24/7 au +243 999 711 054. Nous intervenons généralement sous 2h pour les urgences et disposons de solutions de secours (citernes mobiles).'
        },
        {
          question: 'Comment puis-je vérifier la qualité de l\'eau ?',
          answer: 'Les résultats des tests sont affichés mensuellement dans chaque point d\'accès. Vous pouvez aussi demander un certificat de qualité gratuit à notre service client.'
        }
      ],
      fullDescription: `
        Le projet Eau INITAM transforme l'accès à l'eau potable dans les communautés rurales 
        en développant des solutions durables et abordables. Nous combinons technologies modernes 
        et savoir-faire local pour garantir un accès universel à une eau de qualité.
        
        Notre approche holistique inclut l'infrastructure, la formation communautaire, 
        et la maintenance continue pour assurer la pérennité du service.
      `,
      objectives: [
        'Fournir de l\'eau potable à 50,000 personnes',
        'Installer 100 points d\'accès',
        'Former 200 techniciens locaux',
        'Atteindre 100% de conformité OMS'
      ],
      achievements: [
        '20,000+ personnes desservies',
        '45 points d\'accès opérationnels',
        '99.9% de conformité qualité',
        '0 interruption de service > 24h'
      ],
      team: [
        { name: 'Dr. Marie Condé', role: 'Directrice Eau', avatar: 'MC' },
        { name: 'Seydou Bâ', role: 'Ingénieur Hydraulique', avatar: 'SB' },
        { name: 'Aïssatou Diallo', role: 'Responsable Qualité', avatar: 'AD' }
      ]
    }
  }

  const project = projectsData[id]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Projet non trouvé</h2>
          <Link to="/projets" className="btn-primary">
            Retour aux projets
          </Link>
        </div>
      </div>
    )
  }

  // Données statistiques spécifiques à chaque projet
  const getProjectStatistics = () => {
    switch (id) {
      case 'starlink':
        return {
          monthlyData: [
            { month: 'Jan', utilisateurs: 1200, revenus: 18000000, vitesse: 85 },
            { month: 'Fev', utilisateurs: 2100, revenus: 31500000, vitesse: 92 },
            { month: 'Mar', utilisateurs: 3500, revenus: 52500000, vitesse: 88 },
            { month: 'Avr', utilisateurs: 5100, revenus: 76500000, vitesse: 95 },
            { month: 'Mai', utilisateurs: 7200, revenus: 108000000, vitesse: 98 },
            { month: 'Jun', utilisateurs: 9500, revenus: 142500000, vitesse: 102 }
          ],
          distributionData: [
            { name: 'Particuliers', value: 45, color: '#0066cc' },
            { name: 'Entreprises', value: 30, color: '#00a86b' },
            { name: 'Écoles', value: 15, color: '#00bcd4' },
            { name: 'Centres de santé', value: 10, color: '#4caf50' }
          ],
          performanceData: [
            { metric: 'Vitesse moyenne', value: 95, target: 90, unit: 'Mbps' },
            { metric: 'Disponibilité', value: 99.5, target: 98, unit: '%' },
            { metric: 'Satisfaction', value: 98, target: 90, unit: '%' },
            { metric: 'Couverture', value: 95, target: 85, unit: '%' }
          ],
          keyStats: [
            { label: 'Antennes installées', value: '9,500+', icon: Wifi },
            { label: 'Vitesse moyenne', value: '95 Mbps', icon: TrendingUp },
            { label: 'Taux de satisfaction', value: '98%', icon: Star },
            { label: 'Couverture territoriale', value: '95%', icon: MapPin }
          ]
        }
      case 'bois':
        return {
          monthlyData: [
            { month: 'Jan', utilisateurs: 800, revenus: 8000000, superficie: 1200 },
            { month: 'Fev', utilisateurs: 1200, revenus: 12000000, superficie: 1800 },
            { month: 'Mar', utilisateurs: 1800, revenus: 18000000, superficie: 2500 },
            { month: 'Avr', utilisateurs: 2500, revenus: 25000000, superficie: 3200 },
            { month: 'Mai', utilisateurs: 3200, revenus: 32000000, superficie: 4000 },
            { month: 'Jun', utilisateurs: 4000, revenus: 40000000, superficie: 5000 }
          ],
          distributionData: [
            { name: 'Exploitants', value: 40, color: '#00a86b' },
            { name: 'Artisans', value: 25, color: '#8bc34a' },
            { name: 'Entreprises', value: 20, color: '#4caf50' },
            { name: 'Particuliers', value: 15, color: '#2e7d32' }
          ],
          performanceData: [
            { metric: 'Forêts gérées', value: 5000, target: 10000, unit: 'ha' },
            { metric: 'Arbres plantés', value: 1500000, target: 1000000, unit: '' },
            { metric: 'Emplois créés', value: 400, target: 500, unit: '' },
            { metric: 'Certification', value: 85, target: 100, unit: '%' }
          ],
          keyStats: [
            { label: 'Hectares gérés', value: '5,000+', icon: Trees },
            { label: 'Arbres plantés', value: '1.5M+', icon: Trees },
            { label: 'Emplois créés', value: '400+', icon: Users },
            { label: 'Taux de certification', value: '85%', icon: Star }
          ]
        }
      case 'eau':
        return {
          monthlyData: [
            { month: 'Jan', utilisateurs: 3500, revenus: 28000000, litres: 105000 },
            { month: 'Fev', utilisateurs: 5200, revenus: 41600000, litres: 156000 },
            { month: 'Mar', utilisateurs: 6800, revenus: 54400000, litres: 204000 },
            { month: 'Avr', utilisateurs: 8500, revenus: 68000000, litres: 255000 },
            { month: 'Mai', utilisateurs: 10200, revenus: 81600000, litres: 306000 },
            { month: 'Jun', utilisateurs: 12000, revenus: 96000000, litres: 360000 }
          ],
          distributionData: [
            { name: 'Ménages', value: 50, color: '#00bcd4' },
            { name: 'Écoles', value: 20, color: '#00acc1' },
            { name: 'Centres de santé', value: 15, color: '#0097a7' },
            { name: 'Entreprises', value: 15, color: '#00838f' }
          ],
          performanceData: [
            { metric: 'Personnes desservies', value: 20000, target: 50000, unit: '' },
            { metric: 'Points d\'accès', value: 45, target: 100, unit: '' },
            { metric: 'Qualité eau', value: 99.9, target: 95, unit: '%' },
            { metric: 'Disponibilité', value: 99.8, target: 95, unit: '%' }
          ],
          keyStats: [
            { label: 'Personnes desservies', value: '20,000+', icon: Users },
            { label: 'Points d\'accès', value: '45', icon: Droplets },
            { label: 'Qualité eau', value: '99.9%', icon: Star },
            { label: 'Volume distribué', value: '360K L/mois', icon: Droplets }
          ]
        }
      default:
        return {
          monthlyData: [],
          distributionData: [],
          performanceData: [],
          keyStats: []
        }
    }
  }

  const projectStats = getProjectStatistics()

  const Icon = project.icon

  // Données pour les graphiques (remplacer par les données spécifiques au projet)
  const monthlyData = projectStats.monthlyData
  const distributionData = projectStats.distributionData
  const performanceData = projectStats.performanceData

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`h-96 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/projets"
                className="inline-flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
              >
                <ArrowLeft className="mr-2" size={20} />
                Retour aux projets
              </Link>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Icon className="text-white" size={40} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
                  <p className="text-xl text-blue-100">{project.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white">
                  {project.status}
                </span>
                <span className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white">
                  <Calendar className="inline mr-2" size={16} />
                  {project.launchDate}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'statistics', 'team', 'progress', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-initam-blue text-initam-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab === 'overview' && 'Aperçu'}
                {tab === 'statistics' && 'Statistiques'}
                {tab === 'team' && 'Équipe'}
                {tab === 'progress' && 'Progrès'}
                {tab === 'faq' && 'FAQ'}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Description du projet</h2>
                  <div className="prose prose-lg text-gray-600 whitespace-pre-line">
                    {project.fullDescription}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Objectifs</h3>
                    <ul className="space-y-3">
                      {project.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-initam-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Réalisations</h3>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="text-initam-blue mr-3 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Actions rapides</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/abonnement" className="btn-primary">
                      S'abonner à ce projet
                      <CreditCard className="ml-2" size={20} />
                    </Link>
                    <button className="btn-secondary">
                      Télécharger la documentation
                    </button>
                  </div>
                  <button className="btn-secondary w-full">
                    Contacter l'équipe
                  </button>
                </div>

                <div className="card p-6 mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Statistiques clés</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Utilisateurs actifs', value: '10,000+', icon: Users },
                      { label: 'Taux de croissance', value: '+25%', icon: TrendingUp },
                      { label: 'Satisfaction', value: '95%', icon: Star }
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <stat.icon className="text-initam-blue mr-3" size={16} />
                          <span className="text-gray-600">{stat.label}</span>
                        </div>
                        <span className="font-bold text-gray-900">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'statistics' && (
            <div className="space-y-8">
              {/* Key Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectStats.keyStats.map((stat, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-initam-blue to-initam-green rounded-lg flex items-center justify-center">
                        <stat.icon className="text-white" size={24} />
                      </div>
                      <span className="text-sm text-green-600">+12%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Charts Row 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Évolution des utilisateurs</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="utilisateurs" stroke="#0066cc" fill="#0066cc" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Distribution par secteur</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={distributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {distributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {distributionData.map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{ backgroundColor: item.color }}></div>
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.value}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Charts Row 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Revenus mensuels</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="revenus" fill="#00a86b" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Performance vs Objectifs</h3>
                  <div className="space-y-4">
                    {performanceData.map((metric, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{metric.metric}</span>
                          <span className="text-sm text-gray-500">
                            {metric.value}{metric.unit} / {metric.target}{metric.unit}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              metric.value >= metric.target ? 'bg-initam-green' : 'bg-initam-blue'
                            }`}
                            style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Équipe du projet</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.team.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-initam-blue to-initam-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">{member.avatar}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Timeline du projet</h3>
                <div className="space-y-4">
                  {[
                    { date: 'Jan 2024', title: 'Lancement du projet', status: 'completed' },
                    { date: 'Fev 2024', title: 'Phase pilote', status: 'completed' },
                    { date: 'Mar 2024', title: 'Déploiement initial', status: 'completed' },
                    { date: 'Avr 2024', title: 'Expansion phase 1', status: 'in-progress' },
                    { date: 'Juin 2024', title: 'Objectif Q2', status: 'upcoming' }
                  ].map((milestone, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${
                        milestone.status === 'completed' ? 'bg-initam-green' :
                        milestone.status === 'in-progress' ? 'bg-initam-blue' : 'bg-gray-300'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-900">{milestone.title}</span>
                          <span className="text-sm text-gray-500">{milestone.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions Fréquemment Posées</h2>
              <div className="space-y-4">
                {project.faq.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                    >
                      <span className="font-medium text-gray-900">{item.question}</span>
                      {expandedFAQ === index ? (
                        <ChevronUp className="text-gray-500" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-500" size={20} />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail
