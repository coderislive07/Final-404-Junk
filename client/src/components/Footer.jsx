import React from "react"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"


const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-green-400 font-bold text-2xl mb-4">404-JUNK</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Canada's premier weight-based junk removal service. We don't charge by chance - we charge by weight,
              ensuring fair and transparent pricing for all our customers.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-400 hover:text-green-400 cursor-pointer transition-colors" size={24} />
              <Twitter className="text-gray-400 hover:text-green-400 cursor-pointer transition-colors" size={24} />
              <Instagram className="text-gray-400 hover:text-green-400 cursor-pointer transition-colors" size={24} />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Residential Removal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Commercial Cleanup
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Construction Debris
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Electronics Disposal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-green-400" />
                <span className="text-gray-400">604-505-5865</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-green-400" />
                <span className="text-gray-400">info@404junk.ca</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-green-400" />
                <span className="text-gray-400">Vancouver, BC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 404-JUNK. All rights reserved. | Licensed & Insured</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
