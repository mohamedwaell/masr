import React from "react";
import { useParams, Link } from "react-router-dom";
import { monumentsData } from "../const/museum";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MuseumDetail = () => {
  const { id } = useParams();
  const monument = monumentsData.find((m) => m.id === id);

  if (!monument) {
    return <div className="p-6 text-center">Museum not found.</div>;
  }

  return (
    <div className=" bg-gradient-to-b from-[#212020] to-[#512b15] font-[Cairo] text-[#f5f5dc] m-0 p-0">
      <Navbar />
      <div className="p-6 pt-[10vh] max-w-4xl mx-auto text-center card">
        <div className=" my-[50px] bg-[#200e03] p-[30px] rounded-[15px] shadow-[0_0_30px_rgba(218,165,32,0.4)] transition-all duration-[2000ms] ease-in-out ">
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-bold text-[#ffd700] border-b-2 border-dashed border-[goldenrod] pb-5">
              🏺{monument.name}
            </h1>
            <p className="text-gray-500 mb-2 text-xl font-bold">
              {" "}
              📌{monument.location}
            </p>
            <p className="text-sm md:text-lg text-gray-100 mb-4">
              {monument.fullDescription}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl text-white font-semibold mb-4">
            Inside the Museum
          </h2>
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
                    className="w-full  h-[70vh] object-contain rounded-xl mb-10"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-10    rounded-2xl">
                    <h3 className="text-xl text-white font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Link
          to="/museums"
          className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back to Museums
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default MuseumDetail;
