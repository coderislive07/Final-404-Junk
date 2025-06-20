import React, { useState, useEffect } from "react"
import { Calendar, Clock, User, Mail, Phone, MapPin, FileText, CheckCircle, Truck, AlertCircle } from "lucide-react"


export default function Booknow() {
  const [bookingData, setBookingData] = useState({
    serviceType: "",
    weightRange: "",
    price: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    date: "",
    time: "",
    notes: "",
    emergencyContact: "",
    specialInstructions: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const services = [
    { id: "pullup", name: "Pull Up", basePrice: 140 },
    { id: "outside", name: "Outside + House", basePrice: 140 },
    { id: "inside", name: "Inside + House", basePrice: 140 },
    { id: "apartment", name: "Apartment", basePrice: 180 },
  ]

  const weightRanges = [
    { range: "Under 400 lbs", multiplier: 1 },
    { range: "400-500 lbs", multiplier: 1.5 },
    { range: "500-600 lbs", multiplier: 2 },
    { range: "600-700 lbs", multiplier: 2.5 },
    { range: "700-800 lbs", multiplier: 3 },
    { range: "800-900 lbs", multiplier: 3.5 },
    { range: "900-1000 lbs", multiplier: 4 },
  ]

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM",
  ]


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const serviceFromUrl = urlParams.get("service")
    const priceFromUrl = urlParams.get("price")
    const weightFromUrl = urlParams.get("weight")

    if (serviceFromUrl && priceFromUrl && weightFromUrl) {
      setBookingData((prev) => ({
        ...prev,
        serviceType: serviceFromUrl,
        price: priceFromUrl,
        weightRange: weightFromUrl,
      }))
    }
  }, [])

  // Calculate price when service type or weight range changes
  useEffect(() => {
    if (bookingData.serviceType && bookingData.weightRange) {
      const service = services.find((s) => s.id === bookingData.serviceType)
      const weight = weightRanges.find((w) => w.range === bookingData.weightRange)

      if (service && weight) {
        const calculatedPrice = Math.round(service.basePrice * weight.multiplier)
        setBookingData((prev) => ({
          ...prev,
          price: calculatedPrice.toString(),
        }))
      }
    }
  }, [bookingData.serviceType, bookingData.weightRange])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Required fields validation
    if (!bookingData.name.trim()) newErrors.name = "Name is required"
    if (!bookingData.email.trim()) newErrors.email = "Email is required"
    if (!bookingData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!bookingData.address.trim()) newErrors.address = "Address is required"
    if (!bookingData.city.trim()) newErrors.city = "City is required"
    if (!bookingData.postalCode.trim()) newErrors.postalCode = "Postal code is required"
    if (!bookingData.date) newErrors.date = "Date is required"
    if (!bookingData.time) newErrors.time = "Time slot is required"
    if (!bookingData.serviceType) newErrors.serviceType = "Service type is required"
    if (!bookingData.weightRange) newErrors.weightRange = "Weight range is required"

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (bookingData.email && !emailRegex.test(bookingData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-+$$$$]+$/
    if (bookingData.phone && !phoneRegex.test(bookingData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Date validation (must be today or future)
    if (bookingData.date) {
      const selectedDate = new Date(bookingData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.date = "Please select today's date or a future date"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("http://localhost:5000/api/booking/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form
        setBookingData({
          serviceType: "",
          weightRange: "",
          price: "",
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          postalCode: "",
          date: "",
          time: "",
          notes: "",
          emergencyContact: "",
          specialInstructions: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting booking:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
 

      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2 mb-6">
            <Calendar className="text-green-400" size={20} />
            <span className="text-green-400 font-medium">Book Your Junk Removal Service</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Book Now
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fill out the form below to schedule your junk removal service. We'll confirm your booking and provide all
            the details you need.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitStatus === "success" && (
            <div className="bg-green-600/20 border border-green-600/30 rounded-xl p-6 mb-8 text-center">
              <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-green-400 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-300">
                Thank you for your booking. We've sent a confirmation email and will contact you shortly to confirm the
                details.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-600/20 border border-red-600/30 rounded-xl p-6 mb-8 text-center">
              <AlertCircle className="text-red-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-red-400 mb-2">Booking Failed</h3>
              <p className="text-gray-300">
                There was an error submitting your booking. Please try again or call us at 604-505-5865.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Selection */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Truck className="text-green-400 mr-3" size={24} />
                Service Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Type *</label>
                  <select
                    name="serviceType"
                    value={bookingData.serviceType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.serviceType ? "border-red-500" : "border-gray-600"
                    }`}
                  >
                    <option value="">Select Service Type</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && <p className="text-red-400 text-sm mt-1">{errors.serviceType}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Estimated Weight Range *</label>
                  <select
                    name="weightRange"
                    value={bookingData.weightRange}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.weightRange ? "border-red-500" : "border-gray-600"
                    }`}
                  >
                    <option value="">Select Weight Range</option>
                    {weightRanges.map((weight) => (
                      <option key={weight.range} value={weight.range}>
                        {weight.range}
                      </option>
                    ))}
                  </select>
                  {errors.weightRange && <p className="text-red-400 text-sm mt-1">{errors.weightRange}</p>}
                </div>
              </div>

              {bookingData.price && (
                <div className="mt-6 bg-green-600/10 border border-green-600/30 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Estimated Price:</span>
                    <span className="text-2xl font-bold text-green-400">${bookingData.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    Final price based on actual weight. This estimate includes pickup, weighing, and disposal.
                  </p>
                </div>
              )}
            </div>

            {/* Customer Information */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <User className="text-green-400 mr-3" size={24} />
                Customer Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <User className="inline mr-2" size={16} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Mail className="inline mr-2" size={16} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Phone className="inline mr-2" size={16} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.phone ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Emergency Contact</label>
                  <input
                    type="tel"
                    name="emergencyContact"
                    value={bookingData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Emergency contact number"
                  />
                </div>
              </div>
            </div>

            {/* Service Address */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="text-green-400 mr-3" size={24} />
                Service Address
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={bookingData.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.address ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Enter service address"
                  />
                  {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={bookingData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.city ? "border-red-500" : "border-gray-600"
                      }`}
                      placeholder="Enter city"
                    />
                    {errors.city && <p className="text-red-400 text-sm mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Postal Code *</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={bookingData.postalCode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.postalCode ? "border-red-500" : "border-gray-600"
                      }`}
                      placeholder="Enter postal code"
                    />
                    {errors.postalCode && <p className="text-red-400 text-sm mt-1">{errors.postalCode}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduling */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="text-green-400 mr-3" size={24} />
                Scheduling
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.date ? "border-red-500" : "border-gray-600"
                    }`}
                  />
                  {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Clock className="inline mr-2" size={16} />
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    value={bookingData.time}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.time ? "border-red-500" : "border-gray-600"
                    }`}
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time}</p>}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="text-green-400 mr-3" size={24} />
                Additional Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Items to Remove</label>
                  <textarea
                    name="notes"
                    value={bookingData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Please describe the items you need removed (e.g., furniture, appliances, construction debris, etc.)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Special Instructions</label>
                  <textarea
                    name="specialInstructions"
                    value={bookingData.specialInstructions}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Any special access instructions, parking details, or other important information"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-2 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle size={20} />
                    <span>Confirm Booking</span>
                  </>
                )}
              </button>
              <p className="text-gray-400 text-sm mt-4">
                By submitting this form, you agree to our terms of service and privacy policy.
              </p>
            </div>
          </form>
        </div>
      </section>

    </div>
  )
}
