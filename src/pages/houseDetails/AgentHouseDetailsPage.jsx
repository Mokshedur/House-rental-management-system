import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Autoplay, Keyboard, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { baseURL } from "../../config";
import { deleteHouse, updateHouse } from "../../utils/house";

const AgentHouseDetailsPage = () => {
  const [house, setHouse] = useState();
  const [images, setImages] = useState();
  const [toast, setToast] = useState();

  const params = useParams();

  useEffect(() => {
    const houseId = params.houseId;

    const token = localStorage.getItem("auth");
    axios
      .get(`${baseURL}/houses/${houseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data.data);
        setHouse(data.data);
      });
  }, [params]);

  const handleFileSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("upload", images);
    updateHouse();
  };

  return (
    <div>
      {toast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <div>
              <span>{toast || "House updated successfully."}</span>
            </div>
          </div>
        </div>
      )}
      <h2 className="text-xl font-bold mt-4 mb-6">House details</h2>
      <div>
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
        <form
          encType="multipart/form-data"
          onSubmit={handleFileSubmit}
          className="mt-5"
        >
          <label htmlFor="" className="font-bold">
            Update images
          </label>
          <input
            type="file"
            className="ml-5 file-input file-input-bordered file-input-primary w-full max-w-xs"
            multiple
            accept="image/png,image/jpg,image/jpeg"
            onChange={(e) => setImages(e.target.files)}
          />
        </form>
      </div>
      <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data">
        <div className="overflow-x-auto mt-5">
          <table className="table table-zebra w-full">
            <tbody>
              {/* row 1 */}
              <tr>
                <td>City</td>
                <td>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setHouse((p) => ({ ...p, city: e.target.value }));
                    }}
                    value={house?.city}
                  />
                </td>
              </tr>
              <tr>
                <td>Street</td>
                <td>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    value={house?.streetName}
                    onChange={(e) => {
                      setHouse((p) => ({ ...p, streetName: e.target.value }));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Apartment</td>
                <td>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    value={house?.aptNo}
                    onChange={(e) => {
                      setHouse((p) => ({ ...p, aptNo: e.target.value }));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Rent price</td>
                <td>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    value={house?.rentPrice}
                    onChange={(e) => {
                      setHouse((p) => ({ ...p, rentPrice: e.target.value }));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>No of bedrooms</td>
                <td>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    value={house?.noOfBedRooms}
                    onChange={(e) => {
                      setHouse((p) => ({ ...p, noOfBedRooms: e.target.value }));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Other specifications</td>
                <td>
                  <textarea
                    className="textarea textarea-bordered textarea-md w-full max-w-xs"
                    value={house?.otherSpecifications}
                    placeholder="Other specifications"
                    onChange={(e) => {
                      setHouse((p) => ({
                        ...p,
                        otherSpecifications: e.target.value,
                      }));
                    }}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-primary mt-5"
          onClick={() => {
            updateHouse(
              params.houseId,
              house.city,
              house.streetName,
              house.aptNo,
              house.rentPrice,
              house.noOfBedRooms,
              house.otherSpecifications,
              images || null,
              house?.isPublished
            ).then(() => {
              setToast(true);

              setTimeout(() => {
                setToast(false);
              }, 3000);
            });
          }}
        >
          Update
        </button>
        <button
          className="ml-4 btn btn-outline"
          onClick={() =>
            updateHouse(
              params.houseId,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              !house?.isPublished
            ).then(({ data }) => {
              // setHouse((p) => ({ ...p, isPublished: !p.isPublished }));
              setHouse(data.data);
              setToast(data?.message);

              setTimeout(() => {
                setToast(false);
              }, 3000);
            })
          }
        >
          {house?.isPublished ? "Un publish" : "Publish"}
        </button>
        <button
          type="button"
          className="btn btn-error ml-5 btn-outline"
          onClick={() => {
            deleteHouse(params.houseId).then((data) => {
              setToast(data.message || "House deleted");
            });
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default AgentHouseDetailsPage;
