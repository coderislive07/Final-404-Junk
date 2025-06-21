import React from "react"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

export default function BCMap({ cities }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        document.head.appendChild(link)
      }

      // Load JS
      if (!window.L) {
        const script = document.createElement("script")
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        script.onload = () => {
          setMapLoaded(true)
        }
        document.head.appendChild(script)
      } else {
        setMapLoaded(true)
      }
    }

    loadLeaflet()
  }, [])

  useEffect(() => {
    if (!mapLoaded || !window.L || !mapRef.current || mapInstanceRef.current) return

    // Initialize map centered on BC
    const map = window.L.map(mapRef.current, {
      center: [53.7267, -127.6476], // Center of BC
      zoom: 6,
      zoomControl: true,
      scrollWheelZoom: true,
    })

    // Add OpenStreetMap tiles
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map)

    // Custom icons
    const featuredIcon = window.L.divIcon({
      className: "custom-marker featured-marker",
      html: `
        <div style="
          width: 24px;
          height: 24px;
          background: #22c55e;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          position: relative;
        ">
          <div style="
            width: 36px;
            height: 36px;
            background: rgba(34, 197, 94, 0.3);
            border-radius: 50%;
            position: absolute;
            top: -9px;
            left: -9px;
            animation: pulse 2s infinite;
          "></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    })

    const regularIcon = window.L.divIcon({
      className: "custom-marker regular-marker",
      html: `
        <div style="
          width: 18px;
          height: 18px;
          background: #6b7280;
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        "></div>
      `,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
    })

    // Add CSS for pulse animation
    if (!document.querySelector("#pulse-animation")) {
      const style = document.createElement("style")
      style.id = "pulse-animation"
      style.textContent = `
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Add markers for each city
    cities.forEach((city) => {
      const icon = city.featured ? featuredIcon : regularIcon
      const marker = window.L.marker([city.coordinates.lat, city.coordinates.lng], { icon })

      // Create popup content
      const popupContent = `
        <div style="min-width: 250px; font-family: system-ui, -apple-system, sans-serif;">
          <div style="margin-bottom: 12px;">
            <h3 style="margin: 0 0 4px 0; font-size: 18px; font-weight: bold; color: #1f2937;">
              ${city.name}
            </h3>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              ${city.province} • Population: ${city.population}
            </p>
          </div>
          
          <p style="margin: 0 0 12px 0; color: #374151; font-size: 14px; line-height: 1.4;">
            ${city.description}
          </p>
          
          <div style="display: flex; gap: 12px; margin-bottom: 12px; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="color: ${city.coverage === "Full Coverage" ? "#22c55e" : "#f59e0b"}; font-size: 12px;">●</span>
              <span style="color: #374151; font-size: 12px;">${city.coverage}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="color: #6b7280; font-size: 12px;">⏱</span>
              <span style="color: #374151; font-size: 12px;">${city.responseTime}</span>
            </div>
          </div>
          
          <div style="margin-bottom: 12px;">
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              ${city.services
                .map(
                  (service) =>
                    `<span style="background: rgba(34, 197, 94, 0.1); color: #22c55e; padding: 2px 8px; border-radius: 12px; font-size: 11px;">${service}</span>`,
                )
                .join("")}
            </div>
          </div>
          
          <a href="/book-now" style="
            display: inline-block;
            width: 100%;
            background: #22c55e;
            color: white;
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 6px;
            text-align: center;
            font-weight: 600;
            font-size: 14px;
            transition: background-color 0.2s;
          " onmouseover="this.style.background='#16a34a'" onmouseout="this.style.background='#22c55e'">
            📞 Book Service
          </a>
        </div>
      `

      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: "custom-popup",
      })

      marker.addTo(map)
      markersRef.current.push(marker)

      // Add click event to marker
      marker.on("click", () => {
        setSelectedCity(city)
      })
    })

    // Fit map to show all markers
    const group = new window.L.featureGroup(markersRef.current)
    map.fitBounds(group.getBounds().pad(0.1))

    mapInstanceRef.current = map

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
      markersRef.current = []
    }
  }, [mapLoaded, cities])

  if (!mapLoaded) {
    return (
      <div className="w-full h-96 bg-gray-800/50 border border-gray-700 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading Interactive Map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full">
      {/* Map Container */}
      <div ref={mapRef} className="w-full h-96 rounded-2xl border border-gray-700 overflow-hidden z-10" />

      {/* Map Controls Overlay */}
      <div className="absolute top-4 right-4 bg-gray-900/90 border border-gray-600 rounded-lg p-3 backdrop-blur-sm z-20">
        <h4 className="text-white font-semibold text-sm mb-2">Legend</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            <span className="text-gray-300 text-xs">Featured Locations</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full border-2 border-white shadow-sm"></div>
            <span className="text-gray-300 text-xs">Other Locations</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-gray-900/90 border border-gray-600 rounded-lg p-3 backdrop-blur-sm z-20">
        <p className="text-gray-300 text-sm">
          <MapPin className="inline w-4 h-4 mr-1" />
          Click markers for details
        </p>
      </div>

      {/* Map Statistics */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-400">{cities.length}</div>
          <div className="text-gray-400 text-sm">Cities Served</div>
        </div>
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-400">{cities.filter((c) => c.featured).length}</div>
          <div className="text-gray-400 text-sm">Featured Locations</div>
        </div>
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-400">
            {cities.filter((c) => c.coverage === "Full Coverage").length}
          </div>
          <div className="text-gray-400 text-sm">Full Coverage</div>
        </div>
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-400">
            {cities.filter((c) => c.responseTime === "Same Day").length}
          </div>
          <div className="text-gray-400 text-sm">Same Day Service</div>
        </div>
      </div>
    </div>
  )
}
