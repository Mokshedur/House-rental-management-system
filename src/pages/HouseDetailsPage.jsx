import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Autoplay, Keyboard, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { baseURL } from "../config";

const HouseDetailsPage = () => {
  const [house, setHouse] = useState();
  const [toast, setToast] = useState();
  const params = useParams();

  useEffect(() => {
    const houseId = params.houseId;

    axios
      .get(`${baseURL}/houses/${houseId}`, {})
      .then(({ data }) => {
        console.log(data.data);
        setHouse(data.data);
      })
      .catch((err) => {
        setToast(err.response.data.error);
      });
  }, [params]);

  const loggedUser = JSON.parse(localStorage.getItem("user" || {}));

  const leaveRentedHouse = () => {
    const houseId = params.houseId;
    axios
      .put(
        `${baseURL}/houses/${houseId}/leave-rent`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth")}`,
          },
        }
      )
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <div className="max-w-[600px] mx-auto">
      {toast && (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{toast}</span>
          </div>
        </div>
      )}
      <h2 className="text-xl font-bold mt-4 mb-6">House details</h2>
      <Link to={`/search-house`} className="btn">
        Back to list
      </Link>
      <div className="mt-5">
        {!house?.images.length && (
          <h2 className="text-xl font-medium">No image found</h2>
        )}
        <Swiper
          cssMode={true}
          navigation={true}
          autoplay={true}
          modules={[Autoplay, Navigation, Keyboard]}
        >
          {house?.images?.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={`${baseURL}/public/${img}`}
                alt={house?.city}
                className="block mx-auto"
                width={500}
                height={300}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        encType="multipart/form-data"
        className="mx-auto"
      >
        <div className="overflow-x-auto mt-5">
          <table className="table table-zebra w-full max-w-[600px] mx-auto">
            <tbody>
              {/* row 1 */}
              <tr>
                <td>City</td>
                <td>{house?.city}</td>
              </tr>
              <tr>
                <td>Street</td>
                <td>{house?.streetName}</td>
              </tr>
              <tr>
                <td>Apartment</td>
                <td>{house?.aptNo}</td>
              </tr>
              <tr>
                <td>Rent price</td>
                <td>{house?.rentPrice}</td>
              </tr>
              <tr>
                <td>No of bedrooms</td>
                <td>{house?.noOfBedRooms}</td>
              </tr>
              <tr>
                <td>Other specifications</td>
                <td>{house?.otherSpecifications || "NA"}</td>
              </tr>
              <tr>
                <td>Owner</td>
                <td>
                  {house?.createdBy?.name}
                  <br />
                  {house?.createdBy?.email}
                </td>
              </tr>
              {loggedUser && house?.isRented && (
                <tr>
                  <td>Rented by</td>
                  <td>
                    {loggedUser.name}
                    <br />
                    {loggedUser?.email}
                  </td>
                </tr>
              )}
              {loggedUser && house?.isRented && (
                <tr>
                  <td>Rented at</td>
                  <td>{house?.updatedAt}</td>
                </tr>
              )}
            </tbody>
          </table>

          {loggedUser?.role === "buyer" ? (
            !house?.isRented ? (
              <Link to={`rent`} className="btn btn-primary mt-10">
                Rent this house
              </Link>
            ) : (
              <button
                className="btn btn-error mt-10"
                onClick={() => leaveRentedHouse()}
              >
                Leave this house
              </button>
            )
          ) : (
            false
          )}

          <button
            className="btn btn-primary mt-10 ml-5"
            onClick={() => window.print()}
          >
            Print this page
          </button>
        </div>
      </form>
    </div>
  );
};

export default HouseDetailsPage;
