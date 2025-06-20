import React, { useState } from "react"

import bg from "../assets/bg.jpg"
import one from "../assets/1.avif"
import two from "../assets/2.avif"
import three from "../assets/3.avif"
import {
  Scale,
  Home,
  Building,
  MapPin,
  Star,
  Phone,
  ArrowRight,
  CheckCircle,
  Recycle,
  Sofa,
  Hammer,
  Zap,
  Package,
  ChevronDown,
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function HomePage() {
  const [selectedService, setSelectedService] = useState(null)
  const [selectedWeight, setSelectedWeight] = useState(null)
  const [showEstimate, setShowEstimate] = useState(false)

  const services = [
       {
      id: "pull up",
      name: "Pull Up",
      icon: Home,
      description: "Yard waste, outdoor furniture, sheds",
    },
    {
      id: "outside",
      name: "Outside + House",
      icon: Home,
      description: "Yard waste, outdoor furniture, sheds",
    },
    {
      id: "inside",
      name: "Inside + House",
      icon: Building,
      description: "Furniture, appliances, household items",
    },
    {
      id: "apartment",
      name: "Apartment",
      icon: MapPin,
      description: "Small spaces, furniture, personal items",
    },
  ]

  const weightOptions = [
    { range: "Under 200 lbs", price: 181, id: "under200" },
    { range: "200-400 lbs", price: 263, id: "200-400" },
    { range: "400-600 lbs", price: 345, id: "400-600" },
    { range: "600-800 lbs", price: 427, id: "600-800" },
    { range: "800-1000 lbs", price: 509, id: "800-1000" },
    { range: "Over 1000 lbs", price: "Call for quote", id: "over1000" },
  ]

  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Vancouver, BC",
      rating: 5,
      text: "Amazing service! They charged exactly what they quoted based on weight. No hidden fees, very professional team.",
    },
    {
      name: "Mike Chen",
      location: "Toronto, ON",
      rating: 5,
      text: "Finally, a junk removal company that's transparent about pricing. The weight-based system is so much fairer than flat rates.",
    },
    {
      name: "Emma Wilson",
      location: "Calgary, AB",
      rating: 5,
      text: "Quick, efficient, and honest pricing. They even helped me separate recyclables. Highly recommend 404-JUNK!",
    },
  ]

  const cities = [
    "Surrey",
    "New Westminster",
    "Langly",
    "White Rock",
    "Vancouver",
    "North Vancouver",
    "West Vancouver",
    "Richmond",
    "Maple Ridge",
    "Pit Meadows",
    "Coquitlam",
    "Burnaby",
    "Tsawwassen",
  ]

  const newsItems = [
    {
      title: "404-JUNK Expands to 5 New Canadian Cities",
      date: "December 15, 2024",
      image: two,
      excerpt:
        "We're excited to announce our expansion into five new markets across Canada, bringing fair weight-based pricing to more communities.",
    },
    {
      title: "Recycling Initiative Saves 10,000 Tons from Landfills",
      date: "November 28, 2024",
      image: three,
      excerpt:
        "Our commitment to environmental responsibility has diverted over 10,000 tons of materials from landfills through our recycling partnerships.",
    },
    {
      title: "Customer Satisfaction Reaches All-Time High",
      date: "November 10, 2024",
      image: one,
      excerpt:
        "Thanks to our transparent weight-based pricing model, customer satisfaction has reached 98% - the highest in the industry.",
    },
  ]

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setSelectedWeight(null)
    setShowEstimate(false)
  }

  const handleWeightSelect = (weight) => {
    setSelectedWeight(weight)
    setShowEstimate(true)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
   

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
        <div   style={{ backgroundImage: `url(${bg})` }}
         className="absolute inset-0 bg-cover bg-center opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2 mb-6">
              <Scale className="text-green-400" size={20} />
              <span className="text-green-400 font-medium">Pay by Weight, Not by Chance</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              404-JUNK
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Canada's most transparent junk removal service. We weigh your items and charge accordingly - no surprises,
              no flat fees, just fair pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href="/rates"><button className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Free Estimate</span>
                <ArrowRight size={20} />
              </button>
              </a>
              <button className="border border-gray-600  hover:border-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone size={20} />
                <span>604-505-5865</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-green-400" size={32} />
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Weight-Based Pricing?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Traditional junk removal companies charge flat rates regardless of how much you actually have. We believe
              in fair, transparent pricing based on the actual weight of your items.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-green-500/50 transition-all duration-300">
              <Scale className="text-green-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Accurate Weighing</h3>
              <p className="text-gray-400">
                Professional-grade scales ensure precise measurements. You only pay for what you actually dispose of.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-green-500/50 transition-all duration-300">
              <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Transparent Pricing</h3>
              <p className="text-gray-400">
                No hidden fees, no surprises. Our rate is $0.41/lb after the first 200lbs, with a base service fee of
                $181.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-green-500/50 transition-all duration-300">
              <Recycle className="text-green-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Eco-Friendly</h3>
              <p className="text-gray-400">
                We sort and recycle whenever possible, ensuring minimal environmental impact for your junk removal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimation Section */}
      <section id="pricing" className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Service Types</h2>
            <p className="text-xl text-gray-400">From residential cleanouts to commercial hauling, our wide range of junk removal services is designed to help you reclaim your space quickly, affordably, and stress-free.</p>
          </div>
     

          {/* Service Selection */}
          <div className="mb-12">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      selectedService?.id === service.id
                        ? "border-green-500 bg-green-500/10"
                        : "border-gray-700 bg-gray-800/50 hover:border-green-500/50"
                    }`}
                  >
                    <IconComponent className="text-green-400 mx-auto mb-4" size={48} />
                    <h4 className="text-xl font-bold mb-2">{service.name}</h4>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </button>
                )
              })}
            </div>
          </div>

    

  
        </div>
      </section>

      {/* News and Culture Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h2>
            <p className="text-xl text-gray-400">Stay updated with our latest news and company culture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300"
              >
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-green-400 text-sm mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.excerpt}</p>
                  <button className="text-green-400 hover:text-green-300 font-semibold flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-400">Real reviews from satisfied customers across Canada</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-gray-400 text-sm">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section id="locations" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Locations We Serve</h2>
            <p className="text-xl text-gray-400">Proudly serving communities across Canada</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cities.map((city, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <MapPin className="text-green-400 mx-auto mb-2" size={24} />
                <div className="font-semibold">{city}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Don't see your city? We're expanding rapidly!</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              Request Service in Your Area
            </button>
          </div>
        </div>
      </section>

      {/* What We Remove Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-green-400 font-bold text-lg mb-2">WE REMOVE, PICKUP, AND HAUL:</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Remove</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <Sofa className="text-green-400 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Residential</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Couches</li>
                <li>• Exercise Equipment</li>
                <li>• Furniture</li>
                <li>• Grills</li>
                <li>• Yard Waste</li>
                <li>• Pianos</li>
                <li>• Pool Tables</li>
                <li>• Swing Sets</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <Hammer className="text-green-400 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Construction</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Fences</li>
                <li>• Furnaces</li>
                <li>• Pallets</li>
                <li>• Cardboards</li>
                <li>• Carpet</li>
                <li>• Decks</li>
                <li>• Wood</li>
                <li>• Drywall</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <Zap className="text-green-400 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Electronics</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Fridges</li>
                <li>• Freezers</li>
                <li>• Televisions</li>
                <li>• Computers</li>
                <li>• Monitors</li>
                <li>• Washers</li>
                <li>• Dryers</li>
                <li>• Appliances</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <Package className="text-green-400 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Everything Else</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Hot Tubs</li>
                <li>• Clutter</li>
                <li>• Sheds</li>
                <li>• Tires</li>
                <li>• Satellite Dishes</li>
                <li>• Scrap Metal</li>
                <li>• Lawnmowers</li>
                <li>• And much more...</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
