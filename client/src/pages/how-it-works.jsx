import React from "react"

import {
  Phone,
  Calendar,
  Truck,
  Scale,
  CheckCircle,
  Clock,
  DollarSign,
  Recycle,
  Users,
  Shield,
  Zap,
  FileText,
  CreditCard,
  ThumbsUp,
} from "lucide-react"



export default function Howitworks() {
  const steps = [
    {
      number: "01",
      title: "Book Your Service",
      description: "Call us or book online with your location and preferred time slot.",
      icon: Phone,
      details: [
        "Call 604-505-5865 or book online",
        "Provide your address and contact info",
        "Choose your preferred date and time",
        "Get instant pricing estimate",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "02",
      title: "We Arrive On Time",
      description: "Our professional team arrives at your scheduled time with all necessary equipment.",
      icon: Truck,
      details: [
        "Professional uniformed team",
        "Fully equipped truck and tools",
        "Call 15-30 minutes before arrival",
        "Same-day service available",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      number: "03",
      title: "Free Assessment",
      description: "We assess your items and provide a transparent weight-based quote.",
      icon: FileText,
      details: [
        "No obligation assessment",
        "Transparent pricing explanation",
        "Weight estimation provided",
        "Answer all your questions",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "04",
      title: "We Do The Heavy Lifting",
      description: "Our team safely removes all items from anywhere on your property.",
      icon: Users,
      details: [
        "We handle all the heavy lifting",
        "Remove items from any location",
        "Protect your property during removal",
        "Clean up the area when done",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      number: "05",
      title: "Accurate Weighing",
      description: "Items are weighed on professional scales for transparent pricing.",
      icon: Scale,
      details: [
        "Professional-grade truck scales",
        "Weigh items in front of you",
        "Transparent weight documentation",
        "No hidden fees or surprises",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      number: "06",
      title: "Payment & Completion",
      description: "Pay based on actual weight and receive your completion receipt.",
      icon: CreditCard,
      details: [
        "Pay only for actual weight",
        "Multiple payment options accepted",
        "Detailed receipt provided",
        "Satisfaction guaranteed",
      ],
      color: "from-red-500 to-red-600",
    },
  ]

  const pricingBreakdown = [
    {
      service: "Pull Up Service",
      baseRate: "$140",
      description: "Curbside pickup - items placed at curb",
      weightRange: "Up to 400 lbs",
    },
    {
      service: "Outside + House",
      baseRate: "$140",
      description: "Outdoor items and exterior cleanup",
      weightRange: "Up to 400 lbs",
    },
    {
      service: "Inside + House",
      baseRate: "$140",
      description: "Interior furniture and appliance removal",
      weightRange: "Up to 400 lbs",
    },
    {
      service: "Apartment Service",
      baseRate: "$180",
      description: "Specialized apartment/condo service",
      weightRange: "Up to 400 lbs",
    },
  ]

  const whatHappensNext = [
    {
      icon: Recycle,
      title: "Eco-Friendly Sorting",
      description: "We sort items for recycling, donation, and responsible disposal.",
    },
    {
      icon: ThumbsUp,
      title: "Donation to Charities",
      description: "Usable items are donated to local charities and community organizations.",
    },
    {
      icon: Recycle,
      title: "Recycling Centers",
      description: "Recyclable materials go to certified recycling facilities.",
    },
    {
      icon: Shield,
      title: "Responsible Disposal",
      description: "Remaining items are disposed of at licensed waste management facilities.",
    },
  ]

  const faqs = [
    {
      question: "How accurate is the weight-based pricing?",
      answer:
        "Our professional truck scales are certified and accurate to within 1%. You can watch the weighing process and receive documentation of the exact weight.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not completely satisfied, we'll make it right or refund your money.",
    },
    {
      question: "Do you charge extra for stairs or difficult access?",
      answer:
        "No hidden fees! Our weight-based pricing includes all labor for removal from any location on your property, including stairs, basements, and attics.",
    },
    {
      question: "How quickly can you provide service?",
      answer: "We offer same-day service in most areas. Emergency pickups are available for urgent situations.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
    

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2 mb-6">
              <Zap className="text-green-400" size={20} />
              <span className="text-green-400 font-medium">Simple, Transparent Process</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              How It Works
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our streamlined process makes junk removal easy, transparent, and fair. From booking to completion, here's
              exactly what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 6-Step Process</h2>
            <p className="text-gray-400">Simple, transparent, and designed around your convenience</p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className={`bg-gradient-to-r ${step.color} rounded-full p-3 mr-4`}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <div>
                          <div className="text-green-400 font-bold text-sm">STEP {step.number}</div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-400 mb-6 text-lg">{step.description}</p>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={16} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div
                      className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl`}
                    >
                      {step.number}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing Structure</h2>
            <p className="text-gray-400">No hidden fees - here's exactly how our pricing works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pricingBreakdown.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">{service.baseRate}</div>
                  <h3 className="text-lg font-bold mb-2">{service.service}</h3>
                  <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                  <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-2">
                    <span className="text-green-300 text-xs font-semibold">{service.weightRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* What Happens to Your Items */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Happens to Your Items?</h2>
            <p className="text-gray-400">We're committed to responsible disposal and environmental stewardship</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatHappensNext.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
                >
                  <IconComponent className="text-green-400 mx-auto mb-4" size={40} />
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-600/10 border border-green-600/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <Recycle className="text-green-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">85% Diversion Rate</h3>
              <p className="text-gray-400">
                We're proud to divert 85% of collected items from landfills through recycling, donation, and reuse
                programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Common questions about our process and pricing</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-3 text-green-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-600/30 rounded-2xl p-8">
            <Clock className="text-green-400 mx-auto mb-4" size={48} />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-6 text-lg">
              Book your junk removal service today and experience our transparent, weight-based pricing firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
         <a href="/book-now">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
                <Calendar size={20} />
                <span>Book Now</span>
                
              </button>
              </a>
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
