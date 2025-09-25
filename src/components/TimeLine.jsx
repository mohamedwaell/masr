import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import { historyData } from "../const/timeLine";

const HistoryTimeline = () => {
  return (
    <div className="p-5 ">
      <VerticalTimeline>
        {historyData.map((period, index) => (
          <VerticalTimelineElement
            key={index}
            // iconStyle={{ background: "#c084fc", color: "#fff", }}
            contentStyle={{
              background: "#f5f3ff",
              color: "#000",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            iconClassName="text-white bg-[#000]   "
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            // dateClassName="text-blue-500 font-bold text-lg md:text-4xl  "
            className="hover:scale-105 transition duration-300 ease-in-out "
          >
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={period.images[0]}
                alt={period.title}
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover rounded"
              />
              <div className="ml-4 flex flex-col align-center text-center">
                <h3 className="text-xl font-bold line-clamp-2">
                  {period.title}
                </h3>
                <p className="text-sm mt-2 line-clamp-2">
                  {period.shortDescription}
                </p>
                <Link
                  to={`/history/${period.id}`}
                  className="mt-2 inline-block px-4 py-2 bg-[#000] text-white rounded hover:bg-[#0f0f0f]  transition duration-500 ease-in-out"
                >
                  Read More
                </Link>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default HistoryTimeline;
