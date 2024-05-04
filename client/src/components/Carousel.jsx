import React, { useState, useEffect } from "react";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1800); // Adjust the interval duration (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="p-3 relative max-h-full  w-10/12 mx-auto my-auto">
      <div
        className=" mx-auto"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent transition-all duration-300 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              alt=""
              className="rounded-2xl w-full h-full opacity-[0.13] md:opacity-100"
              src={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
