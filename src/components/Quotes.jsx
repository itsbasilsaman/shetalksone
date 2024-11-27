import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Quotes() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Target devices with max-width 768px
        settings: {
          slidesToShow: 1, // Show only 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="carousel-section w-full sm:h-auto px-4 py-10 sm:px-24 sm:py-20 flex flex-col items-center gap-10">
        <div className="slider-container w-full">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="slide-container px-4">
              <div className="slide bg-gray-200 mx-auto px-6 py-8 rounded-lg shadow-md">
                <img
                  src="https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain"
                  alt="Person"
                  className="w-16 h-16 object-cover rounded-full mx-auto"
                />
                <p className="py-2 text-center text-lg font-medium text-gray-700">Lee Sully</p>
                <h3 className="text-xl text-center font-semibold">
                  We built our prototype in only 3 days, it was seamless
                </h3>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="slide-container px-4">
              <div className="slide bg-gray-200 mx-auto px-6 py-8 rounded-lg shadow-md">
                <img
                  src="https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain"
                  alt="Person"
                  className="w-16 h-16 object-cover rounded-full mx-auto"
                />
                <p className="py-2 text-center text-lg font-medium text-gray-700">Lee Sully</p>
                <h3 className="text-xl text-center font-semibold">
                  We built our prototype in only 3 days, it was seamless
                </h3>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="slide-container px-4">
              <div className="slide bg-gray-200 mx-auto px-6 py-8 rounded-lg shadow-md">
                <img
                  src="https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain"
                  alt="Person"
                  className="w-16 h-16 object-cover rounded-full mx-auto"
                />
                <p className="py-2 text-center text-lg font-medium text-gray-700">Lee Sully</p>
                <h3 className="text-xl text-center font-semibold">
                  We built our prototype in only 3 days, it was seamless
                </h3>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="slide-container px-4">
              <div className="slide bg-gray-200 mx-auto px-6 py-8 rounded-lg shadow-md">
                <img
                  src="https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain"
                  alt="Person"
                  className="w-16 h-16 object-cover rounded-full mx-auto"
                />
                <p className="py-2 text-center text-lg font-medium text-gray-700">Lee Sully</p>
                <h3 className="text-xl text-center font-semibold">
                  We built our prototype in only 3 days, it was seamless
                </h3>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Quotes;
