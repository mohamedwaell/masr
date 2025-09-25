import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { monumentsData } from "../const/monument";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MonumentDetail = () => {
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
      currentImageIndex === 0
        ? monument.images.length - 1
        : currentImageIndex - 1
    );
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 mt-[10vh] max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center gap-4 md:gap-8 bg-[#3d2a55] rounded-3xl p-8 shadow-xl mb-10 ">
          <h1 className="text-3xl font-bold text-[#ffcc70]">
            {" "}
            🏺{monument.name}
          </h1>
          <p className="text-black text-xl font-bold mb-2">
            {" "}
            📌{monument.location}
          </p>
          <p className="text-sm md:text-lg text-white mb-4 ">
            {monument.fullDescription}
          </p>
        </div>

        <div className="relative">
          <img
            src={monument.images[currentImageIndex]}
            alt={`${monument.name} image`}
            className="w-full h-100 object-contain rounded-xl"
          />
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            onClick={handlePrevImage}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            onClick={handleNextImage}
          >
            &#10095;
          </button>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          {monument.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${monument.name} ${i}`}
              className="w-20 h-20 object-cover rounded-xl cursor-pointer"
              onClick={() => setCurrentImageIndex(i)}
            />
          ))}
        </div>

        <Link
          to="/monuments"
          className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back to Monuments
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default MonumentDetail;
