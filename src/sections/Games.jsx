import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Games = () => {
  return (
    <div>
      <Navbar />
      <div className=" h-[100vh] flex justify-center flex-col gap-[30px] items-center text-center text-5xl font-bold text-[#8392e2]">
        <h1>
          not available for now
          <br />
          عدي علينا بكرا
        </h1>
        <img src="/Bo7a.jpg" alt="" className="w-[20vw] rounded-full" />
      </div>

      
      <Footer />
    </div>
  )
}

export default Games
