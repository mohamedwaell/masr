import React from "react";

const TD = ({  photo  }) => {
  const images = [
    "/monumentslider/1.webp",
    "/monumentslider/2.webp",
    "/monumentslider/3.webp",
    "/monumentslider/10.webp",
    "/monumentslider/5.webp",
    "/monumentslider/6.webp",
    "/monumentslider/7.webp",
    "/monumentslider/8.webp",
    
  ];
  return (
    <div className="h-[100vh] mt-[8vh] "
    // style={{
    //   backgroundImage: `url("/1.jpg")`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
     >
      <div className="card banner " >
        <div className="slider" style={{ "--quantity": images.length }}>
          {images.map((image, index) => (
            <div className="item" style={{ "--position": index + 1 }}>
              <img src={image} alt="" />
              
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          src={photo}
          alt=""
          className="thing absolute lg:top-[68%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[40vh] object-cover lg:h-[60vh] top-[40%] md:top-[50%] md:h-[50vh] "
        />
      </div>
    </div>
  );
};

export default TD;
