import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'
import CatalogProducts from './components/CatalogProducts'
import AboutUs from './components/AboutUs'
import TopProducts from './components/TopProducts'
import AboutProduction from './components/AboutProduction'
import OurWorks from './components/OurWorks'
import OurAdvantages from './components/OurAdvantages'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Slider/>
      <CatalogProducts/>
      <AboutUs/>
      <TopProducts/>
      <AboutProduction/>
      <OurWorks/>
      <OurAdvantages/>
      <Footer/>
    </>
  )
}

export default App
