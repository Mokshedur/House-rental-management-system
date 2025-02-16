import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { rentHouse } from "../utils/house";

const HouseRentPage = () => {
  const params = useParams();
  const [cardNo, setCardNo] = useState();
  const [toast, setToast] = useState();


  return (
    <div>
      {toast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <div>
              <span>{toast || "House rented"}.</span>
            </div>
          </div>
        </div>
      )}
      <form
        className="border border-light-gray-2 p-10 max-w-[500px] mx-auto rounded"
        onSubmit={(e) => {
          e.preventDefault();
          rentHouse(params.houseId, cardNo)
            .then((data) => {
              setToast(data.message);

              setTimeout(() => {
                window.location.replace('/_/buyer');
              }, 2000)
            })
            .catch((err) => {
              console.log(err);
              setToast(err.response.data.error);
            });
        }}
      >
        <input
          type="text"
          placeholder="Enter card number here"
          className="input input-bordered w-full max-w-xs"
          required
          onChange={(e) => setCardNo(e.target.value)}
          value={cardNo}
        />
        <br />
        <button className="mt-5 btn btn-primary">Done</button>
      </form>
    </div>
  );
};

export default HouseRentPage;
