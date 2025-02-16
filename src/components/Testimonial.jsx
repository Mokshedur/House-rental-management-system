import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardLayout from "./CardLayout";

const Testimonial = ({ image, name, occupation, content }) => {
  return (
    <CardLayout>
      <div className="flex justify-start items-center pt-4 px-4">
        <div>
          <img
            src={image}
            alt="Person"
            width={60}
            height={60}
            className="rounded-full border-none"
          />
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-xl text-key-dark">{name && name}</h3>
          <h4 className="font-semibold text-light-gray text-base">
            {occupation && occupation}
          </h4>
        </div>
        <div></div>
      </div>
      <div className="my-5 px-4">
        <p className="text-light-gray">{content}</p>
      </div>
      <div className="pb-4 px-4">
        {Array(5)
          .fill(1)
          .map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="text-[#FF912C] mr-2" />
          ))}
      </div>
    </CardLayout>
  );
};

export default Testimonial;
