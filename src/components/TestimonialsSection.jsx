import { Autoplay, Keyboard, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./Testimonial";

import UserImage from "../assets/images/test-person.png";

const TestimonialsSection = () => {
  return (
    <section>
      <h4 className="text-xl font-bold text-orange text-center">
        Testimonials
      </h4>
      <h2 className="font-bold text-4xl text-key-dark text-center">
        What Customer Says
      </h2>

      <Swiper
        cssMode={true}
        navigation={true}
        autoplay={true}
        modules={[Autoplay, Navigation, Keyboard]}
        slidesPerView={1}
        spaceBetween={30}
        className="mt-10"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <Testimonial
            image={UserImage}
            content="I had a fantastic experience with this house rental system. The website was user-friendly and easy to navigate, and the staff was incredibly helpful throughout the entire rental process. I was able to find my dream home quickly and easily, thanks to their extensive database of high-quality properties. I highly recommend this service to anyone looking for a rental property"
            name={"Awlad Hossain"}
            occupation="Businessname"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Testimonial
            image={UserImage}
            content="I've rented from a few different companies over the years, but none of them compare to this one. The staff was professional and friendly, and they were always available to answer my questions and address any concerns I had. They made the rental process a breeze, and I couldn't be happier with my new home"
            name={"Awlad Hossain"}
            occupation="Businessname"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Testimonial
            image={UserImage}
            content="I recently moved to a new city and was struggling to find a suitable rental property. That's when I stumbled upon this house rental system, and I'm so glad I did. Their website made it easy for me to find properties in the area, and their staff was incredibly helpful in answering my questions and providing me with the information I needed. I'm now happily settled into my new home, and I couldn't have done it without their help. "
            name={"Awlad Hossain"}
            occupation="Businessname"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
