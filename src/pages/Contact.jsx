import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, User, MessageSquare, Clock, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'normal'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const subjects = [
    'Support technique',
    'Question sur les abonnements',
    'Problème de paiement',
    'Demande d\'information',
    'Réclamation',
    'Autre'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi du message
    setTimeout(() => {
      // Stocker le message pour l'admin
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]')
      const newMessage = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'pending',
        from: 'user'
      }
      messages.push(newMessage)
      localStorage.setItem('contactMessages', JSON.stringify(messages))

      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-8 text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Message envoyé avec succès !</h2>
            <p className="text-gray-600 mb-8">
              Votre message a bien été envoyé à notre équipe administrative. 
              Nous vous répondrons dans les plus brefs délais à l'adresse : {formData.email}
            </p>
            <div className="bg-initam-light rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-initam-blue mb-4">Prochaines étapes</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Mail className="text-initam-blue" size={20} />
                  <span className="text-gray-700">Réception par email dans quelques minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-initam-blue" size={20} />
                  <span className="text-gray-700">Réponse sous 24-48 heures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="text-initam-blue" size={20} />
                  <span className="text-gray-700">Suivi disponible dans votre espace client</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: '',
                  email: '',
                  subject: '',
                  message: '',
                  priority: 'normal'
                })
              }}
              className="btn-primary"
            >
              Envoyer un autre message
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-initam-blue to-initam-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Notre équipe administrative est à votre écoute pour répondre à toutes vos questions 
              et vous accompagner dans vos projets INITAM.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-initam-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-initam-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">admin@initiam.org</p>
                    <p className="text-sm text-gray-500">Réponse sous 24-48h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-initam-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-initam-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">+243 999 711 054</p>
                    <p className="text-sm text-gray-500">Lun-Ven 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-initam-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-initam-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">Goma, DRC Congo</p>
                    <p className="text-sm text-gray-500">Bureau principal</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-initam-light rounded-lg">
                <h3 className="font-semibold text-initam-blue mb-2">Heures de support</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lundi - Vendredi</span>
                    <span className="font-medium">9h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samedi</span>
                    <span className="font-medium">9h - 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dimanche</span>
                    <span className="font-medium">Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priorité
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'low', label: 'Basse', color: 'bg-gray-100' },
                      { value: 'normal', label: 'Normale', color: 'bg-blue-100' },
                      { value: 'high', label: 'Haute', color: 'bg-red-100' }
                    ].map((priority) => (
                      <label
                        key={priority.value}
                        className={`relative flex items-center justify-center px-4 py-3 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.priority === priority.value
                            ? 'border-initam-blue bg-initam-light'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="priority"
                          value={priority.value}
                          checked={formData.priority === priority.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="font-medium">{priority.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    * Champs obligatoires
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
