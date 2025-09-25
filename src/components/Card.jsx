import { Link } from "react-router-dom";

const sections = [
  {
    title: "Monuments",
    text: "Stand before awe-inspiring monuments like the Pyramids of Giza and the Sphinx — masterpieces of engineering and mystery that defy time.",
    image: "/heroSlider/1.webp",
    path: "/monuments",
    reverse: false,
  },
  {
    title: "History of Egypt",
    text: "Trace Egypt’s journey from ancient dynasties to modern times. Experience a land where history breathes through every stone and river.",
    image: "/heroSlider/2.jpg",
    path: "/history",
    reverse: true,
  },
  {
    title: "Pharaohs",
    text: "Meet the divine rulers of Ancient Egypt — from the mighty Ramses II to the mysterious Tutankhamun. Legends that shaped civilization.",
    image: "/heroSlider/4.jpg",
    path: "/pharaohs",
    reverse: false,
  },
  {
    title: "Museums",
    text: "Explore the treasures of Egypt housed in world-famous museums, preserving thousands of years of awe-inspiring art, relics, and mysteries.",
    image: "/heroSlider/3.webp",
    path: "/museums",
    reverse: true,
  },
];

const EgyptSections = () => {
  return (
    <div className=" card relative overflow-hidden ">
      <div className="absolute inset-0 -z-10"></div>

      {sections.map((section, index) => (
        <section
       
          key={index}
          className={`flex flex-col  ${
            section.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center justify-center min-h-[80vh] gap-10 p-6 md:p-12 transition-all duration-700 ease-in-out`}
          
        >
          <div className="w-full md:w-1/2 p-4 animate-fadeIn">
            <img
              src={section.image}
              alt={section.title}
              className={`w-full rounded-2xl shadow-2xl transform transition-transform duration-700 ease-in-out hover:scale-105 ${
                section.reverse ? "rotate-[2deg]" :"rotate-[-2deg]"
              }`}
            />
          </div>

          <div className="w-full md:w-1/2 p-4 animate-fadeIn delay-100 text-center ">
            <div className="text-yellow-400 text-2xl mb-4 flex justify-center  gap-2">
              <i className="fas fa-landmark"></i>
              <i className="fas fa-feather-alt"></i>
              <i className="fas fa-ankh"></i>
            </div>
            <h1 className="text-3xl md:text-5xl text-purple-300 font-bold mb-4">
              {section.title}
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-6">
              {section.text}
            </p>
            <Link to={section.path}>
              <button className="bg-gradient-to-r from-purple-400 to-indigo-500 py-3 px-8 rounded-full font-bold text-white transition-transform hover:scale-105 hover:shadow-lg">
                Discover More
              </button>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default EgyptSections;
