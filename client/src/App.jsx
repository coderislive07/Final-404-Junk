import React from "react"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Home from "./pages/home"
import Locations from "./pages/Locations"
import Howitworks from "./pages/how-it-works"
import Services from "./pages/Services"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Why404junk from "./pages/why-404-junk"
import Booknow from "./pages/Book-now"
import Rates from "./pages/Rates"
import ExpansionArticle from "./news/expansion-article"
import RecyclingArticle from "./news/recycling-article"
import SatisfactionArticle from "./news/satisfaction-article"
function App() {
  return (
    <>
    <Navbar/>
    <Router>
    <Routes>
      <Route path = "/" element={<Home/>}></Route>
      <Route path = "/rates" element={<Rates/>}></Route>
      <Route path = "/locations" element={<Locations/>}></Route>
      <Route path = "/services" element={<Services/>}></Route>
      <Route path = "/how-it-works" element={<Howitworks/>}></Route>
      <Route path = "/why-404-junk" element={<Why404junk/>}></Route>
      <Route path = "/book-now" element={<Booknow/>}></Route>
      <Route path = "/expansion-article" element={<ExpansionArticle/>}></Route>
      <Route path = "/recycling-article" element={<RecyclingArticle/>}></Route>
      <Route path = "/satisfaction-article" element={<SatisfactionArticle/>}></Route>
      
      </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
