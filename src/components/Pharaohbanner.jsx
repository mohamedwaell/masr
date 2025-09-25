
import React, { useState } from "react";

const PharaohSection = () => {
  const [currentImg, setCurrentImg] = useState('/pharaohs/pharaohs.jpg');
  const [bgImage, setBgImage] = useState('/pharaohs/pharaohs1.jpg');

  const images = [
    '/pharaohs/pharaohs.jpg',
    '/pharaohs/pharaohs1.jpg',
    '/pharaohs/pharaohs3.jpg',
  ];

  const transitionDuration = 2000;

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = images.findIndex((image) => image === currentImg);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImg(images[nextIndex]);
      setBgImage(currentImg);
    }, transitionDuration * 2);

    return () => clearInterval(intervalId);
  }, [currentImg, images, transitionDuration]);

  return (
    <section>
    <section
      className="min-h-screen w-full flex flex-wrap items-center justify-between gap-10 px-6 py-24 text-[#ccc] relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transition: `background-image ${transitionDuration}ms ease-in-out`,
      }}
    >
      <div className="sm:w-full lg:max-w-1/2 text-center px-4">
        <h2 className="text-[3em] text-[#f5d76e] mb-5 drop-shadow-[2px_2px_8px_black]">
          Discover the Pharaohs of Egypt
        </h2>
        <p className="text-[1.2em] leading-relaxed text-[#e3cfa1] drop-shadow-[1px_1px_6px_black]">
          Step into the mystical world of ancient Egypt. Learn about the mighty rulers, their stories, and the legacy they left behind.
        </p>

        <button
          className="mt-8 px-9 py-4 text-[1.1em] rounded-full bg-gradient-to-r from-[#d6b372] to-[#f5e6b0] text-black cursor-pointer relative overflow-hidden shadow-[0_0_10px_#d6b372] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_#ffd700,0_0_40px_#ffd70070]"
          onClick={() => {
            window.scrollTo({
              top: document.getElementById('pharaohs').offsetTop,
              behavior: 'smooth',
            })
          }}
        >
          <span className="relative z-10">Explore Now</span>
          <span className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.3)_10%,transparent_70%)] animate-shine z-0" />
        </button>
      </div>

      <div className="">
        <img
          src={currentImg}
          alt="Pharaoh"
          className="w-[320px] max-w-full rounded-[15px] shadow-[0_0_30px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer "
          onClick={() => {
            const currentIndex = images.findIndex((image) => image === currentImg);
            const nextIndex = (currentIndex + 1) % images.length;
            setCurrentImg(images[nextIndex]);
            setBgImage(currentImg);
          }}
          style={{
            transition: `transform ${transitionDuration}ms ease-in-out`,
          }}
        />
      </div>
      
    </section>
    <h2 className="text-3xl font-bold text-center mb-10 text-[#8392e2] mt-10" id='pharaohs'>
              Famous Pharoahs
            </h2>
      
    </section>
  );
};

export default PharaohSection;

