import React from "react"
import two from "../assets/2.avif"
import { ArrowLeft, MapPin, Users, Calendar, CheckCircle } from "lucide-react"



export default function ExpansionArticle() {
  const newCities = [
    {
      name: "Calgary",
      province: "AB",
      population: "1,336,000",
      launchDate: "January 2025",
      services: ["Residential", "Commercial", "Construction"],
      expectedJobs: 25,
    },
    {
      name: "Edmonton",
      province: "AB",
      population: "981,280",
      launchDate: "February 2025",
      services: ["Residential", "Commercial"],
      expectedJobs: 18,
    },
    {
      name: "Winnipeg",
      province: "MB",
      population: "749,534",
      launchDate: "March 2025",
      services: ["Residential", "Commercial"],
      expectedJobs: 15,
    },
    {
      name: "Ottawa",
      province: "ON",
      population: "994,837",
      launchDate: "April 2025",
      services: ["Residential", "Commercial", "Construction"],
      expectedJobs: 22,
    },
    {
      name: "Quebec City",
      province: "QC",
      population: "531,902",
      launchDate: "May 2025",
      services: ["Residential"],
      expectedJobs: 12,
    },
  ]

  const milestones = [
    {
      year: "2021",
      event: "404-JUNK Founded",
      description: "Started with a single truck in Vancouver, BC",
    },
    {
      year: "2022",
      event: "First Expansion",
      description: "Expanded to 5 cities in Greater Vancouver Area",
    },
    {
      year: "2023",
      event: "Weight-Based Innovation",
      description: "Pioneered transparent weight-based pricing model",
    },
    {
      year: "2024",
      event: "Provincial Coverage",
      description: "Achieved full coverage across British Columbia",
    },
    {
      year: "2025",
      event: "National Expansion",
      description: "Launching in 5 new provinces across Canada",
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

            <div className="text-green-400 text-sm font-semibold mb-2">COMPANY NEWS</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              404-JUNK Expands to 5 New Canadian Cities
            </h1>

            <div className="flex items-center space-x-4 text-gray-400 mb-8">
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users size={16} />
                <span>404-JUNK Team</span>
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
              src={two}
              alt="404-JUNK expansion across Canada"
              className="w-full h-64 md:h-96 object-cover rounded-2xl border border-gray-700"
            />
            <p className="text-gray-500 text-sm mt-2 text-center">
              404-JUNK trucks ready for deployment across new Canadian markets
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-3">Key Highlights</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  Expanding to 5 major Canadian cities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  Creating 92+ new jobs across Canada
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  Bringing weight-based pricing nationwide
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  $2.5M investment in new equipment and facilities
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We're thrilled to announce the most significant expansion in 404-JUNK's history. After three years of
              perfecting our weight-based pricing model in British Columbia, we're ready to bring fair, transparent junk
              removal services to five major Canadian cities.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              This expansion represents more than just geographic growth—it's about revolutionizing how Canadians think
              about junk removal. Traditional companies charge flat rates that often penalize customers with lighter
              loads. Our innovative approach ensures you only pay for what you actually dispose of.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">New Markets & Timeline</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {newCities.map((city, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{city.name}</h3>
                      <p className="text-gray-400">
                        {city.province} • Pop. {city.population}
                      </p>
                    </div>
                    <MapPin className="text-green-400" size={24} />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Launch Date:</span>
                      <span className="text-green-400 font-semibold">{city.launchDate}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">New Jobs:</span>
                      <span className="text-white font-semibold">{city.expectedJobs}+</span>
                    </div>

                    <div>
                      <span className="text-gray-400 block mb-2">Services:</span>
                      <div className="flex flex-wrap gap-1">
                        {city.services.map((service, serviceIndex) => (
                          <span key={serviceIndex} className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Our Growth Journey</h2>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                      {milestone.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{milestone.event}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Why This Expansion Matters</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              The junk removal industry has long been dominated by companies that charge arbitrary flat rates, often
              leaving customers feeling overcharged for small loads. Our weight-based model has proven incredibly
              popular in BC, with customer satisfaction rates reaching 98%—the highest in the industry.
            </p>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">By the Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-gray-400 text-sm">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">40%</div>
                  <div className="text-gray-400 text-sm">Average Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">85%</div>
                  <div className="text-gray-400 text-sm">Items Recycled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">10K+</div>
                  <div className="text-gray-400 text-sm">Happy Customers</div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              "We're not just expanding our business—we're expanding fairness in the junk removal industry," says our
              founder. "Every Canadian deserves transparent pricing and exceptional service, regardless of where they
              live."
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Environmental Impact</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Our expansion isn't just about business growth—it's about environmental responsibility. In each new
              market, we're partnering with local recycling centers and charities to ensure that 85% of collected items
              are diverted from landfills through recycling and donation programs.
            </p>

            <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-3">Environmental Goals for 2025</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Divert 50,000+ tons of waste from landfills</li>
                <li>• Partner with 25+ local charities for donations</li>
                <li>• Achieve carbon-neutral operations in all markets</li>
                <li>• Implement electric vehicle fleet in urban centers</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">What's Next?</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              This expansion is just the beginning. We're already planning phase two, which will bring 404-JUNK to the
              Maritime provinces and additional cities in Ontario and Quebec. Our goal is to make weight-based pricing
              the new standard for junk removal across Canada.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              For customers in our new markets, this means access to the fairest pricing in the industry, same-day
              service availability, and the peace of mind that comes with our 100% satisfaction guarantee.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-600/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Fair Pricing?</h3>
            <p className="text-gray-400 mb-6">
              Whether you're in our current service areas or one of our upcoming markets, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book-now">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Book Service Now
                </button>
              </a>
              <a href="/locations">
                <button className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-8 py-3 rounded-full font-semibold transition-colors">
                  View All Locations
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
