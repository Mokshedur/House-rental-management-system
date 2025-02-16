import CardLayout from "./CardLayout";
 
import Image1 from '../assets/images/our-service.jpg'
import Image2 from '../assets/images/hero-image-02.jpg'
import Image3 from '../assets/images/hero-image-03.jpg'

const OurServicesSection = () => {
  return (
    <section>
      <h4 className="text-xl font-bold text-orange text-center">Services</h4>
      <h2 className="font-bold text-4xl text-key-dark text-center">
        Our Service Area
      </h2>
      <p className="text-base font-normal text-light-gray text-center mt-5 max-w-2xl mx-auto">
        At our house rental system, we offer a wide range of services to help
        tenants find their perfect homes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        <CardLayout>
        <img src={Image1} alt="" className="rounded-lg" />
        
          <h3 className="text-key-dark font-bold text-xl mt-2">01</h3>
          <div className="flex justify-between mt-2 ">
            <p>
              We maintain an extensive database of high-quality rental
              properties, including houses, apartments, and condos. We work with
              landlords and property managers to ensure that our listings are
              accurate and up-to-date.
            </p>
          </div>
        </CardLayout>
        <CardLayout>
        <img src={Image2} alt="" className="rounded-lg" />
          <h3 className="text-key-dark font-bold text-xl mt-2">02</h3>
          <div className="flex justify-between mt-2 ">
            <p>
              We understand that viewing a property in person is an important
              part of the rental process. That's why we offer virtual and
              in-person property viewings to help you get a better sense of the
              space before you make a decision
            </p>
          </div>
        </CardLayout>
        <CardLayout>
        <img src={Image3} alt="" className="rounded-lg" />
          <h3 className="text-key-dark font-bold text-xl mt-2">03</h3>
          <div className="flex justify-between mt-2 ">
            <p>
              Once you've found your dream home, we continue to provide support
              throughout your tenancy. We're here to answer any questions you
              may have and to address any issues that may arise during your
              rental period
            </p>
          </div>
        </CardLayout>
      </div>
    </section>
  );
};

export default OurServicesSection;
