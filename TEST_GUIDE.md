# 🧪 Guide de Test - Espaces Client et Admin

## 🔐 Procédure de Test Complète

### 1. Démarrage de l'Application
```bash
npm run dev
```
Ouvrir : `http://localhost:5173`

---

## 👤 Test Espace Client

### **Connexion**
1. Aller dans "Espace Client" dans la navigation
2. Entrer les identifiants :
   - **Email** : `client@initam.org`
   - **Mot de passe** : `initam2024`
3. Cliquer sur "Se connecter"

### **Vérifications**
✅ **Redirection** : Doit rediriger vers `/tableau-de-bord`
✅ **Header** : "Tableau de Bord Client" visible
✅ **Sidebar** : Menu client avec 5 options
✅ **Contenu** : Dashboard avec données complètes

### **Fonctionnalités à Tester**
- [ ] **Tableau de Bord** : Stats, graphiques, transactions
- [ ] **Mon Abonnement** : Historique paiements, méthodes
- [ ] **Mes Projets** : Starlink, Bois, Eau
- [ ] **Paiements** : Mobile Money, transactions
- [ ] **Mes Notifications** : Alertes personnelles

---

## 🛡️ Test Espace Admin

### **Connexion**
1. Aller dans "Espace Client" dans la navigation
2. Entrer les identifiants :
   - **Email** : `admin@initam.org`
   - **Mot de passe** : `admin2024`
3. Cliquer sur "Se connecter"

### **Vérifications**
✅ **Redirection** : Doit rediriger vers `/admin`
✅ **Header** : "Tableau de Bord Administrateur" visible
✅ **Sidebar** : Menu admin avec 6 options
✅ **Contenu** : Dashboard avec données globales

### **Fonctionnalités à Tester**
- [ ] **Aperçu Général** : Statistiques globales, revenus
- [ ] **Gestion des Utilisateurs** : Liste, validation, actions
- [ ] **Validation des Paiements** : Approuver/rejeter paiements
- [ ] **Gestion des Projets** : Admin des 3 projets
- [ ] **Rapports et Export** : Générer des rapports
- [ ] **Notifications Système** : Gestion globale

---

## 🔍 Points de Contrôle

### **Différenciation Visuelle**
- **Client** : Interface bleue/verte, focus personnel
- **Admin** : Interface de gestion, outils avancés

### **Sécurité**
- [ ] Client ne peut pas accéder à `/admin`
- [ ] Admin ne peut pas accéder à `/tableau-de-bord` (sauf pour test)
- [ ] Navigation admin cachée des clients

### **Données**
- [ ] Client voit ses données personnelles
- [ ] Admin voit toutes les données globales
- [ ] Graphiques et statistiques fonctionnels

---

## 🚨 Dépannage

### **Si l'interface est vide :**
1. Vérifier la console (F12) pour erreurs
2. Rafraîchir la page (Ctrl+F5)
3. Vider le cache du navigateur
4. Redémarrer le serveur de développement

### **Si la connexion échoue :**
1. Vérifier les identifiants (attention aux fautes de frappe)
2. Vérifier que le serveur tourne bien
3. Consulter la console pour messages d'erreur

---

## 📊 Résultats Attendus

### **Espace Client**
- Dashboard personnel avec 4 cartes de statistiques
- Graphiques d'activité et d'utilisation
- Tableau des transactions récentes
- Accès aux fonctionnalités client

### **Espace Admin**
- Dashboard global avec 4 métriques principales
- Graphiques de revenus et distribution
- Listes d'utilisateurs et paiements
- Outils de gestion complète

---

## ✅ Checklist Finale

- [ ] Les deux espaces sont accessibles avec les bons identifiants
- [ ] L'interface client est complète et fonctionnelle
- [ ] L'interface admin est complète et fonctionnelle
- [ ] La différenciation entre les espaces est claire
- [ ] Les graphiques et données s'affichent correctement
- [ ] Les navigations fonctionnent correctement

---

*En cas de problème, vérifier la console du navigateur pour les erreurs JavaScript*
