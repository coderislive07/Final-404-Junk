import React from "react"
import one from "../assets/1.avif"
import { ArrowLeft, Star, TrendingUp, Users, Calendar, Award, CheckCircle, Heart } from "lucide-react"



export default function SatisfactionArticle() {
  const satisfactionMetrics = [
    {
      metric: "Overall Satisfaction",
      score: "98%",
      change: "+12%",
      description: "Customers rating us 4-5 stars",
      icon: Star,
    },
    {
      metric: "Pricing Transparency",
      score: "99%",
      change: "+15%",
      description: "Customers who found pricing fair",
      icon: CheckCircle,
    },
    {
      metric: "Service Speed",
      score: "96%",
      change: "+8%",
      description: "Same-day service satisfaction",
      icon: TrendingUp,
    },
    {
      metric: "Would Recommend",
      score: "97%",
      change: "+10%",
      description: "Customers who would recommend us",
      icon: Heart,
    },
  ]

  const testimonials = [
    {
      name: "Jennifer Walsh",
      location: "Vancouver, BC",
      rating: 5,
      service: "Basement Cleanout",
      quote:
        "I was dreading the cost of clearing out my basement, but 404-JUNK's weight-based pricing saved me over $300 compared to other quotes. The team was professional, fast, and even helped me separate items for donation.",
      date: "October 2024",
    },
    {
      name: "David Kim",
      location: "Surrey, BC",
      rating: 5,
      service: "Office Renovation",
      quote:
        "We needed to clear out an entire office floor during our renovation. 404-JUNK handled everything seamlessly, from old furniture to electronics. Their transparent pricing meant no surprises on the final bill.",
      date: "September 2024",
    },
    {
      name: "Maria Santos",
      location: "Richmond, BC",
      rating: 5,
      service: "Estate Cleanout",
      quote:
        "After my father passed, we had to clear his house. The 404-JUNK team was incredibly respectful and helped us identify items that could be donated. It made a difficult time a little easier.",
      date: "November 2024",
    },
    {
      name: "Robert Chen",
      location: "Burnaby, BC",
      rating: 5,
      service: "Construction Debris",
      quote:
        "As a contractor, I've used many junk removal services. 404-JUNK's weight-based pricing is revolutionary - I only pay for what I actually dispose of. It's saved my business thousands.",
      date: "August 2024",
    },
  ]

  const industryComparison = [
    {
      metric: "Customer Satisfaction",
      us: "98%",
      industry: "78%",
      difference: "+20%",
    },
    {
      metric: "Pricing Transparency",
      us: "99%",
      industry: "65%",
      difference: "+34%",
    },
    {
      metric: "Same-Day Service",
      us: "96%",
      industry: "72%",
      difference: "+24%",
    },
    {
      metric: "Environmental Responsibility",
      us: "95%",
      industry: "58%",
      difference: "+37%",
    },
  ]

  const improvements = [
    {
      area: "Booking Process",
      improvement: "Streamlined online booking",
      impact: "40% faster booking times",
      date: "Q2 2024",
    },
    {
      area: "Pricing Calculator",
      improvement: "Real-time weight estimates",
      impact: "95% accurate pricing predictions",
      date: "Q3 2024",
    },
    {
      area: "Customer Communication",
      improvement: "SMS updates and tracking",
      impact: "99% on-time arrival rate",
      date: "Q1 2024",
    },
    {
      area: "Environmental Reporting",
      improvement: "Detailed impact reports",
      impact: "85% recycling rate transparency",
      date: "Q4 2024",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">


      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <a href="/" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </a>

            <div className="text-green-400 text-sm font-semibold mb-2">CUSTOMER SUCCESS</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Customer Satisfaction Reaches All-Time High
            </h1>

            <div className="flex items-center space-x-4 text-gray-400 mb-8">
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>November 10, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users size={16} />
                <span>Customer Success Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={one}
              alt="Happy customers with 404-JUNK team"
              className="w-full h-64 md:h-96 object-cover rounded-2xl border border-gray-700"
            />
            <p className="text-gray-500 text-sm mt-2 text-center">
              Our team celebrating with satisfied customers after a successful cleanout project
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {satisfactionMetrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                  <IconComponent className="text-green-400 mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-white mb-1">{metric.score}</div>
                  <div className="text-green-400 text-sm font-semibold mb-2">{metric.change} from last year</div>
                  <div className="text-gray-400 text-sm">{metric.description}</div>
                </div>
              )
            })}
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We're thrilled to announce that 404-JUNK has achieved a remarkable 98% customer satisfaction rate—the
              highest in our company's history and significantly above the industry average of 78%. This milestone
              reflects our unwavering commitment to transparent pricing, exceptional service, and environmental
              responsibility.
            </p>

            <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-3">What Makes Us Different</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  Weight-based pricing - pay only for what you dispose of
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  Same-day service available in most areas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  85% of items recycled or donated
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  100% satisfaction guarantee
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">How We Compare to the Industry</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Our customer satisfaction scores consistently outperform industry standards across all key metrics. This
              success stems from our revolutionary approach to junk removal that prioritizes fairness, transparency, and
              environmental responsibility.
            </p>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden mb-8">
              <div className="grid grid-cols-4 bg-gray-700/50 p-4 font-semibold text-sm">
                <div className="text-gray-300">Metric</div>
                <div className="text-green-400 text-center">404-JUNK</div>
                <div className="text-gray-400 text-center">Industry Average</div>
                <div className="text-blue-400 text-center">Our Advantage</div>
              </div>

              {industryComparison.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 p-4 border-t border-gray-700 ${
                    index % 2 === 0 ? "bg-gray-800/30" : "bg-gray-800/10"
                  }`}
                >
                  <div className="text-gray-300 font-medium">{item.metric}</div>
                  <div className="text-center text-green-400 font-bold">{item.us}</div>
                  <div className="text-center text-gray-400">{item.industry}</div>
                  <div className="text-center text-blue-400 font-semibold">{item.difference}</div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Real Customer Stories</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Behind every statistic are real people who've experienced the 404-JUNK difference. Here are some recent
              testimonials that showcase why our customers love our service:
            </p>

            <div className="space-y-6 mb-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">
                        {testimonial.location} • {testimonial.service}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-gray-300 italic mb-3">"{testimonial.quote}"</blockquote>

                  <div className="text-gray-500 text-sm text-right">— {testimonial.date}</div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Continuous Improvement</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Achieving 98% satisfaction didn't happen overnight. Throughout 2024, we've implemented numerous
              improvements based on customer feedback and industry best practices. Here are some key enhancements that
              have contributed to our success:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {improvements.map((improvement, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{improvement.area}</h3>
                    <span className="text-green-400 text-sm font-semibold">{improvement.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{improvement.improvement}</p>
                  <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-2">
                    <span className="text-green-300 text-sm font-semibold">Impact: {improvement.impact}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">The Weight-Based Advantage</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              The cornerstone of our high satisfaction rates is our revolutionary weight-based pricing model. Unlike
              traditional flat-rate pricing that often overcharges customers with lighter loads, our system ensures you
              only pay for what you actually dispose of.
            </p>

            <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Customer Savings Example</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Traditional Flat Rate:</span>
                  <span className="text-red-400 font-bold">$500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">404-JUNK Weight-Based:</span>
                  <span className="text-green-400 font-bold">$320</span>
                </div>
                <div className="border-t border-gray-600 pt-2 flex justify-between items-center">
                  <span className="text-white font-semibold">Customer Savings:</span>
                  <span className="text-green-400 font-bold text-lg">$180</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                *Based on actual customer data for a 400lb residential cleanout
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Looking Forward: Our Commitment</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              While we're proud of reaching 98% satisfaction, we're not stopping here. As we expand to new cities across
              Canada, we're committed to maintaining these high standards while continuously innovating to serve our
              customers better.
            </p>

            <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">Our 2025 Customer Experience Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Award className="text-green-400 mr-3" size={20} />
                  <span className="text-gray-300">Maintain 98%+ satisfaction across all markets</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="text-green-400 mr-3" size={20} />
                  <span className="text-gray-300">Reduce average response time to under 2 hours</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span className="text-gray-300">Launch 24/7 customer support</span>
                </li>
                <li className="flex items-center">
                  <Star className="text-green-400 mr-3" size={20} />
                  <span className="text-gray-300">Implement AI-powered pricing predictions</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Our success is measured not just in satisfaction scores, but in the trust our customers place in us to
              handle their junk removal needs fairly, efficiently, and responsibly. Every positive review, every
              referral, and every repeat customer reinforces our belief that transparent, weight-based pricing is the
              future of the junk removal industry.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-600/30 rounded-2xl p-8 text-center">
            <Star className="text-green-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Experience the 404-JUNK Difference</h3>
            <p className="text-gray-400 mb-6">
              Join thousands of satisfied customers who've discovered fair, transparent junk removal pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book-now">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Book Your Service
                </button>
              </a>
              <a href="/reviews">
                <button className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-8 py-3 rounded-full font-semibold transition-colors">
                  Read More Reviews
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
