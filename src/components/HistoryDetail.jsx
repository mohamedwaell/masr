import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { historyData } from "../const/timeLine";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HistoryDetail = () => {
  const { id } = useParams();
  const period = historyData.find((p) => p.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!period) return <div className="p-6 text-center">Period not found.</div>;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? period.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === period.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[0f0f0f] w-[100%]  bg-cover bg-center bg-no-repeat bg-fixed pt-[10vh]">
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto  text-center bg-[#f3e2c7] border-2 border-black p-8 shadow-xl mb-10">
        <h1 className="text-3xl font-bold text-[#000] border-b-2 border-[#000] pb-5">🏺{period.title}</h1>
        <p className="text-lg mt-2 text-[#000] border-b-2 border-dashed border-[#000] pb-5">{period.fullDescription}</p>

        <div className="relative mt-6 flex justify-center items-center">
          {/* <button
            onClick={handlePrev}
            className="absolute left-0 bg-[#8392e2] text-white px-3 py-3 rounded-xl hover:bg-[#6a7ac0] transition"
          >
            &#10094;
          </button> */}
          <img
            src={period.images[currentIndex]}
            alt={`${period.title} ${currentIndex}`}
            className="w-full sm:h-[50vh] h-[30vh] object-contain rounded-xl"
          />
          {/* <button
            onClick={handleNext}
            className="absolute right-0 bg-[#8392e2] text-white px-3 py-3 rounded-xl hover:bg-[#6a7ac0] transition"
          >
            &#10095;
          </button> */}
        </div>

        {/* <div className="flex justify-center mt-4 gap-2">
          {period.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-[#8392e2]' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div> */}

        <Link
          to="/history"
          className="inline-block mt-6 px-4 py-2 bg-[#000] text-white rounded hover:bg-[#0f0f0f] transition"
        >
          ← Back to Timeline
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HistoryDetail;
