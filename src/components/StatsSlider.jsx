import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const data = [
  {
    text1: (
      <>
        Industry-leading <span className="text-blue-500">expertise</span>,
        services & solutions
      </>
    ),
  },
  {
    text1: (
      <>
        <span className="text-blue-500">75%</span> of the top 40 European and US
        cyber insurance carriers utilize CyberCube analytics
      </>
    ),
    footer: "AM Best, S&P Global",
  },
  {
    text1: (
      <>
        Over <span className="text-blue-500">1 billion</span> technology
        dependencies
      </>
    ),
  },
  {
    text1: (
      <>
        Industry-leading <span className="text-blue-500">expertise</span>,
        services & solutions
      </>
    ),
  },
  {
    text1: (
      <>
        <span className="text-blue-500">75%</span> of the top 40 European and US
        cyber insurance carriers utilize CyberCube analytics
      </>
    ),
    footer: "AM Best, S&P Global",
  },
  {
    text1: (
      <>
        Over <span className="text-blue-500">1 billion</span> technology
        dependencies
      </>
    ),
  },
];

const StatsSlider = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative w-full max-w-[90vw] mx-auto pb-14">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, i) => (
          <div key={i} className="gap-5">
            <div className="border p-5 min-h-[320px] flex flex-col justify-between bg-white">
              <h2 className="text-4xl leading-snug font-light text-gray-900">
                {item.text1}
              </h2>
              {item.footer && (
                <p className="mt-6 text-gray-500 text-sm">{item.footer}</p>
              )}
            </div>
          </div>
        ))}
      </Slider>
      <br />
      {/* ✅ Center Bottom Arrows */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-4">
        <button
          onClick={() => sliderRef?.current?.slickPrev()}
          className="border p-3 bg-white hover:bg-gray-100 transition"
        >
          <FaArrowLeft size={18} />
        </button>

        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className="border p-3 bg-white hover:bg-gray-100 transition"
        >
          <FaArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default StatsSlider;
