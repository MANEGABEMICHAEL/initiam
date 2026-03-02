import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, TrendingUp, Globe, Wifi, Trees, Droplets } from 'lucide-react'

const Home = () => {
  const projects = [
    {
      id: 'starlink',
      title: 'Starlink',
      description: 'Connectivité internet haut débit via satellite pour les zones rurales',
      icon: Wifi,
      color: 'from-blue-500 to-blue-600',
      stats: { users: '10K+', coverage: '85%', satisfaction: '95%' }
    },
    {
      id: 'bois',
      title: 'Bois',
      description: 'Gestion durable des ressources forestières et transformation du bois',
      icon: Trees,
      color: 'from-green-500 to-green-600',
      stats: { hectares: '5000+', jobs: '500+', sustainability: '100%' }
    },
    {
      id: 'eau',
      title: 'Eau',
      description: 'Accès à l eau potable et systèmes d irrigation modernes',
      icon: Droplets,
      color: 'from-cyan-500 to-cyan-600',
      stats: { villages: '200+', liters: '2M+', health: '98%' }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              INITAM
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Innovation pour un développement durable
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto text-blue-50">
              Nous transformons les communautés à travers des projets innovants dans les domaines 
              de la connectivité, des ressources naturelles et de l'accès à l'eau potable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projets" className="btn-primary">
                Découvrir nos projets
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/abonnement" className="btn-secondary">
                S'abonner maintenant
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '50K+', label: 'Utilisateurs', icon: Users },
              { number: '3', label: 'Projets Actifs', icon: Globe },
              { number: '95%', label: 'Satisfaction', icon: Star },
              { number: '24/7', label: 'Support', icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-initam-blue to-initam-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Projets Phares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque projet est conçu pour avoir un impact durable et transformer positivement les communautés
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card p-8 cursor-pointer"
                >
                  <Link to={`/projet/${project.id}`}>
                    <div className={`w-20 h-20 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-semibold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center text-initam-blue font-semibold">
                      En savoir plus
                      <ArrowRight className="ml-2" size={16} />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à nous rejoindre ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Accédez à votre espace personnel pour suivre vos projets et gérer vos abonnements
            </p>
            <Link to="/connexion" className="btn-primary bg-white text-initam-blue hover:bg-gray-100">
              Se Connecter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
