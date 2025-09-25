import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Td from '../components/TD'
import MonumentsSection from '../components/MonumentData'
const Monuments = () => {
  return (
    <div>
      <Navbar />
     
      <Td folder={"history"} photo={"/history/amon.png"} />

  
      <MonumentsSection />
    

      <Footer />
    </div>
  )
}

export default Monuments
