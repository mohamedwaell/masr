import React from "react";
import { Link } from "react-router-dom";
import { monumentsData } from "../const/museum";

const MuseumsSection = () => {
  return (
    <div className="p-10 mt-10 card">
     

      <div className="flex flex-wrap justify-center gap-10">
        {monumentsData.map((monument) => (
          <div
            key={monument.id}
            className="w-[300px] bg-[#2c2c2c] rounded-[15px] overflow-hidden shadow-[0_0_15px_gold] text-white text-center transition-transform duration-300 hover:-translate-y-2"
          >
            <img
              src={monument.museumPic}
              alt={monument.name}
              className="w-full h-[200px] object-cover"
            />
            <div className="description p-4">
              <h3 className="text-lg font-bold mb-1">   🏛️{monument.name}</h3>
              <p className="text-sm mb-1">📍{monument.location}</p>
              <p className="text-sm mb-4 line-clamp-2">
                {monument.shortDescription}
              </p>

              <Link
                to={`/museums/${monument.id}`}
                className="inline-block bg-[#ffd700] text-black px-5 py-2 mb-4 rounded-[10px] font-bold transition-colors duration-300 hover:bg-[#fff200]"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MuseumsSection;
