import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY >
        window.innerHeight - Math.floor(window.innerHeight / 3)
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const links = [
    {
      href: "https://mo-wael.com",
      text: "© 2025 Mohamed Wael.",
    },
    {
      href: "https://ibrahim-hemdan.com",
      text: "© 2025 HEMA.",
    },
  ];
  return (
    <footer
      className=" text-neon-blue items-center
     flex flex-col justify-center mt-[50px] py-5 
     border-t-2 border-[#8392e2] text-x backdrop-blur-lg"
    >
      <p className="mb-5">Follow us:</p>
      <div className="flex gap-10 mb-5">
        <a href="https://www.facebook.com/" target="_blank">
          {" "}
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank">
          {" "}
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          {" "}
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          {" "}
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-neutral-400 mt-3">
        {links.map(({ href, text }) => (
          <a
            key={text}
            href={href}
            target="_blank"
            className="relative text-white text-lg font-bold 
             after:absolute after:left-0 after:-bottom-1 
             after:h-[2px] after:w-0 after:bg-white 
             after:transition-all after:duration-500 after:ease-in-out 
             hover:after:w-full"
          >
            {text}
          </a>
        ))}
      </div>
      {visible && (
        <button
          className="logo fixed bottom-4 right-4 bg-[#9b59b6]  text-white px-3 py-3 rounded-full hover:bg-[#a66bbe] transition "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          👆
        </button>
      )}
    </footer>
  );
};

export default Footer;
