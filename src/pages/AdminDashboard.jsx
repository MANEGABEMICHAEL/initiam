import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  User, 
  Users,
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
  MessageSquare,
  Mail,
  Reply,
  Archive,
  Trash2,
  X
} from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false)
  const [showProjectManageModal, setShowProjectManageModal] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  
  // Charger les paramètres depuis localStorage au démarrage
  const [adminSettings, setAdminSettings] = useState(() => {
    const savedSettings = localStorage.getItem('adminSettings')
    if (savedSettings) {
      return JSON.parse(savedSettings)
    }
    return {
      theme: 'light',
      language: 'fr',
      notifications: true,
      emailAlerts: true,
      autoRefresh: false,
      refreshInterval: 30
    }
  })
  
  // État pour les paramètres temporaires (non sauvegardés)
  const [tempSettings, setTempSettings] = useState(adminSettings)
  
  // État pour le rafraîchissement automatique
  const [lastRefresh, setLastRefresh] = useState(new Date())
  
  // Appliquer le thème au chargement seulement
  React.useEffect(() => {
    applyTheme(adminSettings.theme)
  }, [])
  
  // Rafraîchissement automatique (basé sur les paramètres sauvegardés)
  React.useEffect(() => {
    let interval = null
    if (adminSettings.autoRefresh) {
      interval = setInterval(() => {
        setLastRefresh(new Date())
        // Simuler un rafraîchissement des données
        console.log('Rafraîchissement automatique des données...')
      }, adminSettings.refreshInterval * 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [adminSettings.autoRefresh, adminSettings.refreshInterval])
  
  // Demander la permission pour les notifications (basé sur les paramètres sauvegardés)
  React.useEffect(() => {
    if (adminSettings.notifications && 'Notification' in window) {
      Notification.requestPermission()
    }
  }, [])
  
  const applyTheme = (theme) => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      document.body.classList.add('bg-gray-900')
      document.body.classList.remove('bg-gray-50')
    } else if (theme === 'light') {
      root.classList.remove('dark')
      document.body.classList.remove('bg-gray-900')
      document.body.classList.add('bg-gray-50')
    } else {
      // Auto: détecter la préférence système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(prefersDark ? 'dark' : 'light')
    }
  }
  
  // Traductions
  const translations = {
    fr: {
      dashboard: 'Tableau de Bord Administrateur',
      subtitle: 'Gestion globale de la plateforme INITAM',
      overview: 'Aperçu Général',
      users: 'Gestion des Utilisateurs',
      payments: 'Validation des Paiements',
      projects: 'Gestion des Projets',
      reports: 'Rapports et Export',
      notifications: 'Centre de Notifications',
      settings: 'Paramètres',
      logout: 'Déconnexion',
      totalUsers: 'Total Utilisateurs',
      monthlyRevenue: 'Revenus Mensuels',
      pendingPayments: 'Paiements en Attente',
      satisfactionRate: 'Taux de Satisfaction',
      addUser: 'Ajouter un utilisateur',
      export: 'Exporter',
      validateAll: 'Valider tout',
      viewDetails: 'Voir les détails',
      manageProject: 'Gérer le projet',
      download: 'Télécharger',
      save: 'Sauvegarder',
      cancel: 'Annuler',
      delete: 'Supprimer',
      active: 'Actif',
      pending: 'En attente',
      validated: 'Validé',
      rejected: 'Rejeté',
      name: 'Nom',
      email: 'Email',
      role: 'Rôle',
      subscription: 'Abonnement',
      registrationDate: 'Date d\'inscription',
      status: 'Statut',
      actions: 'Actions',
      user: 'Utilisateur',
      project: 'Projet',
      amount: 'Montant',
      date: 'Date',
      method: 'Méthode',
      revenue: 'Revenus',
      growth: 'Croissance',
      lastLogin: 'Dernière connexion',
      adminPanel: 'Admin Panel',
      welcome: 'Bienvenue',
      financialReports: 'Rapports Financiers',
      usageReports: 'Rapports d\'Utilisation',
      monthlyReport: 'Rapport mensuel',
      quarterlyReport: 'Rapport trimestriel',
      annualReport: 'Rapport annuel',
      activeUsers: 'Utilisateurs actifs',
      transactions: 'Transactions',
      projectPerformance: 'Performance projets',
      period: 'Période',
      format: 'Format',
      lightTheme: 'Clair',
      darkTheme: 'Sombre',
      autoTheme: 'Automatique',
      french: 'Français',
      english: 'English',
      spanish: 'Español',
      swahili: 'Kiswahili',
      pushNotifications: 'Notifications push',
      emailAlerts: 'Alertes email',
      autoRefresh: 'Rafraîchissement automatique',
      enableRefresh: 'Activer le rafraîchissement',
      refreshInterval: 'Intervalle',
      seconds: 'secondes',
      resetSettings: 'Réinitialiser',
      allSettings: 'tous les paramètres',
      confirmReset: 'Êtes-vous sûr de vouloir réinitialiser tous les paramètres ?',
      resetSuccess: 'Paramètres réinitialisés avec succès !',
      settingsSaved: 'Paramètres sauvegardés avec succès !',
      emailConfirmation: 'Un email de confirmation a été envoyé',
      themeChanged: 'Thème changé',
      languageChanged: 'Langue changée',
      notificationsEnabled: 'Notifications activées',
      notificationsDisabled: 'Notifications désactivées',
      refreshEnabled: 'Rafraîchissement activé',
      refreshDisabled: 'Rafraîchissement désactivé',
      receiveNotifications: 'Recevoir des notifications dans le navigateur',
      receiveEmailAlerts: 'Recevoir des alertes par email',
      updateDataAutomatically: 'Mettre à jour les données automatiquement',
      revenueEvolution: 'Évolution des Revenus',
      projectDistribution: 'Distribution des Projets',
      addUserModal: 'Ajouter un nouvel utilisateur',
      fullName: 'Nom complet',
      enterName: 'Entrez le nom de l\'utilisateur',
      enterEmail: 'email@exemple.com',
      userRole: 'Rôle',
      clientRole: 'Client',
      adminRole: 'Administrateur',
      moderatorRole: 'Modérateur',
      subscriptionType: 'Type d\'abonnement',
      basicPlan: 'Basic',
      premiumPlan: 'Premium',
      enterprisePlan: 'Enterprise',
      projectDetails: 'Détails du Projet',
      manageProjectTitle: 'Gérer le Projet',
      projectStatus: 'Statut du projet',
      projectDescription: 'Description',
      projectObjectives: 'Objectifs',
      listObjectives: 'Listez les objectifs du projet',
      enterDescription: 'Décrivez le projet...',
      enterObjectives: 'Listez les objectifs du projet...',
      projectUpdated: 'Projet mis à jour',
      projectDeleted: 'Projet supprimé',
      confirmDelete: 'Êtes-vous sûr de vouloir supprimer',
      downloadReport: 'Télécharger',
      reportGenerated: 'Rapport généré',
      fileDownloaded: 'Fichier téléchargé'
    },
    en: {
      dashboard: 'Admin Dashboard',
      subtitle: 'Global management of INITAM platform',
      overview: 'Overview',
      users: 'User Management',
      payments: 'Payment Validation',
      projects: 'Project Management',
      reports: 'Reports & Export',
      notifications: 'Notification Center',
      settings: 'Settings',
      logout: 'Logout',
      totalUsers: 'Total Users',
      monthlyRevenue: 'Monthly Revenue',
      pendingPayments: 'Pending Payments',
      satisfactionRate: 'Satisfaction Rate',
      addUser: 'Add User',
      export: 'Export',
      validateAll: 'Validate All',
      viewDetails: 'View Details',
      manageProject: 'Manage Project',
      download: 'Download',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      active: 'Active',
      pending: 'Pending',
      validated: 'Validated',
      rejected: 'Rejected',
      name: 'Name',
      email: 'Email',
      role: 'Role',
      subscription: 'Subscription',
      registrationDate: 'Registration Date',
      status: 'Status',
      actions: 'Actions',
      user: 'User',
      project: 'Project',
      amount: 'Amount',
      date: 'Date',
      method: 'Method',
      revenue: 'Revenue',
      growth: 'Growth',
      lastLogin: 'Last Login',
      adminPanel: 'Admin Panel',
      welcome: 'Welcome',
      financialReports: 'Financial Reports',
      usageReports: 'Usage Reports',
      monthlyReport: 'Monthly Report',
      quarterlyReport: 'Quarterly Report',
      annualReport: 'Annual Report',
      activeUsers: 'Active Users',
      transactions: 'Transactions',
      projectPerformance: 'Project Performance',
      period: 'Period',
      format: 'Format',
      lightTheme: 'Light',
      darkTheme: 'Dark',
      autoTheme: 'Auto',
      french: 'French',
      english: 'English',
      spanish: 'Spanish',
      swahili: 'Swahili',
      pushNotifications: 'Push Notifications',
      emailAlerts: 'Email Alerts',
      autoRefresh: 'Auto Refresh',
      enableRefresh: 'Enable Refresh',
      refreshInterval: 'Interval',
      seconds: 'seconds',
      resetSettings: 'Reset',
      allSettings: 'all settings',
      confirmReset: 'Are you sure you want to reset all settings?',
      resetSuccess: 'Settings reset successfully!',
      settingsSaved: 'Settings saved successfully!',
      emailConfirmation: 'A confirmation email has been sent',
      themeChanged: 'Theme changed',
      languageChanged: 'Language changed',
      notificationsEnabled: 'Notifications enabled',
      notificationsDisabled: 'Notifications disabled',
      refreshEnabled: 'Refresh enabled',
      refreshDisabled: 'Refresh disabled',
      receiveNotifications: 'Receive notifications in browser',
      receiveEmailAlerts: 'Receive email alerts',
      updateDataAutomatically: 'Update data automatically',
      revenueEvolution: 'Revenue Evolution',
      projectDistribution: 'Project Distribution',
      addUserModal: 'Add New User',
      fullName: 'Full Name',
      enterName: 'Enter user name',
      enterEmail: 'email@example.com',
      userRole: 'Role',
      clientRole: 'Client',
      adminRole: 'Administrator',
      moderatorRole: 'Moderator',
      subscriptionType: 'Subscription Type',
      basicPlan: 'Basic',
      premiumPlan: 'Premium',
      enterprisePlan: 'Enterprise',
      projectDetails: 'Project Details',
      manageProjectTitle: 'Manage Project',
      projectStatus: 'Project Status',
      projectDescription: 'Description',
      projectObjectives: 'Objectives',
      listObjectives: 'List project objectives',
      enterDescription: 'Describe the project...',
      enterObjectives: 'List project objectives...',
      projectUpdated: 'Project updated',
      projectDeleted: 'Project deleted',
      confirmDelete: 'Are you sure you want to delete',
      downloadReport: 'Download',
      reportGenerated: 'Report generated',
      fileDownloaded: 'File downloaded'
    },
    es: {
      dashboard: 'Panel de Administración',
      subtitle: 'Gestión global de la plataforma INITAM',
      overview: 'Resumen General',
      users: 'Gestión de Usuarios',
      payments: 'Validación de Pagos',
      projects: 'Gestión de Proyectos',
      reports: 'Informes y Exportación',
      notifications: 'Centro de Notificaciones',
      settings: 'Configuración',
      logout: 'Cerrar Sesión',
      totalUsers: 'Usuarios Totales',
      monthlyRevenue: 'Ingresos Mensuales',
      pendingPayments: 'Pagos Pendientes',
      satisfactionRate: 'Tasa de Satisfacción',
      addUser: 'Agregar Usuario',
      export: 'Exportar',
      validateAll: 'Validar Todo',
      viewDetails: 'Ver Detalles',
      manageProject: 'Gestionar Proyecto',
      download: 'Descargar',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      active: 'Activo',
      pending: 'Pendiente',
      validated: 'Validado',
      rejected: 'Rechazado',
      name: 'Nombre',
      email: 'Correo',
      role: 'Rol',
      subscription: 'Suscripción',
      registrationDate: 'Fecha de Registro',
      status: 'Estado',
      actions: 'Acciones',
      user: 'Usuario',
      project: 'Proyecto',
      amount: 'Cantidad',
      date: 'Fecha',
      method: 'Método',
      revenue: 'Ingresos',
      growth: 'Crecimiento',
      lastLogin: 'Último Inicio',
      adminPanel: 'Panel de Administración',
      welcome: 'Bienvenido',
      financialReports: 'Informes Financieros',
      usageReports: 'Informes de Uso',
      monthlyReport: 'Informe Mensual',
      quarterlyReport: 'Informe Trimestral',
      annualReport: 'Informe Anual',
      activeUsers: 'Usuarios Activos',
      transactions: 'Transacciones',
      projectPerformance: 'Rendimiento de Proyectos',
      period: 'Período',
      format: 'Formato',
      lightTheme: 'Claro',
      darkTheme: 'Oscuro',
      autoTheme: 'Automático',
      french: 'Francés',
      english: 'Inglés',
      spanish: 'Español',
      swahili: 'Suajili',
      pushNotifications: 'Notificaciones Push',
      emailAlerts: 'Alertas de Correo',
      autoRefresh: 'Actualización Automática',
      enableRefresh: 'Habilitar Actualización',
      refreshInterval: 'Intervalo',
      seconds: 'segundos',
      resetSettings: 'Restablecer',
      allSettings: 'todos los ajustes',
      confirmReset: '¿Está seguro de que desea restablecer todos los ajustes?',
      resetSuccess: '¡Ajustes restablecidos con éxito!',
      settingsSaved: '¡Ajustes guardados con éxito!',
      emailConfirmation: 'Se ha enviado un correo de confirmación',
      themeChanged: 'Tema cambiado',
      languageChanged: 'Idioma cambiado',
      notificationsEnabled: 'Notificaciones habilitadas',
      notificationsDisabled: 'Notificaciones deshabilitadas',
      refreshEnabled: 'Actualización habilitada',
      refreshDisabled: 'Actualización deshabilitada',
      receiveNotifications: 'Recibir notificaciones en el navegador',
      receiveEmailAlerts: 'Recibir alertas de correo',
      updateDataAutomatically: 'Actualizar datos automáticamente',
      revenueEvolution: 'Evolución de Ingresos',
      projectDistribution: 'Distribución de Proyectos',
      addUserModal: 'Agregar Nuevo Usuario',
      fullName: 'Nombre Completo',
      enterName: 'Ingrese el nombre del usuario',
      enterEmail: 'correo@ejemplo.com',
      userRole: 'Rol',
      clientRole: 'Cliente',
      adminRole: 'Administrador',
      moderatorRole: 'Moderador',
      subscriptionType: 'Tipo de Suscripción',
      basicPlan: 'Básico',
      premiumPlan: 'Premium',
      enterprisePlan: 'Empresarial',
      projectDetails: 'Detalles del Proyecto',
      manageProjectTitle: 'Gestionar Proyecto',
      projectStatus: 'Estado del Proyecto',
      projectDescription: 'Descripción',
      projectObjectives: 'Objetivos',
      listObjectives: 'Listar objetivos del proyecto',
      enterDescription: 'Describa el proyecto...',
      enterObjectives: 'Listar objetivos del proyecto...',
      projectUpdated: 'Proyecto actualizado',
      projectDeleted: 'Proyecto eliminado',
      confirmDelete: '¿Está seguro de que desea eliminar?',
      downloadReport: 'Descargar',
      reportGenerated: 'Informe generado',
      fileDownloaded: 'Archivo descargado'
    },
    sw: {
      dashboard: 'Dashibodi ya Msimamizi',
      subtitle: 'Usimamizi wa jumla wa jukwaa la INITAM',
      overview: 'Muhtasari Jumla',
      users: 'Usimamizi wa Watumiaji',
      payments: 'Uthibitishaji wa Malipo',
      projects: 'Usimamizi wa Miradi',
      reports: 'Ripoti na Uhamisho',
      notifications: 'Kituo cha Taarifa',
      settings: 'Mipangilio',
      logout: 'Toka',
      totalUsers: 'Jumla ya Watumiaji',
      monthlyRevenue: 'Mapato ya Kila Mwezi',
      pendingPayments: 'Malipo Yanayosubiri',
      satisfactionRate: 'Kiwango cha Ridhaa',
      addUser: 'Ongeza Mtumiaji',
      export: 'Hamisha',
      validateAll: 'Thibitisha Yote',
      viewDetails: 'Ona Maelezo',
      manageProject: 'Simamizi Mradi',
      download: 'Pakua',
      save: 'Hifadhi',
      cancel: 'Ghairi',
      delete: 'Futa',
      active: 'Amilifu',
      pending: 'Inasubiri',
      validated: 'Imethibitishwa',
      rejected: 'Imekataliwa',
      name: 'Jina',
      email: 'Barua pepe',
      role: 'Jukumu',
      subscription: 'Usajili',
      registrationDate: 'Tarehe ya Usajili',
      status: 'Hali',
      actions: 'Hatua',
      user: 'Mtumiaji',
      project: 'Mradi',
      amount: 'Kiasi',
      date: 'Tarehe',
      method: 'Njia',
      revenue: 'Mapato',
      growth: 'Ukuaji',
      lastLogin: 'Kuingia Mwisho',
      adminPanel: 'Paneli ya Msimamizi',
      welcome: 'Karibu',
      financialReports: 'Ripoti za Kifedha',
      usageReports: 'Ripoti za Matumizi',
      monthlyReport: 'Ripoti ya Mwezi',
      quarterlyReport: 'Ripoti ya Robo',
      annualReport: 'Ripoti ya Mwaka',
      activeUsers: 'Watumiaji Amilifu',
      transactions: 'Muamala',
      projectPerformance: 'Uendeshaji wa Miradi',
      period: 'Kipindi',
      format: 'Muundo',
      lightTheme: 'Mwanga',
      darkTheme: 'Giza',
      autoTheme: 'Otomatiki',
      french: 'Kifaransa',
      english: 'Kiingereza',
      spanish: 'Kihispania',
      swahili: 'Kiswahili',
      pushNotifications: 'Arifa za Push',
      emailAlerts: 'Arifa za Barua pepe',
      autoRefresh: 'Onyesha upya Otomatiki',
      enableRefresh: 'Wezesha Onyesha upya',
      refreshInterval: 'Kipindi',
      seconds: 'sekunde',
      resetSettings: 'Rekebisha',
      allSettings: 'mipangilio yote',
      confirmReset: 'Una uhakika unataka kurekebisha mipangilio yote?',
      resetSuccess: 'Mipangilio imeerekebishwa vizuri!',
      settingsSaved: 'Mipangilio imehifadhiwa vizuri!',
      emailConfirmation: 'Barua pepe cha uthibitisho imetumwa',
      themeChanged: 'Mandhari imebadilishwa',
      languageChanged: 'Lugha imebadilishwa',
      notificationsEnabled: 'Arifa zimezinduliwa',
      notificationsDisabled: 'Arifa zimezimewa',
      refreshEnabled: 'Onyesha upya imezinduliwa',
      refreshDisabled: 'Onyesha upya imezimewa',
      receiveNotifications: 'Pokea arifa kwenye kivinjani',
      receiveEmailAlerts: 'Pokea arifa za barua pepe',
      updateDataAutomatically: 'Sasisha data otomatiki',
      revenueEvolution: 'Maendeleo ya Mapato',
      projectDistribution: 'Usambishaji wa Miradi',
      addUserModal: 'Ongeza Mtumiaji Mpya',
      fullName: 'Jina Kamili',
      enterName: 'Ingiza jina la mtumiaji',
      enterEmail: 'barua@mfano.com',
      userRole: 'Jukumu',
      clientRole: 'Mteja',
      adminRole: 'Msimamizi',
      moderatorRole: 'Mshauri',
      subscriptionType: 'Aina ya Usajili',
      basicPlan: 'Msingi',
      premiumPlan: 'Kiwango cha Juu',
      enterprisePlan: 'Kampuni',
      projectDetails: 'Maelezo ya Mradi',
      manageProjectTitle: 'Simamizi Mradi',
      projectStatus: 'Hali ya Mradi',
      projectDescription: 'Maelezo',
      projectObjectives: 'Lengo',
      listObjectives: 'Ora lengo la mradi',
      enterDescription: 'Elezea mradi...',
      enterObjectives: 'Ora lengo la mradi...',
      projectUpdated: 'Mradi umeasasishwa',
      projectDeleted: 'Mradi imefutwa',
      confirmDelete: 'Una uhakika unataka kufuta mradi?',
      downloadReport: 'Pakua',
      reportGenerated: 'Ripoti imezalishwa',
      fileDownloaded: 'Faili limepakuliwa'
    }
  }
  
  const t = translations[adminSettings.language] || translations.fr
  
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'client',
    subscription: 'Basic'
  })
  const [users, setUsers] = useState([
    { id: 1, name: 'M mike', email: 'mike@email.com', registrationDate: '2024-03-10', status: 'active', subscription: 'Premium' },
    { id: 2, name: 'Kamathe Wesley', email: 'marie@email.com', registrationDate: '2024-03-11', status: 'active', subscription: 'Premium' },
    { id: 3, name: 'Mr Jovan', email: 'ahmad@email.com', registrationDate: '2024-03-12', status: 'pending', subscription: 'Basic' },
    { id: 4, name: 'Mapendo Roméo', email: 'fatou@email.com', registrationDate: '2024-03-13', status: 'active', subscription: 'Premium' }
  ])

  // État pour les paiements
  const [pendingPayments, setPendingPayments] = useState([
    { id: 1, user: 'M mike', project: 'Starlink', amount: 15000, date: '2024-03-15', method: 'Orange Money', status: 'pending' },
    { id: 2, user: 'Kamathe Wesley', project: 'Bois', amount: 10000, date: '2024-03-14', method: 'MTN', status: 'pending' },
    { id: 3, user: 'Mr Jovan', project: 'Eau', amount: 8000, date: '2024-03-13', method: 'Airtel Money', status: 'pending' },
    { id: 4, user: 'Mapendo Roméo', project: 'Starlink', amount: 15000, date: '2024-03-12', method: 'Orange Money', status: 'pending' }
  ])

  // Fonctions pour gérer les utilisateurs
  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const userToAdd = {
        id: users.length + 1,
        name: newUser.name,
        email: newUser.email,
        registrationDate: new Date().toISOString().split('T')[0],
        status: 'active',
        subscription: newUser.subscription
      }
      setUsers([...users, userToAdd])
      setNewUser({ name: '', email: '', role: 'client', subscription: 'Basic' })
      setShowAddUserModal(false)
    }
  }

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId))
  }

  // Fonctions pour gérer les paiements
  const handleExportPayments = () => {
    // Créer le contenu CSV
    const csvContent = [
      ['ID', 'Utilisateur', 'Projet', 'Montant', 'Date', 'Méthode', 'Statut'],
      ...pendingPayments.map(payment => [
        payment.id,
        payment.user,
        payment.project,
        payment.amount,
        payment.date,
        payment.method,
        payment.status
      ])
    ].map(row => row.join(',')).join('\n')

    // Créer le blob et télécharger
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `paiements_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleValidateAllPayments = () => {
    // Mettre à jour tous les paiements en attente
    const updatedPayments = pendingPayments.map(payment => ({
      ...payment,
      status: 'validated'
    }))
    setPendingPayments(updatedPayments)
    
    // Afficher une confirmation
    alert(`${updatedPayments.length} paiements ont été validés avec succès !`)
  }

  const handleValidatePayment = (paymentId) => {
    // Valider un paiement spécifique
    const updatedPayments = pendingPayments.map(payment => 
      payment.id === paymentId 
        ? { ...payment, status: 'validated' }
        : payment
    )
    setPendingPayments(updatedPayments)
  }

  const handleRejectPayment = (paymentId) => {
    // Rejeter un paiement spécifique
    const updatedPayments = pendingPayments.map(payment => 
      payment.id === paymentId 
        ? { ...payment, status: 'rejected' }
        : payment
    )
    setPendingPayments(updatedPayments)
  }

  // Fonctions pour gérer les projets
  const handleViewProjectDetails = (project) => {
    setSelectedProject(project)
    setShowProjectDetailsModal(true)
  }

  const handleManageProject = (project) => {
    setSelectedProject(project)
    setShowProjectManageModal(true)
  }

  const handleUpdateProjectStatus = (projectId, newStatus) => {
    const updatedProjects = projects.map(project => 
      project.id === projectId 
        ? { ...project, status: newStatus }
        : project
    )
    // Mettre à jour la liste des projets
    // Note: Dans une vraie application, cela devrait appeler une API
    console.log('Projet mis à jour:', updatedProjects.find(p => p.id === projectId))
  }

  const handleDeleteProject = (projectId) => {
    // Supprimer un projet
    const updatedProjects = projects.filter(project => project.id !== projectId)
    // Note: Dans une vraie application, cela devrait appeler une API
    console.log('Projet supprimé:', projectId)
  }

  // Fonctions pour gérer les rapports et exports
  const handleDownloadReport = (report) => {
    // Simuler le téléchargement d'un rapport selon le format
    const timestamp = new Date().toISOString().split('T')[0]
    const filename = `${report.name.replace(/\s+/g, '_')}_${timestamp}.${report.format.toLowerCase()}`
    
    // Créer des données de démonstration selon le type de rapport
    let content = ''
    
    if (report.format === 'CSV') {
      // Données CSV
      content = generateCSVReport(report.name)
      downloadFile(content, filename, 'text/csv')
    } else if (report.format === 'Excel') {
      // Simuler un fichier Excel (dans une vraie app, utiliser une librairie comme xlsx)
      content = generateExcelReport(report.name)
      downloadFile(content, filename, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    } else if (report.format === 'PDF') {
      // Simuler un fichier PDF (dans une vraie app, utiliser une librairie comme jsPDF)
      content = generatePDFReport(report.name)
      downloadFile(content, filename, 'application/pdf')
    }
    
    // Afficher une confirmation
    alert(`Rapport "${report.name}" téléchargé avec succès !\nFichier: ${filename}`)
  }

  const generateCSVReport = (reportName) => {
    // Générer des données CSV selon le type de rapport
    if (reportName.includes('Utilisateurs actifs')) {
      return [
        ['Date', 'Utilisateurs', 'Nouveaux', 'Actifs', 'Premium'],
        ...Array.from({length: 30}, (_, i) => {
          const date = new Date()
          date.setDate(date.getDate() - (29 - i))
          return [
            date.toLocaleDateString('fr-FR'),
            Math.floor(Math.random() * 1000) + 8000,
            Math.floor(Math.random() * 100) + 50,
            Math.floor(Math.random() * 500) + 7000,
            Math.floor(Math.random() * 200) + 1000
          ]
        })
      ].map(row => row.join(',')).join('\n')
    } else if (reportName.includes('Transactions')) {
      return [
        ['ID', 'Date', 'Utilisateur', 'Montant', 'Projet', 'Statut'],
        ...Array.from({length: 100}, (_, i) => [
          `TRX${String(i + 1).padStart(6, '0')}`,
          new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR'),
          `User${Math.floor(Math.random() * 1000)}`,
        (Math.random() * 50000 + 5000).toFixed(2),
        ['Starlink', 'Bois', 'Eau'][Math.floor(Math.random() * 3)],
        ['Validé', 'En attente', 'Rejeté'][Math.floor(Math.random() * 3)]
        ])
      ].map(row => row.join(',')).join('\n')
    }
    return 'Données CSV générées'
  }

  const generateExcelReport = (reportName) => {
    // Simuler un fichier Excel (dans une vraie app, utiliser xlsx library)
    const data = {
      'Rapport': reportName,
      'Date de génération': new Date().toLocaleDateString('fr-FR'),
      'Période': 'Mars 2024',
      'Total revenus': '125,000,000 FC',
      'Total utilisateurs': '10,523',
      'Croissance': '+15%'
    }
    return JSON.stringify(data, null, 2)
  }

  const generatePDFReport = (reportName) => {
    // Simuler un fichier PDF (dans une vraie app, utiliser jsPDF library)
    return `%PDF-1.4
%âãÏÓ
1 0 obj
<<
/Title (${reportName})
/Creator (INITAM Admin Dashboard)
/Producer (INITAM Report Generator)
/CreationDate (D:${new Date().toISOString().replace(/[-:]/g, '')})
>>
endobj
trailer
<<
/Root 1 0 R
>>
%%EOF`
  }

  const downloadFile = (content, filename, mimeType) => {
    const blob = new Blob([content], { type: mimeType })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', filename)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  // Fonctions pour gérer les paramètres
  const handleUpdateSettings = (key, value) => {
    // Mettre à jour les paramètres temporaires
    const newTempSettings = { ...tempSettings, [key]: value }
    setTempSettings(newTempSettings)
    
    // Appliquer immédiatement pour la langue et les notifications
    if (key === 'language') {
      // Changer la langue immédiatement
      setAdminSettings(prev => ({ ...prev, language: value }))
      const langNames = {
        fr: 'Français',
        en: 'English',
        es: 'Español',
        sw: 'Kiswahili'
      }
      showNotification('Langue changée', `La langue a été changée pour ${langNames[value]}`)
    } else if (key === 'notifications' && value) {
      if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            showNotification('Notifications activées', 'Vous recevrez maintenant des notifications')
          } else {
            showNotification('Permission refusée', 'Les notifications ne sont pas autorisées')
          }
        })
      }
    } else if (key === 'autoRefresh') {
      if (value) {
        showNotification('Rafraîchissement activé', `Les données se rafraîchiront toutes les ${tempSettings.refreshInterval} secondes`)
      } else {
        showNotification('Rafraîchissement désactivé', 'Le rafraîchissement automatique est arrêté')
      }
    }
  }

  const showNotification = (title, message) => {
    if (tempSettings.notifications && 'Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body: message,
        icon: '/logo initiam original.png',
        badge: '/logo initiam original.png'
      })
    }
    // Afficher aussi une alerte comme fallback
    console.log(`${title}: ${message}`)
  }

  const handleSaveSettings = () => {
    // Appliquer seulement le thème (la langue est déjà appliquée)
    applyTheme(tempSettings.theme)
    
    // Sauvegarder tous les paramètres dans localStorage
    localStorage.setItem('adminSettings', JSON.stringify(tempSettings))
    
    // Mettre à jour les paramètres actifs (sauf la langue qui est déjà à jour)
    setAdminSettings(prev => ({
      ...prev,
      theme: tempSettings.theme,
      notifications: tempSettings.notifications,
      emailAlerts: tempSettings.emailAlerts,
      autoRefresh: tempSettings.autoRefresh,
      refreshInterval: tempSettings.refreshInterval
    }))
    
    // Envoyer un email de confirmation (simulation)
    if (tempSettings.emailAlerts) {
      console.log('Email de confirmation envoyé à:', adminInfo.email)
      showNotification('Paramètres sauvegardés', 'Un email de confirmation a été envoyé')
    } else {
      showNotification('Paramètres sauvegardés', 'Vos paramètres ont été sauvegardés avec succès')
    }
    
    setShowSettingsModal(false)
    
    // Notification spéciale pour le thème seulement
    if (tempSettings.theme !== adminSettings.theme) {
      showNotification('Thème changé', `Le thème a été changé pour ${tempSettings.theme === 'dark' ? 'sombre' : tempSettings.theme === 'light' ? 'clair' : 'automatique'}`)
    }
  }

  const handleResetSettings = () => {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser tous les paramètres ?')) {
      const defaultSettings = {
        theme: 'light',
        language: 'fr',
        notifications: true,
        emailAlerts: true,
        autoRefresh: false,
        refreshInterval: 30
      }
      
      // Appliquer immédiatement
      applyTheme(defaultSettings.theme)
      
      setTempSettings(defaultSettings)
      setAdminSettings(defaultSettings)
      localStorage.setItem('adminSettings', JSON.stringify(defaultSettings))
      
      showNotification('Paramètres réinitialisés', 'Tous les paramètres ont été réinitialisés aux valeurs par défaut')
      alert('Paramètres réinitialisés avec succès !')
    }
  }
  
  // Réinitialiser les paramètres temporaires quand le modal s'ouvre
  React.useEffect(() => {
    if (showSettingsModal) {
      setTempSettings(adminSettings)
    }
  }, [showSettingsModal, adminSettings])

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

  const menuItems = [
    { id: 'overview', label: 'Aperçu Général', icon: BarChart3 },
    { id: 'users', label: 'Gestion des Utilisateurs', icon: Users },
    { id: 'payments', label: 'Validation des Paiements', icon: CreditCard },
    { id: 'projects', label: 'Gestion des Projets', icon: FileText },
    { id: 'reports', label: 'Rapports et Export', icon: TrendingUp },
    { id: 'notifications', label: 'Centre de Notifications', icon: Bell }
  ]

  const projects = [
    { id: 1, name: 'Starlink', status: 'Actif', users: 4735, revenue: 56250000, growth: '+15%' },
    { id: 2, name: 'Bois', status: 'Actif', users: 3157, revenue: 37500000, growth: '+22%' },
    { id: 3, name: 'Eau', status: 'Actif', users: 2631, revenue: 31250000, growth: '+18%' }
  ]

  const notifications = [
    { title: 'Nouveaux utilisateurs en attente', message: '5 utilisateurs nécessitent une validation', time: 'Il y a 2 heures', type: 'warning' },
    { title: 'Paiements en attente', message: '234 paiements doivent être validés', time: 'Il y a 3 heures', type: 'warning' },
    { title: 'Mise à jour système', message: 'La plateforme sera mise à jour ce soir', time: 'Il y a 5 heures', type: 'info' },
    { title: 'Objectif mensuel atteint', message: 'Les revenus de Mars ont dépassé les prévisions', time: 'Hier', type: 'success' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg h-screen overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center space-x-3 p-6 border-b border-gray-200">
            <img 
              src="/logo initiam original.png" 
              alt="INITAM" 
              className="w-8 h-8 rounded-lg"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-900">INITAM</h1>
              <p className="text-sm text-gray-500">Admin Panel</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-initam-blue text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span>{t[item.id] || item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* User Info */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">AD</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{adminInfo.name}</p>
                <p className="text-xs text-gray-500">{adminInfo.email}</p>
                <p className="text-xs text-gray-500">Dernière connexion: {adminInfo.lastLogin}</p>
              </div>
            </div>
          </div>

          {/* Settings and Logout */}
          <div className="border-t border-gray-200 p-4 space-y-2">
            <button 
              onClick={() => setShowSettingsModal(true)}
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Settings size={20} />
              <span>{t.settings}</span>
            </button>
            <Link to="/" className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <LogOut size={20} />
              <span>{t.logout}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.dashboard}</h1>
                <p className="text-gray-600">{t.subtitle}</p>
              </div>
              <div className="flex items-center space-x-4">
                {/* Indicateur de rafraîchissement automatique */}
                {adminSettings.autoRefresh && (
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Auto-refresh: {adminSettings.refreshInterval}s</span>
                    <span className="text-xs text-gray-500">
                      (Dernier: {lastRefresh.toLocaleTimeString()})
                    </span>
                  </div>
                )}
                
                {/* Indicateur de thème */}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Thème: {adminSettings.theme === 'dark' ? '🌙' : adminSettings.theme === 'light' ? '☀️' : '🔄'}</span>
                </div>
                
                {/* Indicateur de langue */}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>🌍 {adminSettings.language.toUpperCase()}</span>
                </div>
                
                {/* Indicateur de notifications */}
                {adminSettings.notifications && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>🔔</span>
                  </div>
                )}
              </div>
            </div>
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
                    <p className="text-gray-600">{t.totalUsers}</p>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="text-green-600" size={24} />
                      </div>
                      <span className="text-sm text-green-600">+22%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{(globalStats.monthlyRevenue / 1000).toLocaleString()}K</h3>
                    <p className="text-gray-600">{t.monthlyRevenue}</p>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Clock className="text-yellow-600" size={24} />
                      </div>
                      <span className="text-sm text-green-600">+8%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{globalStats.pendingPayments}</h3>
                    <p className="text-gray-600">{t.pendingPayments}</p>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="text-purple-600" size={24} />
                      </div>
                      <span className="text-sm text-green-600">+12%</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{globalStats.satisfactionRate}%</h3>
                    <p className="text-gray-600">{t.satisfactionRate}</p>
                  </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Évolution des Revenus</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="revenue" stroke="#0066cc" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribution des Projets</h3>
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
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <div className="card p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Gestion des Utilisateurs</h2>
                    <button 
                      onClick={() => setShowAddUserModal(true)}
                      className="btn-primary"
                    >
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
                        {users.map((user) => (
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
                                <div className={`w-2 h-2 rounded-full mr-2 ${
                                  user.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                                }`}></div>
                                {user.status === 'active' ? 'Actif' : 'En attente'}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <button className="text-blue-600 hover:text-blue-800 transition-colors">
                                  <UserCheck size={16} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteUser(user.id)}
                                  className="text-red-600 hover:text-red-800 transition-colors"
                                >
                                  <Trash2 size={16} />
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
                      <button 
                        onClick={handleExportPayments}
                        className="btn-secondary"
                      >
                        <Download size={20} className="mr-2" />
                        Exporter
                      </button>
                      <button 
                        onClick={handleValidateAllPayments}
                        className="btn-primary"
                      >
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
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                payment.status === 'validated' ? 'bg-green-100 text-green-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                <div className={`w-2 h-2 rounded-full mr-2 ${
                                  payment.status === 'pending' ? 'bg-yellow-500' :
                                  payment.status === 'validated' ? 'bg-green-500' :
                                  'bg-red-500'
                                }`}></div>
                                {payment.status === 'pending' ? 'En attente' :
                                 payment.status === 'validated' ? 'Validé' : 'Rejeté'}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <button 
                                  onClick={() => handleValidatePayment(payment.id)}
                                  className="text-green-600 hover:underline text-sm"
                                  title="Valider le paiement"
                                >
                                  <CheckCircle size={16} />
                                </button>
                                <button 
                                  onClick={() => handleRejectPayment(payment.id)}
                                  className="text-red-600 hover:underline text-sm"
                                  title="Rejeter le paiement"
                                >
                                  <XCircle size={16} />
                                </button>
                                <button className="text-initam-blue hover:underline text-sm" title="Voir les détails">
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
                    {projects.map((project, index) => (
                      <div key={project.id} className="card p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            {project.status}
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
                            <span className="text-sm text-gray-600">Croissance</span>
                            <span className="font-medium text-green-600">{project.growth}</span>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <button 
                            onClick={() => handleViewProjectDetails(project)}
                            className="w-full btn-secondary text-sm"
                          >
                            Voir les détails
                          </button>
                          <button 
                            onClick={() => handleManageProject(project)}
                            className="w-full btn-secondary text-sm"
                          >
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
                          <button 
                            onClick={() => handleDownloadReport(report)}
                            className="btn-secondary text-sm"
                          >
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
                          <button 
                            onClick={() => handleDownloadReport(report)}
                            className="btn-secondary text-sm"
                          >
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
                    {notifications.map((notification, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          notification.type === 'success' ? 'bg-green-100' :
                          notification.type === 'warning' ? 'bg-orange-100' :
                          'bg-blue-100'
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

      {/* Modal d'ajout d'utilisateur */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Ajouter un nouvel utilisateur</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                  placeholder="Entrez le nom de l'utilisateur"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                  placeholder="email@exemple.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rôle
                </label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                >
                  <option value="client">Client</option>
                  <option value="admin">Administrateur</option>
                  <option value="moderator">Modérateur</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type d'abonnement
                </label>
                <select
                  value={newUser.subscription}
                  onChange={(e) => setNewUser({ ...newUser, subscription: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                >
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setShowAddUserModal(false)}
                className="flex-1 btn-secondary"
              >
                Annuler
              </button>
              <button
                onClick={handleAddUser}
                disabled={!newUser.name || !newUser.email}
                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Ajouter l'utilisateur
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal de détails du projet */}
      {showProjectDetailsModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Détails du Projet</h3>
            
            <div className="space-y-6">
              {/* En-tête du projet */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{selectedProject.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
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
                  <X size={24} />
                </button>
              </div>

              {/* Statistiques principales */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Utilisateurs</span>
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{selectedProject.users.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Actifs ce mois</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Revenus</span>
                    <DollarSign className="text-green-600" size={20} />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{(selectedProject.revenue / 1000000).toFixed(1)}M FC</p>
                  <p className="text-sm text-gray-500">Total cumulé</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Croissance</span>
                    <TrendingUp className="text-purple-600" size={20} />
                  </div>
                  <p className="text-2xl font-bold text-green-600">{selectedProject.growth}</p>
                  <p className="text-sm text-gray-500">Ce mois</p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Description</h4>
                <p className="text-gray-600">
                  Le projet {selectedProject.name} est une initiative majeure de INITAM visant à 
                  transformer l'accès aux services essentiels dans les zones rurales. 
                  Notre approche combine innovation technologique et durabilité environnementale 
                  pour créer un impact positif et durable sur les communautés locales.
                </p>
              </div>

              {/* Actions */}
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    setShowProjectDetailsModal(false)
                    handleManageProject(selectedProject)
                  }}
                  className="btn-primary"
                >
                  <Settings size={20} className="mr-2" />
                  Gérer le projet
                </button>
                <button
                  onClick={() => setShowProjectDetailsModal(false)}
                  className="btn-secondary"
                >
                  Fermer
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal de gestion du projet */}
      {showProjectManageModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Gérer le Projet</h3>
            
            <div className="space-y-6">
              {/* Statut du projet */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Statut du projet</label>
                <select
                  value={selectedProject.status}
                  onChange={(e) => {
                    const newStatus = e.target.value
                    setSelectedProject({ ...selectedProject, status: newStatus })
                    handleUpdateProjectStatus(selectedProject.id, newStatus)
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                >
                  <option value="Actif">Actif</option>
                  <option value="En maintenance">En maintenance</option>
                  <option value="Suspendu">Suspendu</option>
                  <option value="Archivé">Archivé</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={selectedProject.description || ''}
                  onChange={(e) => setSelectedProject({ ...selectedProject, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent resize-none"
                  rows={4}
                  placeholder="Décrivez le projet..."
                />
              </div>

              {/* Objectifs */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Objectifs</label>
                <textarea
                  value={selectedProject.objectives || ''}
                  onChange={(e) => setSelectedProject({ ...selectedProject, objectives: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent resize-none"
                  rows={3}
                  placeholder="Listez les objectifs du projet..."
                />
              </div>

              {/* Actions */}
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    setShowProjectManageModal(false)
                    alert('Projet mis à jour avec succès !')
                  }}
                  className="btn-primary"
                >
                  <CheckCircle size={20} className="mr-2" />
                  Sauvegarder
                </button>
                <button
                  onClick={() => {
                    setShowProjectManageModal(false)
                    setShowProjectDetailsModal(true)
                  }}
                  className="btn-secondary"
                >
                  <Eye size={20} className="mr-2" />
                  Voir les détails
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Êtes-vous sûr de vouloir supprimer le projet "${selectedProject.name}" ?`)) {
                      handleDeleteProject(selectedProject.id)
                      setShowProjectManageModal(false)
                    }
                  }}
                  className="btn-secondary text-red-600 hover:bg-red-50"
                >
                  <Trash2 size={20} className="mr-2" />
                  Supprimer
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal des paramètres */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Paramètres Administrateur</h3>
            
            <div className="space-y-6">
              {/* Thème */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Thème</label>
                <select
                  value={tempSettings.theme}
                  onChange={(e) => handleUpdateSettings('theme', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                >
                  <option value="light">Clair</option>
                  <option value="dark">Sombre</option>
                  <option value="auto">Automatique</option>
                </select>
              </div>

              {/* Langue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Langue</label>
                <select
                  value={tempSettings.language}
                  onChange={(e) => handleUpdateSettings('language', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="sw">Kiswahili</option>
                </select>
              </div>

              {/* Notifications */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Notifications</h4>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Notifications push</p>
                    <p className="text-sm text-gray-500">Recevoir des notifications dans le navigateur</p>
                  </div>
                  <button
                    onClick={() => handleUpdateSettings('notifications', !tempSettings.notifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      tempSettings.notifications ? 'bg-initam-blue' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        tempSettings.notifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Alertes email</p>
                    <p className="text-sm text-gray-500">Recevoir des alertes par email</p>
                  </div>
                  <button
                    onClick={() => handleUpdateSettings('emailAlerts', !tempSettings.emailAlerts)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      tempSettings.emailAlerts ? 'bg-initam-blue' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        tempSettings.emailAlerts ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Rafraîchissement automatique */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Rafraîchissement automatique</h4>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Activer le rafraîchissement</p>
                    <p className="text-sm text-gray-500">Mettre à jour les données automatiquement</p>
                  </div>
                  <button
                    onClick={() => handleUpdateSettings('autoRefresh', !tempSettings.autoRefresh)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      tempSettings.autoRefresh ? 'bg-initam-blue' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        tempSettings.autoRefresh ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {tempSettings.autoRefresh && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Intervalle (secondes)
                    </label>
                    <input
                      type="number"
                      value={tempSettings.refreshInterval}
                      onChange={(e) => handleUpdateSettings('refreshInterval', parseInt(e.target.value))}
                      min="10"
                      max="300"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <button
                  onClick={handleSaveSettings}
                  className="btn-primary"
                >
                  <CheckCircle size={20} className="mr-2" />
                  Sauvegarder
                </button>
                <button
                  onClick={handleResetSettings}
                  className="btn-secondary text-red-600 hover:bg-red-50"
                >
                  <Archive size={20} className="mr-2" />
                  Réinitialiser
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
    </div>
  )
}

export default AdminDashboard
