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
            date={period.date}
            // iconStyle={{ background: "#c084fc", color: "#fff", }}
            contentStyle={{
              background: "#f5f3ff",
              color: "#000",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            iconClassName="text-white bg-[#000]  "
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            id="auto-show"
            dateClassName="text-gray-200 font-bold text-[30px] md:text-[50px]"
            className="hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={period.images[0]}
              alt={period.title}
              className="w-30 h-30 object-cover rounded"
            />
            <div className="ml-4 flex flex-col align-center text-center">
              <h3 className="text-xl font-bold">{period.title}</h3>
              <p>{period.shortDescription}</p>
              <Link
                to={`/history/${period.id}`}
                className="mt-2 inline-block px-4 py-2 bg-[#000] text-white rounded hover:bg-[#0f0f0f]  transition duration-500 ease-in-out"
              >
                Read More
              </Link>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default HistoryTimeline;
