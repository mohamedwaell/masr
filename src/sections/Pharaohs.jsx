import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pharoahsdata from '../components/Pharoahsdata'
import PharaohSection from '../components/Pharaohbanner'
const Pharaohs = () => {
  return (
    <section >
      <Navbar />
      <PharaohSection />
      <Pharoahsdata/>

      <Footer />
    </section>
  )
}

export default Pharaohs
