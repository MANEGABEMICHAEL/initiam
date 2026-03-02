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
  DollarSign,
  UserCheck,
  XCircle,
  Eye,
  Download,
  Calendar,
  MessageSquare,
  Mail,
  Reply,
  Archive,
  Trash2
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // Données globales admin
  const globalStats = {
    totalUsers: 10523,
    activeUsers: 8947,
    totalRevenue: 125000000,
    monthlyRevenue: 15000000,
    pendingPayments: 234,
    completedProjects: 3,
    satisfactionRate: 95
  }

  // Données admin
  const adminInfo = {
    name: 'Administrateur',
    email: 'admin@initiam.org',
    role: 'Super Admin',
    lastLogin: new Date().toLocaleDateString('fr-FR')
  }

  // Données pour les graphiques
  const revenueData = [
    { month: 'Jan', revenue: 12000000, users: 8500 },
    { month: 'Fev', revenue: 13500000, users: 9200 },
    { month: 'Mar', revenue: 15000000, users: 10523 },
    { month: 'Avr', revenue: 14200000, users: 10100 },
    { month: 'Mai', revenue: 16800000, users: 11200 },
    { month: 'Jun', revenue: 17500000, users: 11800 }
  ]

  const projectDistribution = [
    { name: 'Starlink', value: 45, revenue: 56250000, users: 4735 },
    { name: 'Bois', value: 30, revenue: 37500000, users: 3157 },
    { name: 'Eau', value: 25, revenue: 31250000, users: 2631 }
  ]

  const userGrowthData = [
    { date: 'Lun', newUsers: 45, activeUsers: 8200 },
    { date: 'Mar', newUsers: 62, activeUsers: 8350 },
    { date: 'Mer', newUsers: 38, activeUsers: 8420 },
    { date: 'Jeu', newUsers: 71, activeUsers: 8590 },
    { date: 'Ven', newUsers: 55, activeUsers: 8680 },
    { date: 'Sam', newUsers: 83, activeUsers: 8947 },
    { date: 'Dim', newUsers: 41, activeUsers: 8947 }
  ]

  // Données des tables
  const pendingPayments = [
    { id: 1, user: 'M Mike', project: 'Starlink', amount: 15000, date: '2024-03-15', method: 'Orange Money', status: 'pending' },
    { id: 2, user: 'Kamathe Wesley', project: 'Bois', amount: 15000, date: '2024-03-16', method: 'M-PESA', status: 'pending' },
    { id: 3, user: 'Mr Jovan', project: 'Eau', amount: 15000, date: '2024-03-17', method: 'Airtel Money', status: 'pending' },
    { id: 4, user: 'Mapendo Roméo', project: 'Starlink', amount: 15000, date: '2024-03-18', method: 'Orange Money', status: 'pending' }
  ]

  const recentUsers = [
    { id: 1, name: 'M mike', email: 'mike@email.com', registrationDate: '2024-03-10', status: 'active', subscription: 'Premium' },
    { id: 2, name: 'Kamathe Wesley', email: 'marie@email.com', registrationDate: '2024-03-11', status: 'active', subscription: 'Premium' },
    { id: 3, name: 'Mr Jovan', email: 'ahmad@email.com', registrationDate: '2024-03-12', status: 'pending', subscription: 'Basic' },
    { id: 4, name: 'Mapendo Roméo', email: 'fatou@email.com', registrationDate: '2024-03-13', status: 'active', subscription: 'Premium' }
  ]

  const menuItems = [
    { id: 'overview', label: 'Aperçu Général', icon: BarChart3 },
    { id: 'users', label: 'Gestion des Utilisateurs', icon: Users },
    { id: 'payments', label: 'Validation des Paiements', icon: CreditCard },
    { id: 'projects', label: 'Gestion des Projets', icon: FileText },
    { id: 'messages', label: 'Messages Utilisateurs', icon: MessageSquare },
    { id: 'reports', label: 'Rapports et Export', icon: Download },
    { id: 'notifications', label: 'Notifications Système', icon: Bell }
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
                <h3 className="font-semibold text-gray-900">{adminInfo.name}</h3>
                <p className="text-sm text-gray-500">{adminInfo.role}</p>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de Bord Administrateur</h1>
            <p className="text-gray-600">Gestion globale de la plateforme INITAM</p>
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
                  <h2 className="text-xl font-bold mb-2">Panneau de Contrôle Administrateur</h2>
                  <p className="text-blue-100">Gestion complète de la plateforme INITAM</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="text-blue-600" size={24} />
                      </div>
                      <span className="text-sm text-green-600">+15%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{globalStats.totalUsers.toLocaleString()}</h3>
                    <p className="text-gray-600">Total Utilisateurs</p>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="text-green-600" size={24} />
                      </div>
                      <span className="text-sm text-green-600">+22%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{(globalStats.totalRevenue / 1000000).toFixed(1)}M FC</h3>
                    <p className="text-gray-600">Revenus Totaux</p>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <UserCheck className="text-purple-600" size={24} />
                      </div>
                      <span className="text-sm text-green-600">+8%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{globalStats.satisfactionRate}%</h3>
                    <p className="text-gray-600">Satisfaction</p>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Clock className="text-orange-600" size={24} />
                      </div>
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        {globalStats.pendingPayments}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{globalStats.pendingPayments}</h3>
                    <p className="text-gray-600">Paiements en attente</p>
                  </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Évolution des Revenus</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#0066cc" fill="#0066cc" fillOpacity={0.6} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Distribution des Projets</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <RechartsPieChart>
                        <Pie
                          data={projectDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {projectDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={['#0066cc', '#00a86b', '#00bcd4'][index]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {projectDistribution.map((item, index) => (
                        <div key={index} className="text-center">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          <div className="text-xs text-gray-500">{item.value}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Utilisateurs Récents</h3>
                    <div className="space-y-3">
                      {recentUsers.slice(0, 4).map((user) => (
                        <div key={user.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              <span className="text-xs font-medium text-gray-600">
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{user.name}</p>
                              <p className="text-xs text-gray-500">{user.registrationDate}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {user.status === 'active' ? 'Actif' : 'En attente'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Paiements en Attente</h3>
                    <div className="space-y-3">
                      {pendingPayments.slice(0, 4).map((payment) => (
                        <div key={payment.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{payment.user}</p>
                            <p className="text-xs text-gray-500">{payment.project} • {payment.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">{payment.amount.toLocaleString()} FC</p>
                            <p className="text-xs text-gray-500">{payment.method}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <div className="card p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Gestion des Utilisateurs</h2>
                    <button className="btn-primary">
                      <Users size={20} className="mr-2" />
                      Ajouter un utilisateur
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Utilisateur</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Email</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Inscription</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Abonnement</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Statut</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map((user) => (
                          <tr key={user.id} className="border-b border-gray-100">
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-medium text-gray-600">
                                    {user.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <span className="font-medium text-gray-900">{user.name}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600">{user.email}</td>
                            <td className="py-3 px-4 text-sm text-gray-600">{user.registrationDate}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 bg-initam-light text-initam-blue text-xs font-medium rounded-full">
                                {user.subscription}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                user.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {user.status === 'active' ? (
                                  <CheckCircle size={12} className="mr-1" />
                                ) : (
                                  <Clock size={12} className="mr-1" />
                                )}
                                {user.status === 'active' ? 'Actif' : 'En attente'}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <button className="text-initam-blue hover:underline text-sm">
                                  <Eye size={16} />
                                </button>
                                <button className="text-red-600 hover:underline text-sm">
                                  <XCircle size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="space-y-6">
                <div className="card p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Validation des Paiements</h2>
                    <div className="flex space-x-3">
                      <button className="btn-secondary">
                        <Download size={20} className="mr-2" />
                        Exporter
                      </button>
                      <button className="btn-primary">
                        Valider tout
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">ID</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Utilisateur</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Projet</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Montant</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Date</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Méthode</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Statut</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingPayments.map((payment) => (
                          <tr key={payment.id} className="border-b border-gray-100">
                            <td className="py-3 px-4 text-sm text-gray-600">#{payment.id.toString().padStart(4, '0')}</td>
                            <td className="py-3 px-4 font-medium text-gray-900">{payment.user}</td>
                            <td className="py-3 px-4 text-sm text-gray-600">{payment.project}</td>
                            <td className="py-3 px-4 font-medium text-gray-900">{payment.amount.toLocaleString()} FC</td>
                            <td className="py-3 px-4 text-sm text-gray-600">{payment.date}</td>
                            <td className="py-3 px-4 text-sm text-gray-600">{payment.method}</td>
                            <td className="py-3 px-4">
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                <Clock size={12} className="mr-1" />
                                En attente
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <button className="text-green-600 hover:underline text-sm">
                                  <CheckCircle size={16} />
                                </button>
                                <button className="text-red-600 hover:underline text-sm">
                                  <XCircle size={16} />
                                </button>
                                <button className="text-initam-blue hover:underline text-sm">
                                  <Eye size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestion des Projets</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projectDistribution.map((project, index) => (
                      <div key={index} className="card p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            Actif
                          </span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Utilisateurs</span>
                            <span className="font-medium text-gray-900">{project.users.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Revenus</span>
                            <span className="font-medium text-gray-900">{(project.revenue / 1000000).toFixed(1)}M FC</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Part de marché</span>
                            <span className="font-medium text-gray-900">{project.value}%</span>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <button className="w-full btn-secondary text-sm">
                            Voir les détails
                          </button>
                          <button className="w-full btn-secondary text-sm">
                            Gérer le projet
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-6">
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Rapports et Export</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Rapports Financiers</h3>
                      {[
                        { name: 'Rapport mensuel', period: 'Mars 2024', format: 'PDF' },
                        { name: 'Rapport trimestriel', period: 'Q1 2024', format: 'Excel' },
                        { name: 'Rapport annuel', period: '2024', format: 'PDF' }
                      ].map((report, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{report.name}</p>
                            <p className="text-sm text-gray-600">{report.period}</p>
                          </div>
                          <button className="btn-secondary text-sm">
                            <Download size={16} className="mr-2" />
                            Télécharger ({report.format})
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Rapports d'Utilisation</h3>
                      {[
                        { name: 'Utilisateurs actifs', period: '30 derniers jours', format: 'CSV' },
                        { name: 'Transactions', period: 'Mars 2024', format: 'Excel' },
                        { name: 'Performance projets', period: 'Q1 2024', format: 'PDF' }
                      ].map((report, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{report.name}</p>
                            <p className="text-sm text-gray-600">{report.period}</p>
                          </div>
                          <button className="btn-secondary text-sm">
                            <Download size={16} className="mr-2" />
                            Télécharger ({report.format})
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Centre de Notifications</h2>
                  
                  <div className="space-y-4">
                    {[
                      { title: 'Nouveaux utilisateurs en attente', message: '5 utilisateurs nécessitent une validation', time: 'Il y a 2 heures', type: 'warning' },
                      { title: 'Paiements en attente', message: '234 paiements doivent être validés', time: 'Il y a 3 heures', type: 'warning' },
                      { title: 'Mise à jour système', message: 'La plateforme sera mise à jour ce soir', time: 'Il y a 5 heures', type: 'info' },
                      { title: 'Objectif mensuel atteint', message: 'Les revenus de Mars ont dépassé les prévisions', time: 'Hier', type: 'success' }
                    ].map((notification, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
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

export default AdminDashboard
