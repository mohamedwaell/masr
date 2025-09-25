import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import HistoryTimeline from '../components/TimeLine'
import Banner from '../components/HistoryBanner'
const Ages = () => {
  return (
    <section className=" bg-[url('/history/historyhero.jpg')] w-[100%]  bg-cover bg-center bg-no-repeat bg-fixed">
      <Navbar />
      <Banner />
      <HistoryTimeline />
      
      <Footer />
    </section>
  )
}

export default Ages
