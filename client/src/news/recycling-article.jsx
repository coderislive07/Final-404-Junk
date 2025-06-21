import React from "react"
import three from "../assets/3.avif"
import { ArrowLeft, Recycle, Calendar, Users, CheckCircle } from "lucide-react"



export default function RecyclingArticle() {
  const recyclingStats = [
    {
      category: "Furniture",
      amount: "15,000 tons",
      percentage: "30%",
      description: "Donated to local charities and refurbished",
      icon: "🛋️",
    },
    {
      category: "Electronics",
      amount: "8,500 tons",
      percentage: "17%",
      description: "Properly recycled at certified e-waste facilities",
      icon: "📱",
    },
    {
      category: "Metal",
      amount: "12,000 tons",
      percentage: "24%",
      description: "Recycled into new products and materials",
      icon: "🔧",
    },
    {
      category: "Wood",
      amount: "9,200 tons",
      percentage: "18%",
      description: "Processed into mulch and building materials",
      icon: "🪵",
    },
    {
      category: "Other Materials",
      amount: "5,300 tons",
      percentage: "11%",
      description: "Various recyclable materials and composites",
      icon: "♻️",
    },
  ]

  const partners = [
    {
      name: "BC Recycling Alliance",
      type: "Recycling Partner",
      description: "Processing electronics and hazardous materials",
      impact: "3,200 tons processed",
    },
    {
      name: "Habitat for Humanity",
      type: "Charity Partner",
      description: "Furniture and building materials donations",
      impact: "2,800 families helped",
    },
    {
      name: "Vancouver Food Bank",
      type: "Community Partner",
      description: "Appliance donations for community kitchens",
      impact: "150 appliances donated",
    },
    {
      name: "Green Earth Recycling",
      type: "Processing Partner",
      description: "Metal and construction material recycling",
      impact: "8,500 tons recycled",
    },
  ]

  const timeline = [
    {
      year: "2021",
      milestone: "Program Launch",
      description: "Started basic recycling sorting",
      impact: "500 tons diverted",
    },
    {
      year: "2022",
      milestone: "First Partnerships",
      description: "Partnered with 5 local organizations",
      impact: "2,100 tons diverted",
    },
    {
      year: "2023",
      milestone: "Technology Upgrade",
      description: "Implemented advanced sorting systems",
      impact: "5,800 tons diverted",
    },
    {
      year: "2024",
      milestone: "Major Milestone",
      description: "Reached 10,000 tons diverted from landfills",
      impact: "10,000+ tons diverted",
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

            <div className="text-green-400 text-sm font-semibold mb-2">ENVIRONMENTAL IMPACT</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Recycling Initiative Saves 10,000 Tons from Landfills
            </h1>

            <div className="flex items-center space-x-4 text-gray-400 mb-8">
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>November 28, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users size={16} />
                <span>Environmental Team</span>
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
              src={three}
              alt="Recycling facility with sorted materials"
              className="w-full h-64 md:h-96 object-cover rounded-2xl border border-gray-700"
            />
            <p className="text-gray-500 text-sm mt-2 text-center">
              Our state-of-the-art sorting facility processes thousands of tons of recyclable materials monthly
            </p>
          </div>

          {/* Key Stats */}
          <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-green-400 mb-4">Environmental Impact Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-gray-400 text-sm">Tons Diverted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-gray-400 text-sm">Diversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-gray-400 text-sm">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3,000+</div>
                <div className="text-gray-400 text-sm">Families Helped</div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We're proud to announce a major environmental milestone: 404-JUNK has successfully diverted over 10,000
              tons of materials from Canadian landfills through our comprehensive recycling and donation programs. This
              achievement represents our unwavering commitment to environmental stewardship and community support.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Since launching our recycling initiative in 2021, we've transformed how junk removal impacts the
              environment. Rather than simply hauling items to landfills, we've built an extensive network of recycling
              partners, charitable organizations, and processing facilities to give new life to discarded materials.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Breaking Down the Numbers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {recyclingStats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{stat.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{stat.category}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400 font-bold">{stat.amount}</span>
                        <span className="text-gray-400">({stat.percentage})</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Our Process: From Collection to New Life</h2>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">On-Site Sorting</h3>
                    <p className="text-gray-400">
                      Our trained team sorts items during pickup, identifying recyclable materials, donation-worthy
                      items, and true waste.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Facility Processing</h3>
                    <p className="text-gray-400">
                      Items are transported to our processing facility where they undergo detailed sorting and
                      preparation for their next destination.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Partner Distribution</h3>
                    <p className="text-gray-400">
                      Materials are distributed to appropriate recycling facilities, charities, or refurbishment centers
                      based on their condition and type.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Impact Tracking</h3>
                    <p className="text-gray-400">
                      We track every item's journey to measure our environmental impact and continuously improve our
                      processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Our Amazing Partners</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              None of this would be possible without our incredible network of partners who share our vision of a more
              sustainable future. Each organization brings unique expertise and capabilities to our recycling ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                    <span className="text-green-400 text-sm font-semibold">{partner.type}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{partner.description}</p>
                  <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-2">
                    <span className="text-green-300 text-sm font-semibold">Impact: {partner.impact}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Journey to 10,000 Tons</h2>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{item.milestone}</h3>
                      <p className="text-gray-400 mb-2">{item.description}</p>
                      <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-2 inline-block">
                        <span className="text-green-300 text-sm font-semibold">{item.impact}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Real Stories, Real Impact</h2>

            <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Customer Spotlight</h3>
              <p className="text-gray-300 italic mb-4">
                "When 404-JUNK removed our old kitchen during our renovation, I was amazed to learn that our cabinets
                went to a family in need through Habitat for Humanity, and our appliances were refurbished for a
                community center. It felt great knowing our 'junk' was helping others."
              </p>
              <div className="text-right">
                <span className="text-gray-400">— Sarah M., Vancouver</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Looking Ahead: Our 2025 Goals</h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Reaching 10,000 tons is just the beginning. As we expand to new cities across Canada, we're setting even
              more ambitious environmental goals for 2025.
            </p>

            <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">2025 Environmental Targets</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span className="text-gray-300">Divert 25,000 tons from landfills</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span className="text-gray-300">Achieve 90% diversion rate across all markets</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span className="text-gray-300">Partner with 50+ local organizations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span className="text-gray-300">Launch carbon-neutral operations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span className="text-gray-300">Help 10,000+ families through donations</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Every item we collect is an opportunity to make a positive impact. Whether it's giving furniture a second
              life with a family in need, recycling electronics responsibly, or turning construction waste into new
              building materials, we're proving that junk removal can be a force for environmental good.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-600/30 rounded-2xl p-8 text-center">
            <Recycle className="text-green-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Join Our Environmental Mission</h3>
            <p className="text-gray-400 mb-6">
              When you choose 404-JUNK, you're not just removing clutter—you're contributing to a more sustainable
              future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book-now">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Book Eco-Friendly Removal
                </button>
              </a>
              <a href="/why404junk">
                <button className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-8 py-3 rounded-full font-semibold transition-colors">
                  Learn More About Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  )
}
