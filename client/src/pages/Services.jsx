import React from "react"

import {
  Home,
  Building,
  Hammer,
  Zap,
  Package,
  Truck,
  Scale,
  Clock,
  Shield,
  Recycle,
  CheckCircle,
  Phone,
  ArrowRight,
  Sofa,
  TreePine,
  HardHat,
  Monitor,
  Star,
  MapPin,
} from "lucide-react"



export default function Services() {
  const mainServices = [
    {
      id: "residential",
      title: "Residential Junk Removal",
      icon: Home,
      description: "Complete home cleanouts and furniture removal for homeowners and renters.",
      features: [
        "Furniture & Appliance Removal",
        "Basement & Attic Cleanouts",
        "Garage & Shed Clearing",
        "Estate Cleanouts",
        "Moving Assistance",
        "Hoarding Cleanup",
      ],
      pricing: "Starting at $140",
      color: "from-blue-500 to-blue-600",
      popular: true,
    },
    {
      id: "commercial",
      title: "Commercial Services",
      icon: Building,
      description: "Professional junk removal for businesses, offices, and retail spaces.",
      features: [
        "Office Furniture Removal",
        "Retail Space Cleanouts",
        "Warehouse Clearing",
        "Restaurant Equipment",
        "Medical Equipment Disposal",
        "Regular Pickup Services",
      ],
      pricing: "Custom Quotes",
      color: "from-green-500 to-green-600",
      popular: false,
    },
    {
      id: "construction",
      title: "Construction Debris",
      icon: Hammer,
      description: "Safe removal of construction waste and renovation debris.",
      features: [
        "Drywall & Lumber",
        "Flooring Materials",
        "Roofing Materials",
        "Concrete & Brick",
        "Metal & Piping",
        "Renovation Cleanup",
      ],
      pricing: "By Weight",
      color: "from-orange-500 to-orange-600",
      popular: false,
    },
    {
      id: "electronics",
      title: "Electronics Disposal",
      icon: Zap,
      description: "Eco-friendly disposal of electronic waste and appliances.",
      features: [
        "Computer & IT Equipment",
        "TVs & Entertainment Systems",
        "Kitchen Appliances",
        "Washing Machines & Dryers",
        "Air Conditioners",
        "Data Destruction Services",
      ],
      pricing: "Eco-Friendly Rates",
      color: "from-purple-500 to-purple-600",
      popular: false,
    },
  ]

  const additionalServices = [
    {
      icon: Truck,
      title: "Same-Day Service",
      description: "Emergency junk removal available in most areas",
    },
    {
      icon: Scale,
      title: "Weight-Based Pricing",
      description: "Fair pricing based on actual weight, not estimates",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage for your peace of mind",
    },
    {
      icon: Recycle,
      title: "Eco-Friendly Disposal",
      description: "We recycle and donate whenever possible",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book online or call for convenient time slots",
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee on all services",
    },
  ]

  const itemsWeRemove = [
    {
      category: "Furniture",
      icon: Sofa,
      items: ["Sofas & Chairs", "Beds & Mattresses", "Tables & Desks", "Dressers & Cabinets", "Bookshelves"],
    },
    {
      category: "Appliances",
      icon: Zap,
      items: ["Refrigerators", "Washing Machines", "Dryers", "Dishwashers", "Microwaves"],
    },
    {
      category: "Yard Waste",
      icon: TreePine,
      items: ["Tree Branches", "Lawn Equipment", "Garden Tools", "Outdoor Furniture", "Playground Sets"],
    },
    {
      category: "Construction",
      icon: HardHat,
      items: ["Drywall", "Lumber", "Flooring", "Fixtures", "Renovation Debris"],
    },
    {
      category: "Electronics",
      icon: Monitor,
      items: ["Computers", "TVs", "Stereos", "Printers", "Gaming Consoles"],
    },
    {
      category: "Miscellaneous",
      icon: Package,
      items: ["Boxes", "Clothing", "Books", "Toys", "Exercise Equipment"],
    },
  ]

  const testimonials = [
    {
      name: "Jennifer Walsh",
      location: "Vancouver, BC",
      rating: 5,
      text: "404-JUNK helped us clear out our entire basement. The team was professional, and the weight-based pricing saved us hundreds compared to other companies.",
    },
    {
      name: "David Kim",
      location: "Toronto, ON",
      rating: 5,
      text: "Excellent service for our office renovation. They handled everything from old furniture to electronics disposal. Highly recommend!",
    },
    {
      name: "Maria Santos",
      location: "Calgary, AB",
      rating: 5,
      text: "Same-day service when we needed it most. Fair pricing and eco-friendly disposal made this the best choice for our family.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
   

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2 mb-6">
              <Truck className="text-green-400" size={20} />
              <span className="text-green-400 font-medium">Professional Junk Removal Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From residential cleanouts to commercial waste removal, we provide comprehensive junk removal services
              across Canada with transparent, weight-based pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-gray-400">Comprehensive junk removal solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    service.popular
                      ? "border-green-500 bg-green-500/10"
                      : "border-gray-700 bg-gray-800/50 hover:border-green-500/50"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}></div>
                  <div className="relative p-8">
                    <IconComponent className="text-green-400 mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">SERVICES INCLUDED:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-green-400">{service.pricing}</div>
                        <div className="text-sm text-gray-400">Transparent pricing</div>
                      </div>
                  
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose 404-JUNK?</h2>
            <p className="text-gray-400">Additional services and benefits that set us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
                >
                  <IconComponent className="text-green-400 mx-auto mb-4" size={40} />
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Items We Remove */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Remove</h2>
            <p className="text-gray-400">Comprehensive list of items we can haul away</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itemsWeRemove.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <IconComponent className="text-green-400 mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Don't see what you need removed? We handle almost everything!</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Ask About Your Items
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-400">Real experiences from satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm flex items-center">
                      <MapPin size={12} className="mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-600/30 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-6 text-lg">
              Get your free estimate today and experience the 404-JUNK difference with transparent, weight-based
              pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
                <span>Get Free Estimate</span>
                <ArrowRight size={20} />
              </button>
              <button className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
                <Phone size={20} />
                <span>604-505-5865</span>
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
