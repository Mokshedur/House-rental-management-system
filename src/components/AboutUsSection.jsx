import AboutUsImage from "../assets/images/about-us.jpg";

const AboutUsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-14">
      <div>
        <img
          src={AboutUsImage}
          alt="About us"
          width={500}
          height={550}
          className="w-full rounded-xl shadow-md"
        />
      </div>
      <div>
        <h4 className="text-xl font-bold text-orange">About Us</h4>
        <h2 className="font-bold text-4xl text-key-dark">
          About Us We are qualified & of experience in this field
        </h2>
        <p className="text-base font-normal text-light-gray mt-7">
          At our house rental system, we are passionate about connecting people
          with their perfect homes. We understand that finding the right living
          space is one of the most important decisions you can make, and we want
          to make that process as seamless as possible. Our team consists of
          dedicated professionals who are committed to providing top-notch
          customer service and support throughout your rental journey.
        </p>
        <p className="text-base font-normal text-light-gray mt-5">
          We take pride in our extensive database of high-quality properties and
          our ability to match tenants with homes that meet their unique needs
          and preferences. At our rental system, we believe that everyone
          deserves a comfortable and safe place to call home, and we strive to
          make that a reality for each and every one of our clients.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
