import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addNewHouse } from "../utils/house";

const AddHousePage = () => {
  const [house, setHouse] = useState({});
  const [toast, setToast] = useState();

  const user = JSON.parse(localStorage.getItem("user") || {});

  return (
    <div>
      <Link
        to={user?.role === 'admin' ? '/admin/house-list' : `/_/${user?.role}`}
        className="mb-3 text-blue-800 font-bold"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back to list page
      </Link>
      <div className="flex justify-center mt-5">
        {toast && (
          <div className="toast toast-top toast-end">
            <div className="alert alert-success">
              <div>
                <span>House created successfully.</span>
              </div>
            </div>
          </div>
        )}
        <form
          className="inline-block w-full max-w-md p-8 border border-light-gray-2 rounded"
          onSubmit={(e) => {
            e.preventDefault();

            addNewHouse(house).then(() => {
              setToast(true);
              setHouse({
                city: "",
                streetName: "",
                aptNo: "",
                rentPrice: "",
                noOfBedRooms: "",
                otherSpecifications: "",
                images: [],
              });

              setTimeout(() => {
                setToast(false);
              }, 3000);
            });
          }}
        >
          <div>
            <h2 className="text-2xl font-bold text-key-dark">Add new house</h2>
          </div>
          <div className="flex flex-col mt-5">
            <label>Images (max 5)</label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-info w-full"
              multiple
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) =>
                setHouse((p) => ({ ...p, images: e.target.files }))
              }
            />
          </div>
          <div className="flex flex-col mt-5">
            <label>City</label>
            <input
              type="text"
              placeholder="Enter City"
              className="input input-bordered w-full"
              onChange={(e) =>
                setHouse((p) => ({ ...p, city: e.target.value }))
              }
              value={house.city}
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <label>Street Name</label>
            <input
              type="text"
              placeholder="Enter Street Name"
              className="input input-bordered w-full"
              onChange={(e) =>
                setHouse((p) => ({ ...p, streetName: e.target.value }))
              }
              value={house.streetName}
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <label>Apt No</label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) =>
                setHouse((p) => ({ ...p, aptNo: e.target.value }))
              }
              value={house.aptNo}
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <label>Rent Price</label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) =>
                setHouse((p) => ({ ...p, rentPrice: e.target.value }))
              }
              value={house.rentPrice}
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <label>No of Bedrooms</label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) =>
                setHouse((p) => ({ ...p, noOfBedRooms: e.target.value }))
              }
              value={house.noOfBedRooms}
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <label>Other Specifications</label>
            <textarea
              placeholder=""
              className="textarea textarea-bordered textarea-md w-full"
              onChange={(e) =>
                setHouse((p) => ({ ...p, otherSpecifications: e.target.value }))
              }
              value={house.otherSpecifications}
            ></textarea>
          </div>
          <button className="mt-6 btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddHousePage;
