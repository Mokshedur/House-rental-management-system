import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CardLayout from "./CardLayout";

import { useEffect, useState } from "react";
import { getHouses } from "../utils/house";
import { baseURL } from "../config";

const OurProducts = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Load houses form backend & update the houses state
    getHouses(false).then((data) => {
      console.log(data);
      if (data.success) setHouses(data.data.houses);
    });
  }, []);

  return (
    <section>
      <h4 className="text-xl font-bold text-orange text-center">
        Latest Houses
      </h4>
      <h2 className="font-bold text-4xl text-key-dark text-center">
        Browse Latest Houses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 items-start">
        {houses.slice(0, 9).map((house) => (
          <Link to={`/houses/${house._id}`}>
            <CardLayout>
              {house?.images?.length ? (
                <img
                  src={`${baseURL}/public/${house?.images[0]}`}
                  alt=""
                  width={300}
                  height={200}
                  className="w-full rounded-xl max-h-72"
                />
              ) : (
                false
              )}
              <h3 className="text-key-dark font-bold text-xl mt-2">
                {house?.city}
              </h3>
              <div className="flex justify-between mt-2 ">
                <h3 className="font-semibold text-orange">
                  Price: {house?.rentPrice}
                </h3>
                <FontAwesomeIcon icon={faArrowRight} className="text-orange" />
              </div>
            </CardLayout>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
