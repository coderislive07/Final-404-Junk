
import React from "react"
import {
  Scale,
  DollarSign,
  Shield,
  Clock,
  Recycle,
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  Heart,
  Leaf,
  Star,
  Phone,
  ArrowRight,
  Target,
  Zap,
  ThumbsUp,
} from "lucide-react"



export default function Why404junk() {
  const whyChooseUs = [
    {
      icon: Scale,
      title: "Weight-Based Pricing",
      description: "Pay only for what you dispose of, not flat rates that penalize light loads.",
      benefit: "Save up to 40% compared to traditional pricing",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Complete protection for your property and peace of mind during service.",
      benefit: "Full liability coverage included",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Emergency and same-day pickup available in most service areas.",
      benefit: "Available 7 days a week",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Recycle,
      title: "Eco-Friendly Disposal",
      description: "We recycle, donate, and responsibly dispose of your items.",
      benefit: "85% of items diverted from landfills",
      color: "from-emerald-500 to-emerald-600",
    },
  ]

  const competitorComparison = [
    {
      feature: "Pricing Model",
      us: "Weight-based (fair & accurate)",
      competitors: "Flat rate (often overpriced)",
      advantage: true,
    },
    {
      feature: "Pricing Transparency",
      us: "Upfront weight-based quotes",
      competitors: "Hidden fees & estimates",
      advantage: true,
    },
    {
      feature: "Environmental Impact",
      us: "85% recycling/donation rate",
      competitors: "Most goes to landfill",
      advantage: true,
    },
    {
      feature: "Service Speed",
      us: "Same-day available",
      competitors: "2-3 day minimum",
      advantage: true,
    },
    {
      feature: "Insurance Coverage",
      us: "Full liability protection",
      competitors: "Limited or no coverage",
      advantage: true,
    },
    {
      feature: "Customer Satisfaction",
      us: "98% satisfaction rate",
      competitors: "Industry average 78%",
      advantage: true,
    },
  ]

  const ourValues = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make prioritizes customer satisfaction and fair treatment.",
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "Committed to reducing waste through recycling, donation, and responsible disposal.",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "No hidden fees, no surprises - just honest, upfront pricing based on actual weight.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Supporting local communities through job creation and charitable donations.",
    },
  ]

  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Customers" },
    { icon: Recycle, number: "85%", label: "Items Recycled/Donated" },
    { icon: Award, number: "98%", label: "Customer Satisfaction" },
    { icon: TrendingUp, number: "8+", label: "Years of Service" },
  ]

  const testimonials = [
    {
      name: "Robert Chen",
      location: "Vancouver, BC",
      text: "The weight-based pricing saved me over $300 compared to other companies. Finally, a fair way to price junk removal!",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      location: "Toronto, ON",
      text: "Professional, eco-friendly, and transparent. 404-JUNK is the only company I'll use for junk removal.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      location: "Calgary, AB",
      text: "Same-day service when I needed it most. The team was courteous and the pricing was exactly as quoted.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">


      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2 mb-6">
              <ThumbsUp className="text-green-400" size={20} />
              <span className="text-green-400 font-medium">Canada's Most Trusted Junk Removal</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Why Choose 404-JUNK?
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We revolutionized junk removal with fair, weight-based pricing and eco-friendly practices. Discover why
              thousands of Canadians trust us with their junk removal needs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                  <IconComponent className="text-green-400 mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The 404-JUNK Advantage</h2>
            <p className="text-gray-400">What makes us different from traditional junk removal companies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="relative overflow-hidden bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5`}></div>
                  <div className="relative">
                    <IconComponent className="text-green-400 mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-3">
                      <div className="flex items-center">
                        <CheckCircle className="text-green-400 mr-2" size={16} />
                        <span className="text-green-300 font-semibold">{item.benefit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">404-JUNK vs. Traditional Companies</h2>
            <p className="text-gray-400">See how we stack up against the competition</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-700/50 p-4 font-semibold">
              <div className="text-gray-300">Feature</div>
              <div className="text-green-400 text-center">404-JUNK</div>
              <div className="text-gray-400 text-center">Traditional Companies</div>
            </div>

            {competitorComparison.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 border-t border-gray-700 ${
                  index % 2 === 0 ? "bg-gray-800/30" : "bg-gray-800/10"
                }`}
              >
                <div className="text-gray-300 font-medium">{item.feature}</div>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    <span className="text-green-300">{item.us}</span>
                  </div>
                </div>
                <div className="text-center text-gray-400">{item.competitors}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
                >
                  <IconComponent className="text-green-400 mx-auto mb-4" size={40} />
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Weight-Based Pricing Explanation */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Weight-Based Pricing is Better</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <DollarSign className="text-green-400 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Fair & Accurate</h3>
                    <p className="text-gray-400">
                      You only pay for the actual weight of your items, not arbitrary flat rates that often overcharge
                      for light loads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Scale className="text-green-400 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transparent Process</h3>
                    <p className="text-gray-400">
                      We weigh your items on professional scales right in front of you. No hidden calculations or
                      surprise fees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <TrendingUp className="text-green-400 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Significant Savings</h3>
                    <p className="text-gray-400">
                      Our customers save an average of 30-40% compared to traditional flat-rate pricing models.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Pricing Comparison Example</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-600/10 border border-red-600/30 rounded-lg">
                  <span className="text-gray-300">Traditional Flat Rate</span>
                  <span className="text-red-400 font-bold text-xl">$500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-600/10 border border-green-600/30 rounded-lg">
                  <span className="text-gray-300">404-JUNK Weight-Based</span>
                  <span className="text-green-400 font-bold text-xl">$320</span>
                </div>
                <div className="text-center pt-4">
                  <div className="text-green-400 font-bold text-2xl">Save $180!</div>
                  <div className="text-gray-400 text-sm">Based on 400lb load</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-400">Real experiences from satisfied customers across Canada</p>
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
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-600/30 rounded-2xl p-8">
            <Zap className="text-green-400 mx-auto mb-4" size={48} />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience the 404-JUNK Difference</h2>
            <p className="text-gray-400 mb-6 text-lg">
              Join thousands of satisfied customers who've discovered fair, transparent junk removal pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="/rates">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
                <span>Get Free Estimate</span>
                <ArrowRight size={20} />
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
