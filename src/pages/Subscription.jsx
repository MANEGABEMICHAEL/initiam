import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Wifi, 
  Trees, 
  Droplets, 
  CheckCircle, 
  Smartphone, 
  CreditCard, 
  Calendar,
  Users,
  TrendingUp,
  Shield,
  Star,
  ArrowRight,
  Info
} from 'lucide-react'

const Subscription = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedPlan, setSelectedPlan] = useState('monthly')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const navigate = useNavigate()

  const projects = [
    {
      id: 'starlink',
      title: 'Starlink',
      subtitle: 'Connectivité Satellite',
      icon: Wifi,
      color: 'from-blue-500 to-blue-600',
      description: 'Internet haut débit via satellite',
      features: [
        'Débit jusqu\'à 150 Mbps',
        'Latence inférieure à 40ms',
        'Installation professionnelle',
        'Support technique 24/7'
      ],
      plans: {
        monthly: { price: 15000, name: 'Abonnement Mensuel' },
        quarterly: { price: 40000, name: 'Abonnement Trimestriel', discount: '10%' },
        yearly: { price: 150000, name: 'Abonnement Annuel', discount: '20%' }
      }
    },
    {
      id: 'bois',
      title: 'Bois',
      subtitle: 'Gestion Forestière',
      icon: Trees,
      color: 'from-green-500 to-green-600',
      description: 'Gestion durable des ressources forestières',
      features: [
        'Accès aux ressources forestières',
        'Formation professionnelle',
        'Certification FSC',
        'Support technique'
      ],
      plans: {
        monthly: { price: 10000, name: 'Abonnement Mensuel' },
        quarterly: { price: 27000, name: 'Abonnement Trimestriel', discount: '10%' },
        yearly: { price: 100000, name: 'Abonnement Annuel', discount: '20%' }
      }
    },
    {
      id: 'eau',
      title: 'Eau',
      subtitle: 'Accès Eau Potable',
      icon: Droplets,
      color: 'from-cyan-500 to-cyan-600',
      description: 'Eau potable et systèmes d\'irrigation',
      features: [
        'Eau potable illimitée',
        'Systèmes d\'irrigation',
        'Tests qualité mensuels',
        'Maintenance régulière'
      ],
      plans: {
        monthly: { price: 8000, name: 'Abonnement Mensuel' },
        quarterly: { price: 21000, name: 'Abonnement Trimestriel', discount: '10%' },
        yearly: { price: 80000, name: 'Abonnement Annuel', discount: '20%' }
      }
    }
  ]

  const paymentMethods = [
    {
      id: 'orange',
      name: 'Orange Money',
      icon: '🟠',
      code: '*144#',
      color: 'bg-orange-500',
      instructions: [
        'Composez *144#',
        'Choisissez "Paiement"',
        'Entrez le numéro bénéficiaire',
        'Confirmez le montant',
        'Entrez votre code secret'
      ]
    },
    {
      id: 'airtel',
      name: 'Airtel Money',
      icon: '🔵',
      code: '*110#',
      color: 'bg-blue-500',
      instructions: [
        'Composez *110#',
        'Sélectionnez "Paiements"',
        'Entrez le numéro bénéficiaire',
        'Confirmez le montant',
        'Validez avec votre code'
      ]
    },
    {
      id: 'mtn',
      name: 'M-PESA',
      icon: '🟢',
      code: '*111#',
      color: 'bg-green-500',
      instructions: [
        'Composez *111#',
        'Choisissez "Envoyer de l\'argent"',
        'Entrez le numéro bénéficiaire',
        'Confirmez le montant',
        'Entrez votre code PIN'
      ]
    }
  ]

  const handleSubscription = () => {
    if (!selectedProject || !paymentMethod || !phoneNumber) {
      alert('Veuillez remplir tous les champs')
      return
    }
    setShowConfirmation(true)
  }

  const handlePayment = () => {
    // Simulation de paiement
    setTimeout(() => {
      navigate('/tableau-de-bord?subscription=success')
    }, 2000)
  }

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-8"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirmation d'Abonnement</h2>
              <p className="text-gray-600">Vérifiez les détails avant de procéder au paiement</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Détails de l'abonnement</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projet</span>
                    <span className="font-medium">{selectedProject?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Plan</span>
                    <span className="font-medium">{selectedProject?.plans[selectedPlan]?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Moyen de paiement</span>
                    <span className="font-medium">{paymentMethods.find(m => m.id === paymentMethod)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Numéro</span>
                    <span className="font-medium">{phoneNumber}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Total à payer</span>
                      <span className="font-bold text-xl text-initam-blue">
                        {selectedProject?.plans[selectedPlan]?.price.toLocaleString()} FC
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-initam-light rounded-lg p-6">
                <h3 className="font-semibold text-initam-blue mb-4">Instructions de paiement</h3>
                <div className="space-y-2">
                  {paymentMethods.find(m => m.id === paymentMethod)?.instructions.map((instruction, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-6 h-6 bg-initam-blue text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{instruction}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 btn-secondary"
                >
                  Modifier
                </button>
                <button
                  onClick={handlePayment}
                  className="flex-1 btn-primary"
                >
                  Procéder au paiement
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/projets" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft size={20} className="mr-2" />
                Retour aux projets
              </Link>
              <div className="h-8 w-px bg-gray-300"></div>
              <h1 className="text-xl font-semibold text-gray-900">Abonnement aux Projets</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              selectedProject ? 'bg-initam-blue text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
            </div>
            <div className={`w-24 h-1 ${
              selectedProject ? 'bg-initam-blue' : 'bg-gray-200'
            }`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              selectedProject && selectedPlan ? 'bg-initam-blue text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
            </div>
            <div className={`w-24 h-1 ${
              selectedProject && selectedPlan ? 'bg-initam-blue' : 'bg-gray-200'
            }`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              paymentMethod ? 'bg-initam-blue text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              3
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choisissez votre projet</h2>
            <div className="space-y-6">
              {projects.map((project) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.id}
                    whileHover={{ scale: 1.02 }}
                    className={`card p-6 cursor-pointer border-2 transition-all ${
                      selectedProject?.id === project.id 
                        ? 'border-initam-blue bg-initam-light' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                        <p className="text-gray-600 mb-3">{project.description}</p>
                        <div className="space-y-2">
                          {project.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="text-green-500" size={16} />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Subscription Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {selectedProject ? (
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Plan d'abonnement</h3>
                  
                  {/* Plan Selection */}
                  <div className="space-y-3 mb-6">
                    {Object.entries(selectedProject.plans).map(([key, plan]) => (
                      <div
                        key={key}
                        onClick={() => setSelectedPlan(key)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedPlan === key
                            ? 'border-initam-blue bg-initam-light'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{plan.name}</h4>
                            {plan.discount && (
                              <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mt-1">
                                Économisez {plan.discount}
                              </span>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-gray-900">
                              {plan.price.toLocaleString()} FC
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Payment Method */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Moyen de paiement</h4>
                    <div className="space-y-2">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-3 rounded-lg border-2 cursor-pointer transition-all flex items-center space-x-3 ${
                            paymentMethod === method.id
                              ? 'border-initam-blue bg-initam-light'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className={`w-8 h-8 ${method.color} rounded-full flex items-center justify-center text-white font-bold`}>
                            {method.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{method.name}</div>
                            <div className="text-sm text-gray-500">{method.code}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+243 XX XX XX XX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-initam-blue focus:border-transparent"
                    />
                  </div>

                  {/* Summary */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Total</span>
                      <span className="text-2xl font-bold text-gray-900">
                        {selectedProject.plans[selectedPlan]?.price.toLocaleString()} FC
                      </span>
                    </div>
                    <button
                      onClick={handleSubscription}
                      disabled={!paymentMethod || !phoneNumber}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      S'abonner maintenant
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="card p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Info className="text-gray-400" size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Sélectionnez un projet</h3>
                  <p className="text-gray-600">Choisissez un projet pour voir les plans d'abonnement disponibles</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
