import React from "react";
import { Link } from "react-router-dom";
import { monumentsData } from "../const/monument";

const MonumentsSection = () => {
  return (
    <div className="card p-10 mt-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#8392e2]">
        Famous Monuments
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {monumentsData.map((monument) => (
          <div
            key={monument.id}
            id="auto-show"
            className=" hover:scale-105 w-[300px] bg-[#07182E] flex flex-col justify-between items-center text-center p-5 rounded-[20px] shadow-lg transition-all duration-400 overflow-visible smcard"
          >
          
            <div className="z-[3] shoe-image-wrapper flex justify-center items-center pointer-events-none">
              <img
                src={monument.images[0]}
                alt={monument.name}
                className=" w-full h-40 object-cover relative transition-transform duration-500 hover:scale-110 "
              />
            </div>

            <h3 className="text-white z-[2] relative mt-4 text-lg font-bold">
              {monument.name}
            </h3>
            <p className="text-white z-[2] relative text-sm">{monument.location}</p>
            <p className="text-white z-[2] relative text-sm mt-2 line-clamp-2">
              {monument.shortDescription}
            </p>

            <Link
              to={`/monuments/${monument.id}`}
              className=" z-[10] border-[0.25em] border-[#d9b0ff] px-4 py-2 text-[#d9b0ff] text-sm font-bold bg-[#643d88] rounded-xl outline-none shadow-[0_0.5em_1em_#d9b0ff,0_0_1.5em_rgba(191,123,255,0.78),inset_0_0_0.5em_#d9b0ff] text-shadow-sm transition-all duration-300 relative mt-4 hover:bg-[#d9b0ff] hover:text-[#643d88] active:shadow-[0_0.4em_1em_#d9b0ff,0_0_1.5em_rgba(191,123,255,0.78),inset_0_0_0.5em_#d9b0ff]"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonumentsSection;
