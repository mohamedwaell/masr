
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { monumentsData } from "../const/pharoahs";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Pharoahsdetial = () => { 
    const { id } = useParams();
    const monument = monumentsData.find((m) => m.id === id);
  
    if (!monument) {
      return <div className="p-6 text-center">Monument not found.</div>;
    }
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === monument.images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevImage = () => {
      setCurrentImageIndex(
        currentImageIndex === 0 ? monument.images.length - 1 : currentImageIndex - 1
      );
    };
  
    return (
      <div>
        <Navbar />
        <div className="p-6 mt-[10vh] max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#8392e2]">{monument.name}</h1>
          <p className="text-white mb-2">{monument.period}</p>
          <h1 className="text-lg text-gray-100 mb-4">{monument.fullDescription.achievements}</h1>
          <h2 className="text-lg text-[#8392e2] mb-4">{monument.fullDescription.family}</h2>
          <div className="mt-10">
          <h2 className="text-2xl text-white font-semibold mb-4">Pharaohs monuments</h2>
          <Swiper
           modules={[Navigation, Pagination, Autoplay]}
           spaceBetween={20}
           slidesPerView={1}
           navigation
           pagination={{ clickable: true }}
           autoplay={{ delay: 4000, disableOnInteraction: false }}

            className="rounded-xl  relative"
          >
            {monument.items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full  h-[50vh] object-contain rounded-xl mb-10"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-10    rounded-2xl">
                  <h3 className="text-xl text-white font-bold">{item.title}</h3>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>  
          <Link
            to="/pharaohs"
            className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            ← Back to Monuments
          </Link>
        </div>
        <Footer />
  
      </div>
    );
}

export default Pharoahsdetial
