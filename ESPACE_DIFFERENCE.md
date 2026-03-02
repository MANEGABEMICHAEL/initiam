# 🔐 Différenciation Espaces Client vs Admin

## 📋 Vue d'Ensemble

L'application INITAM propose deux espaces distincts avec des fonctionnalités adaptées à chaque type d'utilisateur.

---

## 👤 Espace Client

### **Accès**
- **Email** : `client@initam.org`
- **Mot de passe** : `initam2024`
- **URL** : `/tableau-de-bord`

### **Fonctionnalités**
- ✅ **Tableau de Bord Personnel**
  - Vue des statistiques individuelles
  - Activité récente personnelle
  - Graphiques d'utilisation personnelle

- ✅ **Mon Abonnement**
  - Gestion de l'abonnement Premium
  - Historique des paiements personnels
  - Méthodes de paiement configurées

- ✅ **Mes Projets**
  - Accès aux projets souscrits
  - Suivi de l'utilisation par projet
  - Statuts des paiements par projet

- ✅ **Paiements**
  - Effectuer des paiements Mobile Money
  - Historique des transactions personnelles
  - Téléchargement des reçus

- ✅ **Mes Notifications**
  - Notifications personnelles uniquement
  - Rappels de paiements
  - Mises à jour des services

### **Interface**
- Design épuré et orienté utilisateur
- Informations personnelles mises en avant
- Actions limitées au périmètre client

---

## 🛡️ Espace Administrateur

### **Accès**
- **Email** : `admin@initam.org`
- **Mot de passe** : `admin2024`
- **URL** : `/admin`

### **Fonctionnalités**
- ✅ **Aperçu Général**
  - Statistiques globales de la plateforme
  - Vue d'ensemble de tous les utilisateurs
  - Revenus et performances globales

- ✅ **Gestion des Utilisateurs**
  - Liste complète des utilisateurs
  - Validation des nouveaux comptes
  - Gestion des statuts et abonnements
  - Actions sur les comptes (activer/désactiver)

- ✅ **Validation des Paiements**
  - Validation manuelle des paiements
  - Gestion des paiements en attente
  - Export des transactions
  - Statuts de validation

- ✅ **Gestion des Projets**
  - Administration des 3 projets (Starlink, Bois, Eau)
  - Statistiques par projet
  - Configuration des services
  - Rapports de performance

- ✅ **Rapports et Export**
  - Génération de rapports financiers
  - Export des données utilisateurs
  - Rapports d'utilisation
  - Statistiques détaillées

- ✅ **Notifications Système**
  - Gestion des notifications globales
  - Alertes système
  - Communications aux utilisateurs
  - Journal des activités

### **Interface**
- Interface de gestion complète
- Outils d'administration avancés
- Contrôle total sur la plateforme

---

## 🔒 Sécurité et Permissions

### **Client**
- `read` : Lire ses propres données
- `manage_own_profile` : Gérer son profil
- `make_payments` : Effectuer des paiements

### **Admin**
- `read` : Lire toutes les données
- `write` : Modifier les données
- `delete` : Supprimer des éléments
- `manage_users` : Gérer les utilisateurs
- `validate_payments` : Valider les paiements

---

## 🎯 Points Clés

1. **Authentification Automatique** : Le système détecte le rôle selon les identifiants
2. **Redirection Intelligente** : Chaque type d'utilisateur est redirigé vers son espace
3. **Interfaces Adaptées** : Design et fonctionnalités spécifiques à chaque rôle
4. **Sécurité** : Permissions granulaires et accès contrôlés
5. **Pas de Confusion** : L'espace admin est caché des clients

---

*Architecture conçue pour une séparation claire des responsabilités*
