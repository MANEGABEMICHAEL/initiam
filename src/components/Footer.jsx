import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo initiam original.png" 
                alt="INITAM" 
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-xl font-bold text-gradient">INITAM</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              INITAM est une organisation innovante dédiée au développement de solutions 
              durables pour les communautés en Afrique. Nous transformons les défis en opportunités 
              grâce à la technologie et l'innovation.
            </p>
            
            {/* Réseaux Sociaux */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/initam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/initam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/initam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com/initam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/projets" className="text-gray-300 hover:text-white transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-initam-blue" size={20} />
                <div>
                  <p className="text-gray-300">admin@initiam.org</p>
                  <p className="text-gray-400 text-sm">support@initiam.org</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-initam-blue" size={20} />
                <div>
                  <p className="text-gray-300">+243 999 711 054</p>
                  <p className="text-gray-400 text-sm">Lun-Ven 9h-18h</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-initam-blue" size={20} />
                <div>
                  <p className="text-gray-300">Goma, DRC Congo</p>
                  <p className="text-gray-400 text-sm">Bureau principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Initiam. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions d'Utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions Légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
