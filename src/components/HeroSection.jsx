import { Link } from "react-router-dom";
import { Keyboard, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import heroImage from "../assets/images/hero-image-01.jpg";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <Swiper
        cssMode={true}
        navigation={true}
        autoplay={true}
        modules={[Autoplay, Navigation, Keyboard]}
      >
        <SwiperSlide>
          {/* Slider bg image */}
          <div
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Slider overlay */}
            <div
              className="min-h-[500px] px-7 lg:px-24 pt-24 pb-12"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0) 100%)",
              }}
            >
              <div className="lg:max-w-[552px]">
                <h2 className="text-3xl lg:text-6xl font-bold text-white">
                  Find Your Dream Home Today
                </h2>
                <p className="text-white capitalize leading-8 font-normal text-lg my-6">
                  Welcome to our house rental system website, where you can
                  easily search and find your perfect home.
                </p>
                <div>
                  <Link
                    to={"/search-house"}
                    className="btn btn-error text-white"
                  >
                    Browse Houses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
