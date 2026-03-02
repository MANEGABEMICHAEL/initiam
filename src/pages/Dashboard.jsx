import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  User, 
  CreditCard, 
  FileText, 
  TrendingUp, 
  Bell, 
  Settings, 
  LogOut,
  Smartphone,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3,
  PieChart,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
  const [show2FAModal, setShow2FAModal] = useState(false)
  const [showHistoryModal, setShowHistoryModal] = useState(false)
  const [showSupportModal, setShowSupportModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [subscribingProject, setSubscribingProject] = useState(null)

  // Données utilisateur client
  const userInfo = {
    name: 'Ir Mike',
    email: 'client@initiam.org',
    memberSince: 'Janvier 2024',
    subscriptionType: 'Premium',
    nextPayment: '15 Mars 2024'
  }

  // Données pour les graphiques
  const subscriptionData = [
    { month: 'Jan', montant: 15000, status: 'payé' },
    { month: 'Fev', montant: 15000, status: 'payé' },
    { month: 'Mar', montant: 15000, status: 'en attente' },
    { month: 'Avr', montant: 15000, status: 'prévu' },
    { month: 'Mai', montant: 15000, status: 'prévu' },
    { month: 'Jun', montant: 15000, status: 'prévu' }
  ]

  const projectUsageData = [
    { name: 'Starlink', usage: 85, color: '#0066cc' },
    { name: 'Bois', usage: 60, color: '#00a86b' },
    { name: 'Eau', usage: 45, color: '#00bcd4' }
  ]

  const activityData = [
    { date: 'Lun', connexions: 12, transactions: 3 },
    { date: 'Mar', connexions: 19, transactions: 5 },
    { date: 'Mer', connexions: 15, transactions: 2 },
    { date: 'Jeu', connexions: 25, transactions: 8 },
    { date: 'Ven', connexions: 22, transactions: 6 },
    { date: 'Sam', connexions: 30, transactions: 10 },
    { date: 'Dim', connexions: 28, transactions: 7 }
  ]

  const transactions = [
    { id: 1, date: '2024-02-15', type: 'Abonnement', montant: 15000, statut: 'payé', methode: 'Orange Money' },
    { id: 2, date: '2024-02-01', type: 'Abonnement', montant: 15000, statut: 'payé', methode: 'M-PESA' },
    { id: 3, date: '2024-01-15', type: 'Abonnement', montant: 15000, statut: 'payé', methode: 'Airtel Money' },
    { id: 4, date: '2024-01-01', type: 'Inscription', montant: 5000, statut: 'payé', methode: 'Orange Money' }
  ]

  const notifications = [
    { id: 1, title: 'Paiement reçu', message: 'Votre paiement de Février a été confirmé', time: '2 heures', type: 'success' },
    { id: 2, title: 'Nouvelle fonctionnalité', message: 'Le tableau de bord a été mis à jour', time: '1 jour', type: 'info' },
    { id: 3, title: 'Rappel de paiement', message: 'Votre prochain paiement est dû le 15 Mars', time: '3 jours', type: 'warning' }
  ]

  const menuItems = [
    { id: 'overview', label: 'Tableau de Bord', icon: BarChart3 },
    { id: 'subscription', label: 'Mon Abonnement', icon: CreditCard },
    { id: 'projects', label: 'Mes Projets', icon: FileText },
    { id: 'payments', label: 'Paiements', icon: Smartphone },
    { id: 'notifications', label: 'Mes Notifications', icon: Bell }
  ]

  // Fonctions pour gérer les projets
  const handleViewProjectDetails = (project) => {
    setSelectedProject(project)
    setShowProjectDetailsModal(true)
  }

  const handleContactSupport = (project) => {
    setSelectedProject(project)
    setShowSupportModal(true)
  }

  const handleViewHistory = (project) => {
    setSelectedProject(project)
    setShowHistoryModal(true)
  }

  // Fonctions pour gérer les paramètres
  const handleOpenSettings = () => {
    setShowSettingsModal(true)
  }

  const handleChangePassword = () => {
    setShowChangePasswordModal(true)
  }

  const handleSendEmail = (project) => {
    const subject = `Demande de support - Projet ${project.name}`
    const body = `Bonjour,
    
Je vous contacte concernant le projet "${project.name}".

Informations du projet:
- Nom: ${project.name}
- Statut: ${project.status}
- Utilisation: ${project.usage}

Merci de votre assistance.

Cordialement,
${userInfo.name}
${userInfo.email}`
    
    const mailtoLink = `mailto:support@initiam.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink)
  }

  const handleMakeCall = () => {
    window.open('tel:+243123456789')
  }

  const handleSetup2FA = () => {
    setShow2FAModal(true)
  }

  const handleSubscribeProject = (project) => {
    setSubscribingProject(project)
  }

  const handleCancelSubscription = () => {
    setSubscribingProject(null)
  }

  const handleSelectPlan = (plan) => {
    alert(`Abonnement "${plan}" sélectionné pour le projet "${subscribingProject.name}"!`)
    setSubscribingProject(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <img 
                src="/logo initiam original.png" 
                alt="INITAM" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{userInfo.name}</h3>
                <p className="text-sm text-gray-500">{userInfo.subscriptionType}</p>
              </div>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-initam-light text-initam-blue'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <button 
                onClick={handleOpenSettings}
                className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings size={20} />
                <span>Paramètres</span>
              </button>
              <Link to="/" className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <LogOut size={20} />
                <span>Déconnexion</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de Bord Client</h1>
            <p className="text-gray-600">Bienvenue, {userInfo.name}</p>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Header Info */}
                <div className="bg-gradient-to-r from-initam-blue to-initam-green rounded-xl p-6 text-white">
                  <h2 className="text-xl font-bold mb-2">Bienvenue dans votre espace client</h2>
                  <p className="text-blue-100">Gérez vos abonnements et suivez vos projets</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CreditCard className="text-blue-600" size={24} />
                      </div>
                      <span className="text-sm text-green-600 flex items-center">
                        <ArrowUpRight size={16} className="mr-1" />
                        +12%
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">60,000 FC</h3>
                    <p className="text-gray-600">Total payé cette année</p>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="text-green-600" size={24} />
                      </div>
                      <span className="text-sm text-green-600 flex items-center">
                        <ArrowUpRight size={16} className="mr-1" />
                        +8%
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">3</h3>
                    <p className="text-gray-600">Projets actifs</p>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Activity className="text-purple-600" size={24} />
                      </div>
                      <span className="text-sm text-red-600 flex items-center">
                        <ArrowDownRight size={16} className="mr-1" />
                        -5%
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">85%</h3>
                    <p className="text-gray-600">Taux d'utilisation</p>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Bell className="text-orange-600" size={24} />
                      </div>
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">3</h3>
                    <p className="text-gray-600">Notifications</p>
                  </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Activité récente</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="connexions" stroke="#0066cc" fill="#0066cc" fillOpacity={0.6} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Utilisation des projets</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={projectUsageData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="usage" fill="#00a86b" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Transactions récentes</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Date</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Type</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Montant</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Méthode</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Statut</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.slice(0, 3).map((transaction) => (
                          <tr key={transaction.id} className="border-b border-gray-100">
                            <td className="py-3 px-4 text-sm text-gray-600">{transaction.date}</td>
                            <td className="py-3 px-4 text-sm text-gray-900">{transaction.type}</td>
                            <td className="py-3 px-4 text-sm font-medium text-gray-900">{transaction.montant.toLocaleString()} FC</td>
                            <td className="py-3 px-4 text-sm text-gray-600">{transaction.methode}</td>
                            <td className="py-3 px-4">
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <CheckCircle size={12} className="mr-1" />
                                {transaction.statut}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'subscription' && (
              <div className="space-y-6">
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestion de l'abonnement</h2>
                  
                  <div className="bg-gradient-to-r from-initam-blue to-initam-green rounded-xl p-6 text-white mb-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">Abonnement {userInfo.subscriptionType}</h3>
                        <p className="text-blue-100 mb-4">Accès complet à tous les projets et fonctionnalités</p>
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="text-sm text-blue-100">Prochain paiement</p>
                            <p className="font-semibold">{userInfo.nextPayment}</p>
                          </div>
                          <div>
                            <p className="text-sm text-blue-100">Montant</p>
                            <p className="font-semibold">15,000 FC/mois</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold">15,000 FC</p>
                        <p className="text-blue-100">par mois</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Historique des paiements</h3>
                      <div className="space-y-3">
                        {transactions.map((transaction) => (
                          <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium text-gray-900">{transaction.type}</p>
                              <p className="text-sm text-gray-600">{transaction.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-gray-900">{transaction.montant.toLocaleString()} FC</p>
                              <p className="text-sm text-gray-600">{transaction.methode}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Méthodes de paiement</h3>
                      <div className="space-y-3">
                        {['Orange Money', 'Airtel Money', 'M-PESA'].map((method) => (
                          <div key={method} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Smartphone className="text-initam-blue" size={20} />
                              <span className="font-medium text-gray-900">{method}</span>
                            </div>
                            <span className="text-sm text-gray-500">Configuré</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes Projets</h2>
                  
                  <div className="space-y-6">
                    {[
                      { name: 'Starlink', status: 'Actif', usage: '85%', nextPayment: '15 Mars' },
                      { name: 'Bois', status: 'Actif', usage: '60%', nextPayment: '20 Mars' },
                      { name: 'Eau', status: 'Actif', usage: '45%', nextPayment: '25 Mars' }
                    ].map((project, index) => (
                      <div key={index} className="space-y-4">
                        {/* Carte du projet */}
                        <div 
                          className={`card p-6 cursor-pointer transition-all ${
                            subscribingProject?.name === project.name 
                              ? 'ring-2 ring-initam-blue bg-blue-50' 
                              : 'hover:shadow-lg'
                          }`}
                          onClick={() => handleSubscribeProject(project)}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              project.status === 'Actif' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600">Utilisation</span>
                                <span className="font-medium text-gray-900">{project.usage}</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-initam-blue to-initam-green h-2 rounded-full"
                                  style={{ width: project.usage }}
                                ></div>
                              </div>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Prochain paiement</span>
                              <span className="font-medium text-gray-900">{project.nextPayment}</span>
                            </div>
                          </div>
                          <button 
                            className={`w-full mt-4 ${
                              subscribingProject?.name === project.name
                                ? 'btn-primary'
                                : 'btn-secondary'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleSubscribeProject(project)
                            }}
                          >
                            {subscribingProject?.name === project.name ? 'Sélectionné' : "S'abonner"}
                          </button>
                        </div>

                        {/* Plans d'abonnement - apparaît directement en dessous du projet sélectionné */}
                        {subscribingProject?.name === project.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="card p-6 border-2 border-initam-blue bg-blue-50"
                          >
                            <div className="flex items-center justify-between mb-6">
                              <h3 className="text-xl font-bold text-gray-900">
                                Plans d'abonnement - {subscribingProject.name}
                              </h3>
                              <button
                                onClick={handleCancelSubscription}
                                className="text-gray-400 hover:text-gray-600"
                              >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {[
                                {
                                  name: 'Basic',
                                  price: '10,000',
                                  features: [
                                    'Accès aux fonctionnalités de base',
                                    'Support par email',
                                    '1 Go de stockage',
                                    'Rapports mensuels'
                                  ],
                                  color: 'gray'
                                },
                                {
                                  name: 'Premium',
                                  price: '15,000',
                                  features: [
                                    'Accès complet aux fonctionnalités',
                                    'Support prioritaire 24/7',
                                    '10 Go de stockage',
                                    'Rapports en temps réel',
                                    'API access',
                                    'Formation incluse'
                                  ],
                                  color: 'blue',
                                  recommended: true
                                },
                                {
                                  name: 'Enterprise',
                                  price: '25,000',
                                  features: [
                                    'Tout ce qui est inclus dans Premium',
                                    'Support dédié',
                                    'Stockage illimité',
                                    'Customisation avancée',
                                    'Intégration sur mesure',
                                    'Formation personnalisée',
                                    'SLA garanti'
                                  ],
                                  color: 'purple'
                                }
                              ].map((plan, planIndex) => (
                                <div
                                  key={planIndex}
                                  className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                                    plan.recommended 
                                      ? 'border-initam-blue bg-white' 
                                      : 'border-gray-200 bg-white'
                                  }`}
                                  onClick={() => handleSelectPlan(plan.name)}
                                >
                                  {plan.recommended && (
                                    <div className="text-center mb-2">
                                      <span className="inline-block px-3 py-1 bg-initam-blue text-white text-xs font-medium rounded-full">
                                        Recommandé
                                      </span>
                                    </div>
                                  )}
                                  <div className="text-center mb-3">
                                    <h4 className="font-bold text-lg text-gray-900">{plan.name}</h4>
                                    <p className="text-2xl font-bold text-gray-900">{plan.price} FC</p>
                                    <p className="text-sm text-gray-600">/ mois</p>
                                  </div>
                                  <ul className="space-y-2 mb-4">
                                    {plan.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-center text-sm text-gray-700">
                                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                  <button className={`w-full btn-${plan.recommended ? 'primary' : 'secondary'}`}>
                                    Choisir {plan.name}
                                  </button>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="space-y-6">
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Paiements Mobile Money</h2>
                  
                  <div className="bg-initam-light rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-initam-blue mb-4">Effectuer un paiement</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { name: 'Orange Money', color: 'orange', code: '*144#' },
                        { name: 'Airtel Money', color: 'blue', code: '*110#' },
                        { name: 'M-PESA', code: '*111#' }
                      ].map((service) => (
                        <div key={service.name} className="bg-white rounded-lg p-4 text-center">
                          <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-3`}>
                            <Smartphone className="text-gray-700" size={24} />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{service.code}</p>
                          <button className="btn-primary text-sm">Payer</button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Historique des paiements</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Date</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Type</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Montant</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Méthode</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Statut</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactions.map((transaction) => (
                            <tr key={transaction.id} className="border-b border-gray-100">
                              <td className="py-3 px-4 text-sm text-gray-600">{transaction.date}</td>
                              <td className="py-3 px-4 text-sm text-gray-900">{transaction.type}</td>
                              <td className="py-3 px-4 text-sm font-medium text-gray-900">{transaction.montant.toLocaleString()} FC</td>
                              <td className="py-3 px-4 text-sm text-gray-600">{transaction.methode}</td>
                              <td className="py-3 px-4">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <CheckCircle size={12} className="mr-1" />
                                  {transaction.statut}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                <button className="text-initam-blue hover:underline text-sm">
                                  Télécharger reçu
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h2>
                  
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          notification.type === 'success' ? 'bg-green-100' :
                          notification.type === 'warning' ? 'bg-orange-100' : 'bg-blue-100'
                        }`}>
                          {notification.type === 'success' && <CheckCircle className="text-green-600" size={20} />}
                          {notification.type === 'warning' && <AlertCircle className="text-orange-600" size={20} />}
                          {notification.type === 'info' && <Bell className="text-blue-600" size={20} />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{notification.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                          <p className="text-gray-500 text-xs">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Modal Détails du Projet */}
      {showProjectDetailsModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.name}</h3>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  selectedProject.status === 'Actif' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {selectedProject.status}
                </span>
              </div>
              <button
                onClick={() => setShowProjectDetailsModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Utilisation du projet</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Taux d'utilisation</span>
                    <span className="font-bold text-gray-900">{selectedProject.usage}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-initam-blue to-initam-green h-3 rounded-full"
                      style={{ width: selectedProject.usage }}
                    ></div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Informations de paiement</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Prochain paiement</p>
                    <p className="font-semibold text-gray-900">{selectedProject.nextPayment}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Statut</p>
                    <p className="font-semibold text-gray-900">{selectedProject.status}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Actions disponibles</h4>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleContactSupport(selectedProject)}
                    className="btn-primary"
                  >
                    Contacter le support
                  </button>
                  <button 
                    onClick={() => handleViewHistory(selectedProject)}
                    className="btn-secondary"
                  >
                    Voir l'historique
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal Paramètres Client */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Paramètres du compte</h3>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Informations personnelles */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Informations personnelles</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input
                      type="text"
                      defaultValue={userInfo.name}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      defaultValue={userInfo.email}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Préférences de notification */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Notifications</h4>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-initam-blue rounded" />
                    <span className="text-gray-700">Recevoir les rappels de paiement</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-initam-blue rounded" />
                    <span className="text-gray-700">Notifications par email</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-initam-blue rounded" />
                    <span className="text-gray-700">Notifications SMS</span>
                  </label>
                </div>
              </div>

              {/* Sécurité */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Sécurité</h4>
                <div className="space-y-3">
                  <button 
                    onClick={handleChangePassword}
                    className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Changer le mot de passe</span>
                      <span className="text-gray-400">→</span>
                    </div>
                  </button>
                  <button 
                    onClick={handleSetup2FA}
                    className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Authentification à deux facteurs</span>
                      <span className="text-gray-400">→</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button className="btn-primary">
                  Enregistrer les modifications
                </button>
                <button
                  onClick={() => setShowSettingsModal(false)}
                  className="btn-secondary"
                >
                  Annuler
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal Support Client */}
      {showSupportModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-lg w-full mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Support - {selectedProject.name}</h3>
              <button
                onClick={() => setShowSupportModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Contact Support</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> support@initiam.org</p>
                  <p><strong>Téléphone:</strong> +243 123 456 789</p>
                  <p><strong>WhatsApp:</strong> +243 987 654 321</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Disponibilité</h4>
                <p className="text-sm text-green-800">Lundi - Vendredi: 8h - 18h</p>
                <p className="text-sm text-green-800">Samedi: 9h - 13h</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-2">Informations du projet</h4>
                <div className="space-y-1 text-sm text-yellow-800">
                  <p><strong>Projet:</strong> {selectedProject.name}</p>
                  <p><strong>Statut:</strong> {selectedProject.status}</p>
                  <p><strong>Utilisation:</strong> {selectedProject.usage}</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button 
                  onClick={() => handleSendEmail(selectedProject)}
                  className="btn-primary flex-1"
                >
                  Envoyer un email
                </button>
                <button 
                  onClick={handleMakeCall}
                  className="btn-secondary flex-1"
                >
                  Appeler maintenant
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal Historique */}
      {showHistoryModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-3xl w-full mx-4 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Historique - {selectedProject.name}</h3>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Historique des paiements */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Historique des paiements</h4>
                <div className="space-y-2">
                  {[
                    { date: '2024-03-01', montant: 15000, statut: 'payé', methode: 'Orange Money' },
                    { date: '2024-02-01', montant: 15000, statut: 'payé', methode: 'MTN' },
                    { date: '2024-01-01', montant: 15000, statut: 'payé', methode: 'Airtel Money' },
                    { date: '2023-12-01', montant: 15000, statut: 'payé', methode: 'Orange Money' },
                    { date: '2023-11-01', montant: 15000, statut: 'payé', methode: 'M-PESA' }
                  ].map((paiement, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{paiement.date}</p>
                        <p className="text-sm text-gray-600">{paiement.methode}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{paiement.montant.toLocaleString()} FC</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          paiement.statut === 'payé' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {paiement.statut}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Historique d'utilisation */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Historique d'utilisation</h4>
                <div className="space-y-2">
                  {[
                    { date: '2024-03-01', usage: '85%', action: 'Connexion quotidienne' },
                    { date: '2024-02-28', usage: '82%', action: 'Téléchargement de documents' },
                    { date: '2024-02-27', usage: '78%', action: 'Mise à jour de profil' },
                    { date: '2024-02-26', usage: '90%', action: 'Consultation rapport' },
                    { date: '2024-02-25', usage: '75%', action: 'Configuration système' }
                  ].map((usage, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{usage.date}</p>
                        <p className="text-sm text-gray-600">{usage.action}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-gray-900">{usage.usage}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistiques */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-blue-900">5</p>
                  <p className="text-sm text-blue-700">Mois d'activité</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-green-900">75,000</p>
                  <p className="text-sm text-green-700">Total payé (FC)</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-purple-900">82%</p>
                  <p className="text-sm text-purple-700">Utilisation moyenne</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal Changer Mot de Passe */}
      {showChangePasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Changer le mot de passe</h3>
              <button
                onClick={() => setShowChangePasswordModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe actuel</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                  placeholder="Entrez votre mot de passe actuel"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                  placeholder="Entrez le nouveau mot de passe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirmer le nouveau mot de passe</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                  placeholder="Confirmez le nouveau mot de passe"
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
                  <strong>Conseils de sécurité:</strong><br/>
                  • Au moins 8 caractères<br/>
                  • Inclure majuscules et minuscules<br/>
                  • Ajouter des chiffres et symboles
                </p>
              </div>

              <div className="flex space-x-3">
                <button 
                  onClick={() => {
                    alert('Mot de passe changé avec succès!')
                    setShowChangePasswordModal(false)
                  }}
                  className="btn-primary flex-1"
                >
                  Changer le mot de passe
                </button>
                <button 
                  onClick={() => setShowChangePasswordModal(false)}
                  className="btn-secondary flex-1"
                >
                  Annuler
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal Authentification 2FA */}
      {show2FAModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Authentification à deux facteurs</h3>
              <button
                onClick={() => setShow2FAModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sécurisez votre compte</h4>
                <p className="text-sm text-gray-600">Ajoutez une couche de sécurité supplémentaire à votre compte</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <input type="radio" name="2fa-method" defaultChecked className="w-4 h-4 text-initam-blue" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Application d'authentification</p>
                    <p className="text-sm text-gray-600">Google Authenticator, Authy, etc.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <input type="radio" name="2fa-method" className="w-4 h-4 text-initam-blue" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">SMS</p>
                    <p className="text-sm text-gray-600">Recevoir un code par SMS</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <input type="radio" name="2fa-method" className="w-4 h-4 text-initam-blue" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">Recevoir un code par email</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Une fois activé, vous devrez fournir un code supplémentaire lors de chaque connexion.
                </p>
              </div>

              <div className="flex space-x-3">
                <button 
                  onClick={() => {
                    alert('Authentification 2FA configurée avec succès!')
                    setShow2FAModal(false)
                  }}
                  className="btn-primary flex-1"
                >
                  Activer 2FA
                </button>
                <button 
                  onClick={() => setShow2FAModal(false)}
                  className="btn-secondary flex-1"
                >
                  Annuler
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
