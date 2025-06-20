"use client"
import React from "react"
import { MapPin, Phone, Clock, CheckCircle, Star, Navigation, Truck, Users, Award } from "lucide-react"



export default function Locations() {
const cities = [
  {
    name: "Surrey",
    province: "BC",
    population: "568,322",
    coverage: "Full Coverage",
    responseTime: "Same Day",
    featured: true,
    description: "Reliable junk removal services throughout Surrey.",
    services: ["Residential", "Commercial", "Construction"],
    coordinates: { lat: 49.1044, lng: -122.8011 },
  },
  {
    name: "New Westminster",
    province: "BC",
    population: "70,996",
    coverage: "Full Coverage",
    responseTime: "Same Day",
    featured: true,
    description: "Serving the Royal City with fast and efficient junk solutions.",
    services: ["Residential", "Commercial"],
    coordinates: { lat: 49.2057, lng: -122.9110 },
  },
  {
    name: "Langly",
    province: "BC",
    population: "132,603",
    coverage: "Full Coverage",
    responseTime: "Next Day",
    featured: true,
    description: "Eco-conscious junk disposal in Langly and nearby areas.",
    services: ["Residential", "Commercial", "Construction"],
    coordinates: { lat: 49.1044, lng: -122.6604 },
  },
  {
    name: "White Rock",
    province: "BC",
    population: "21,939",
    coverage: "Full Coverage",
    responseTime: "Next Day",
    featured: false,
    description: "Coastal junk removal with care for White Rock residents.",
    services: ["Residential", "Commercial"],
    coordinates: { lat: 49.0253, lng: -122.8026 },
  },
  {
    name: "Vancouver",
    province: "BC",
    population: "675,218",
    coverage: "Full Coverage",
    responseTime: "Same Day",
    featured: false,
    description: "Our flagship location serving the Greater Vancouver Area with comprehensive junk removal services.",
    services: ["Residential", "Commercial", "Construction", "Electronics"],
    coordinates: { lat: 49.2827, lng: -123.1207 },
  },
  {
    name: "North Vancouver",
    province: "BC",
    population: "58,985",
    coverage: "Full Coverage",
    responseTime: "Same Day",
    featured: false,
    description: "Fast, eco-friendly junk solutions in North Vancouver.",
    services: ["Residential", "Commercial"],
    coordinates: { lat: 49.3200, lng: -123.0736 },
  },
  {
    name: "West Vancouver",
    province: "BC",
    population: "44,122",
    coverage: "Full Coverage",
    responseTime: "Next Day",
    featured: false,
    description: "Premium junk removal tailored to West Vancouver homes.",
    services: ["Residential", "Commercial"],
    coordinates: { lat: 49.3277, lng: -123.1558 },
  },
  {
    name: "Richmond",
    province: "BC",
    population: "209,937",
    coverage: "Full Coverage",
    responseTime: "Same Day",
    featured: false,
    description: "Expert junk handling in the heart of Richmond.",
    services: ["Residential", "Commercial", "Construction"],
    coordinates: { lat: 49.1666, lng: -123.1336 },
  },
  {
    name: "Maple Ridge",
    province: "BC",
    population: "91,799",
    coverage: "Full Coverage",
    responseTime: "Next Day",
    featured: false,
    description: "Maple Ridge's go-to for professional junk removal.",
    services: ["Residential", "Commercial"],
    coordinates: { lat: 49.2196, lng: -122.6019 },
  },
  {
    name: "Pit Meadows",
    province: "BC",
    population: "19,146",
    coverage: "Partial Coverage",
    responseTime: "2-3 Days",
    featured: false,
    description: "Growing our reach in the quiet town of Pit Meadows.",
    services: ["Residential"],
    coordinates: { lat: 49.2336, lng: -122.6906 },
  },
  {
    name: "Coquitlam",
    province: "BC",
    population: "148,625",
    coverage: "Full Coverage",
    responseTime: "Same Day",
    featured: false,
    description: "Full-service junk removal for Coquitlam’s growing communities.",
    services: ["Residential", "Commercial", "Construction"],
    coordinates: { lat: 49.2846, lng: -122.7932 },
  },
  {
    name: "Burnaby",
    province: "BC",
    population: "249,125",
    coverage: "Full Coverage",
    responseTime: "Same Day",
    featured: false,
    description: "Fast, friendly, and affordable junk pickup in Burnaby.",
    services: ["Residential", "Commercial"],
    coordinates: { lat: 49.2488, lng: -122.9805 },
  },
  {
    name: "Tsawwassen",
    province: "BC",
    population: "21,588",
    coverage: "Partial Coverage",
    responseTime: "2-3 Days",
    featured: false,
    description: "Expanding cleanup operations in Tsawwassen and Delta areas.",
    services: ["Residential"],
    coordinates: { lat: 49.0124, lng: -123.0820 },
  },
]

  const featuredCities = cities.filter((city) => city.featured)
  const otherCities = cities.filter((city) => !city.featured)

  const stats = [
    { icon: MapPin, label: "Cities Served", value: "12+" },
    { icon: Truck, label: "Trucks in Fleet", value: "2" },
    { icon: Users, label: "Happy Customers", value: "10K+" },
    { icon: Award, label: "Years Experience", value: "3+" },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
   

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2 mb-6">
              <Navigation className="text-green-400" size={20} />
              <span className="text-green-400 font-medium">Serving Communities Across Canada</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Our Service Locations
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From coast to coast, 404-JUNK provides reliable, weight-based junk removal services across major Canadian
              cities.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                  <IconComponent className="text-green-400 mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Locations</h2>
            <p className="text-gray-400">Our primary service areas with full coverage and same-day availability</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredCities.map((city, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                        <p className="text-green-100">
                          {city.province} • Pop. {city.population}
                        </p>
                      </div>
                      <div className="bg-white/20 rounded-full p-2">
                        <MapPin className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="text-green-200" size={16} />
                        <span className="text-green-100 text-sm">{city.coverage}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="text-green-200" size={16} />
                        <span className="text-green-100 text-sm">{city.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-4">{city.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">SERVICES AVAILABLE</h4>
                    <div className="flex flex-wrap gap-2">
                      {city.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
 <a href="/book-now">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <Phone size={16} />
                    <span>Book Service</span>
                  </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Locations Grid */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Service Areas</h2>
            <p className="text-gray-400">Complete coverage across Canada's major metropolitan areas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCities.map((city, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{city.name}</h3>
                    <p className="text-gray-400 text-sm">
                      {city.province} • {city.population}
                    </p>
                  </div>
                  <MapPin className="text-green-400" size={20} />
                </div>

                <p className="text-gray-300 text-sm mb-4">{city.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <CheckCircle
                      className={`${city.coverage === "Full Coverage" ? "text-green-400" : "text-yellow-400"}`}
                      size={16}
                    />
                    <span className="text-gray-300 text-sm">{city.coverage}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="text-gray-400" size={16} />
                    <span className="text-gray-300 text-sm">{city.responseTime}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {city.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
 <a href="/book-now">
                <button className="w-full border border-green-600 hover:bg-green-600 text-green-400 hover:text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                  Get Quote
                </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Placeholder */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Coverage Map</h2>
            <p className="text-gray-400">Interactive map showing our service areas across Canada</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center">
            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl p-12 mb-6">
              <MapPin className="text-green-400 mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-bold mb-2">Interactive Map Coming Soon</h3>
              <p className="text-gray-400">
                We're working on an interactive map to help you visualize our service coverage in your area.
              </p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Request Service Area
            </button>
          </div>
        </div>
      </section>

      {/* Expansion Notice */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-600/30 rounded-2xl p-8">
            <Star className="text-green-400 mx-auto mb-4" size={48} />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See Your City?</h2>
            <p className="text-gray-400 mb-6 text-lg">
              We're rapidly expanding across Canada! If your city isn't listed, let us know and we'll prioritize
              bringing our weight-based pricing model to your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Request New Location
              </button>
              <button className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-8 py-3 rounded-full font-semibold transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
