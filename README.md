# INITAM - Plateforme de Gestion de Projets

Une application web moderne et professionnelle pour la gestion des projets INITAM, développée avec React, TailwindCSS et Framer Motion.

## 🚀 Fonctionnalités

### 🏠 Page d'Accueil
- Présentation des projets Starlink, Bois et Eau
- Statistiques en temps réel
- Design moderne avec animations fluides
- Appels à l'action clairs

### 📊 Tableau de Bord Client
- Gestion des abonnements
- Suivi des paiements Mobile Money
- Statistiques personnelles
- Notifications en temps réel
- Accès aux détails de chaque projet

### 🛡️ Tableau de Bord Admin
- Gestion globale des utilisateurs
- Validation des paiements
- Statistiques globales
- Rapports et exports
- Gestion des projets

### 🎯 Pages de Projets
- Pages détaillées pour chaque projet
- Statistiques et graphiques interactifs
- Informations complètes sur les objectifs et réalisations
- Timeline de progression

### 🔐 Système d'Authentification
- Login/Inscription avec choix de rôle
- Interface adaptée selon le type d'utilisateur
- Support Mobile Money (Orange, Airtel, M-PESA)

## 🛠️ Technologies Utilisées

- **React 18** - Framework JavaScript moderne
- **Vite** - Build tool ultra-rapide
- **React Router** - Gestion du routing
- **TailwindCSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Recharts** - Graphiques et statistiques
- **Lucide React** - Icônes modernes

## 🎨 Design et Thème

- **Couleurs principales** : Bleu (#0066cc) et Vert (#00a86b)
- **Design responsive** : Adapté pour mobile, tablette et desktop
- **Animations fluides** : Transitions et micro-interactions
- **Interface moderne** : Design épuré et professionnel

## 📁 Structure du Projet

```
src/
├── components/
│   └── Navbar.jsx          # Barre de navigation
├── pages/
│   ├── Home.jsx            # Page d'accueil
│   ├── Projects.jsx        # Liste des projets
│   ├── ProjectDetail.jsx   # Détails d'un projet
│   ├── Login.jsx           # Connexion/Inscription
│   ├── Dashboard.jsx       # Tableau de bord client
│   ├── AdminDashboard.jsx  # Tableau de bord admin
│   └── About.jsx           # Page à propos
├── App.jsx                 # Composant principal
├── main.jsx               # Point d'entrée
└── index.css              # Styles globaux
```

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 16+ installé

### Installation
```bash
# Cloner le projet
git clone <repository-url>
cd Prijet_Initiam

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Ouvrir l'application
L'application sera disponible à `http://localhost:5173`

## 📱 Fonctionnalités Mobile Money

L'application intègre parfaitement les solutions de paiement mobile :
- **Orange Money** : Code USSD `*144#`
- **Airtel Money** : Code USSD `*110#`
- **M-PESA** : Code USSD `*111#`

## 🔧 Personnalisation

### Thème de Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
```javascript
colors: {
  'initam-blue': '#0066cc',
  'initam-green': '#00a86b',
  'initam-dark': '#1a365d',
  'initam-light': '#e6f3ff',
}
```

### Animations
Les animations personnalisées sont dans `tailwind.config.js` :
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
```

## 📊 Projets Gérés

### 🛰️ Starlink
- Connectivité internet haut débit par satellite
- Déploiement dans les zones rurales
- Objectif : 150 villages connectés

### 🌳 Bois
- Gestion forestière durable
- Reforestation et transformation locale
- Objectif : 10,000 hectares reboisés

### 💧 Eau
- Accès à l'eau potable
- Systèmes d'irrigation modernes
- Objectif : 500 villages desservis

## 🔄 Workflow de Développement

1. **Développement Frontend** ✅
   - Interface utilisateur complète
   - Animations et interactions
   - Design responsive

2. **Intégration Backend** (À faire)
   - API RESTful
   - Base de données
   - Authentification sécurisée

3. **Déploiement** (À faire)
   - Configuration production
   - CI/CD
   - Monitoring

## 📈 Statistiques Clés

- **Utilisateurs** : 50,000+
- **Projets actifs** : 3
- **Taux de satisfaction** : 95%
- **Support** : 24/7

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Commit les changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 📞 Contact

- **Site web** : [initam.org](https://initam.org)
- **Email** : contact@initam.org
- **Téléphone** : +243 999 711 054

---

**Développé avec ❤️ par l'équipe INITAM**
