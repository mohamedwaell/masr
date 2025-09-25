import React from 'react'

const MVed = () => {
  return (
    
       <section>
          <div className="musuem bg-[url('/musum/musum.jpg')] w-[100%] h-[100vh] bg-cover bg-center flex justify-center items-center flex-col gap-[20px] text-center">
          <h1  className="text-5xl text-[#fcd34d] mb-[20px] [text-shadow:2px_3px_#111111] font-bold">Welcome to the Egyptian Museum</h1>
          <p  className="text-2xl text-white font-bold max-w-[600px]">Dive into the mysteries of the pharaohs and uncover Egypt's timeless treasures.</p>
          <button className="px-[28px] py-[12px] bg-[#fcd34d] border-none rounded-[30px] text-black text-[1em] cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
          onClick={() => window.scrollTo({ top: document.getElementById('gallery').offsetTop, behavior: 'smooth' })}>Explore Gallery</button>
          </div>
       <h2 className=" font-bold text-center mt-10 text-5xl text-[#fcd34d]  [text-shadow:2px_3px_#111111] font-bold" id='gallery'>
       Famous Musuems
     </h2>
    </section>
    
  )
} 

export default MVed
