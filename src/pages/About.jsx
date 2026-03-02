import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Users, Heart, Target, Award, Mail, Phone, MapPin, ExternalLink, Facebook, Twitter, Linkedin } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous sommes passionnés par l\'innovation et le développement durable de nos communautés.'
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'Notre mission est de réduire la fracture numérique et améliorer la qualité de vie through technology.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous nous engageons à fournir des services de haute qualité avec un impact mesurable.'
    }
  ]

  const team = [
    {
      name: 'Mr. Jovan',
      role: 'Fondeur & Coordonateur',
      description: 'Visionnaire avec 15+ années d\'expérience dans le développement technologique et social.',
      avatar: 'MJ'
    },
    {
      name: 'Wesley Kamathe',
      role: 'Directeur Technique',
      description: 'Expert en develloppement et solutions technologiques pour les zones rurales.',
      avatar: 'JBK'
    },
    {
      name: 'Grace Mwiza',
      role: 'Directrice des Opérations',
      description: 'Spécialiste de la gestion de projet et du développement communautaire.',
      avatar: 'GM'
    },
    {
      name: 'Ir Michael',
      role: 'Directeur Financier',
      description: 'Expert en finance inclusive et modèles économiques durables.',
      avatar: 'IM'
    }
  ]

  const partners = [
    { name: 'Orange', logo: 'O' },
    { name: 'Airtel', logo: 'A' },
    { name: 'M-PESA', logo: 'M' },
    { name: 'Starlink', logo: 'S' },
    { name: 'UNDP', logo: 'U' },
    { name: 'World Bank', logo: 'W' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                À Propos de INITAM
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Innovation Numérique pour les Technologies et Applications Modernes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://initiam.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary bg-white text-initam-blue hover:bg-gray-100"
                >
                  Visiter initiam.org
                  <ExternalLink className="ml-2" size={20} />
                </a>
                <Link to="/projets" className="btn-secondary">
                  Découvrir nos projets
                </Link>
              </div>
            </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  INITAM est née d'une vision simple mais puissante : utiliser la technologie pour transformer 
                  les communautés et créer un impact durable. Fondée en 2024, notre organisation s'est rapidement 
                  imposée comme un acteur majeur dans le domaine de l'innovation numérique au service du développement.
                </p>
                <p>
                  Nous croyons que l'accès à la technologie, à l'eau potable et à une gestion durable des ressources 
                  naturelles sont des droits fondamentaux. Nos projets Starlink, Bois et Eau incarnent cette vision 
                  en apportant des solutions concrètes aux défis quotidiens des populations rurales.
                </p>
                <p>
                  Chaque jour, nous travaillons avec passion pour réduire la fracture numérique, promouvoir 
                  l'inclusion financière through le mobile money, et créer des opportunités économiques durables 
                  pour les générations futures.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-initam-blue to-initam-green rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50K+</div>
                    <div className="text-blue-100">Utilisateurs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">3</div>
                    <div className="text-blue-100">Projets Actifs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-blue-100">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chaque action et décision chez INITAM
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-initam-blue to-initam-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés dédiés à notre mission commune
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-initam-blue to-initam-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{member.avatar}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-initam-blue font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous collaborons avec les meilleurs pour maximiser notre impact
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-initam-light transition-colors">
                  <span className="text-2xl font-bold text-gray-400">{partner.logo}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contactez-Nous
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous sommes là pour répondre à vos questions et discuter de collaborations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6 text-center"
            >
              <Mail className="text-initam-blue mx-auto mb-4" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">contact@</p>
              <p className="text-gray-600">support@initiam.org</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6 text-center"
            >
              <Phone className="text-initam-blue mx-auto mb-4" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600">+243 999 711 054</p>
              <p className="text-gray-600">+243 996 858 485</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6 text-center"
            >
              <MapPin className="text-initam-blue mx-auto mb-4" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Adresse</h3>
              <p className="text-gray-600">Goma, DRC Congo</p>
              <p className="text-gray-600">Kinshansa, DRC Congo</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-12 h-12 bg-initam-blue text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-initam-blue text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-initam-blue text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
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
              Rejoignez Notre Mission
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Ensemble, nous pouvons créer un avenir meilleur grâce à la technologie et l'innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/connexion" className="btn-primary bg-white text-initam-blue hover:bg-gray-100">
                Devenir Partenaire
              </Link>
              <a 
                href="https://initiam.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                En Savoir Plus
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
