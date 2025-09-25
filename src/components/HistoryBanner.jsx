import { useEffect, useState } from "react";

export default function Banner() {
  const images = [
    "/history/history2.jpg",

    "/historyslider/1.avif",
    "/historyslider/2.avif",
    "/historyslider/4.jpg",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="relative w-full h-[100vh] overflow-hidden ">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out  ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="flex flex-col gap-4 items-center justify-center text-white font-bold text-[35px] md:text-[40px] lg:text-[50px] z-10 absolute top-[20%] w-full">
          <h1 className=" text-3xl md:text-5xl font-bold text-center px-4">
            Explore the Timeline of Ancient Egypt
          </h1>
          <p className=" text-lg md:text-2xl font-bold text-center px-4">
            Step into the ancient world and explore the incredible history
            <br />
            achievements, and mysteries of the Egyptian Pharaohs
          </p>
          <button
            className="px-[28px] py-[12px] bg-[#0f0f0f] border-none rounded-[30px] text-white text-lg cursor-pointer transition-all duration-500 ease-in-out hover:bg-white hover:text-black "
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("history").offsetTop,
                behavior: "smooth",
              })
            }
          >
            Explore
          </button>
        </div>
      </div>
      <h2
        className="text-3xl font-bold text-center mt-10 text-[#8392e2]"
        id="history"
      >
        History Timeline
      </h2>
    </div>
  );
}
