import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Wifi, Trees, Droplets, Users, TrendingUp, MapPin, Calendar, CreditCard } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 'starlink',
      title: 'Starlink',
      subtitle: 'Connectivité Satellite',
      description: 'Déploiement de l\'internet haut débit via satellite dans les zones rurales et isolées. Ce projet vise à réduire la fracture numérique en offrant un accès internet fiable et abordable.',
      icon: Wifi,
      color: 'from-blue-500 to-blue-600',
      image: '/api/placeholder/400/300',
      features: [
        'Débit jusqu\'à 150 Mbps',
        'Latence inférieure à 40ms',
        'Installation professionnelle',
        'Support technique 24/7'
      ],
      stats: {
        users: '10,000+',
        villages: '150+',
        satisfaction: '95%',
        uptime: '99.5%'
      },
      status: 'Actif',
      launchDate: 'Janvier 2024'
    },
    {
      id: 'bois',
      title: 'Bois',
      subtitle: 'Gestion Forestière Durable',
      description: 'Programme de gestion durable des ressources forestières avec transformation locale du bois. Nous promouvons la reforestation et créons des emplois locaux.',
      icon: Trees,
      color: 'from-green-500 to-green-600',
      image: '/api/placeholder/400/300',
      features: [
        'Reforestation active',
        'Transformation locale',
        'Certification FSC',
        'Formation professionnelle'
      ],
      stats: {
        hectares: '5,000+',
        jobs: '500+',
        trees: '1M+',
        sustainability: '100%'
      },
      status: 'Actif',
      launchDate: 'Mars 2024'
    },
    {
      id: 'eau',
      title: 'Eau',
      subtitle: 'Accès à l\'Eau Potable',
      description: 'Installation de systèmes d\'approvisionnement en eau potable et d\'irrigation modernes pour les communautés rurales. Focus sur la qualité et l\'accessibilité.',
      icon: Droplets,
      color: 'from-cyan-500 to-cyan-600',
      image: '/api/placeholder/400/300',
      features: [
        'Filtration avancée',
        'Systèmes d\'irrigation',
        'Maintenance régulière',
        'Tests qualité mensuels'
      ],
      stats: {
        villages: '200+',
        liters: '2M+/jour',
        health: '98%',
        coverage: '85%'
      },
      status: 'Actif',
      launchDate: 'Février 2024'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Projets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos initiatives innovantes qui transforment positivement les communautés 
            et créent un impact durable pour les générations futures.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card overflow-hidden"
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="text-white" size={32} />
                      </div>
                      <span className="px-3 py-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                        {project.status}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-blue-100">{project.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-initam-green rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.stats).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Launch Date */}
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar size={14} className="mr-1" />
                    Lancement: {project.launchDate}
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/projet/${project.id}`}
                    className="w-full btn-primary text-center flex items-center justify-center"
                  >
                    Voir les détails
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                  <Link
                    to="/abonnement"
                    className="w-full btn-secondary text-center flex items-center justify-center"
                  >
                    S'abonner
                    <CreditCard className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-initam-blue to-initam-green rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Intéressé par un projet ?
            </h2>
            <p className="text-lg mb-6 text-blue-100">
              Connectez-vous pour accéder aux tableaux de bord détaillés et suivre l'évolution en temps réel
            </p>
            <Link to="/connexion" className="btn-primary bg-white text-initam-blue hover:bg-gray-100">
              Accéder à l'Espace Client
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
