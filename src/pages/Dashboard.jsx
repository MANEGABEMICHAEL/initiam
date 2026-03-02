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
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { name: 'Starlink', status: 'Actif', usage: '85%', nextPayment: '15 Mars' },
                      { name: 'Bois', status: 'Actif', usage: '60%', nextPayment: '20 Mars' },
                      { name: 'Eau', status: 'Actif', usage: '45%', nextPayment: '25 Mars' }
                    ].map((project, index) => (
                      <div key={index} className="card p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
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
                        <button className="w-full mt-4 btn-secondary">
                          Voir les détails
                        </button>
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
    </div>
  )
}

export default Dashboard
