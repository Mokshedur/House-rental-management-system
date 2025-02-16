import React, { useEffect, useState } from "react";
import { baseURL } from "../../config";
import { Link } from "react-router-dom";
import axios from "axios";
import { updateHouse } from "../../utils/house";

const SellerHouseListPage = () => {
  const [houses, setHouses] = useState([]);
  const [search, setSearch] = useState({ searchBy: "city", keyword: "" });

  useEffect(() => {
    const token = localStorage.getItem("auth");
    axios
      .get(`${baseURL}/houses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data?.data?.houses);
        setHouses(data.data?.houses);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <h2 className="font-bold text-key-dark text-2xl mb-5">House list</h2>
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search city"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) =>
              setSearch((p) => ({ ...p, keyword: e.target.value }))
            }
          />
          <select
            className="select select-bordered"
            onChange={(e) =>
              setSearch((p) => ({ ...p, searchBy: e.target.value }))
            }
          >
            <option disabled selected>
              Search by
            </option>
            <option value={"city"}>City</option>
            <option value={"streetName"}>Street</option>
            <option value={"rentPrice"}>Price</option>
          </select>
        </div>
        <div className="flex items-center">
          <Link className="btn btn-info mr-4" to={"/_/seller/add-house"}>
            Add House
          </Link>
        </div>
      </div>
      <div>
        <ul>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>City/State</th>
                  <th>Details</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {houses
                  .filter((e) =>
                    RegExp(search.keyword, "i").test(e[search.searchBy])
                  )
                  .map((house, i) => {
                    return (
                      <tr key={i}>
                        <td
                          style={{
                            backgroundColor: house?.deleted
                              ? "#f7c7c7"
                              : "white",
                          }}
                        >
                          <div className="avatar">
                            <div className="mask w-32 h-32">
                              {/* If images is not found the hide the image */}
                              {house.images.length ? (
                                <img
                                  src={`${baseURL}/public/${house.images[0]}`}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              ) : (
                                false
                              )}
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            backgroundColor: house?.deleted
                              ? "#f7c7c7"
                              : "white",
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <div>
                              <div className="font-bold">{house.city}</div>
                              <div className="text-sm opacity-50">
                                {house.streetName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            backgroundColor: house?.deleted
                              ? "#f7c7c7"
                              : "white",
                          }}
                        >
                          Apt no: {house?.aptNo}
                          <br />
                          No of Bedrooms: {house?.noOfBedRooms}
                          <br />
                        </td>
                        <td
                          style={{
                            backgroundColor: house?.deleted
                              ? "#f7c7c7"
                              : "white",
                          }}
                        >
                          {house.rentPrice}
                        </td>
                        <td
                          style={{
                            backgroundColor: house?.deleted
                              ? "#f7c7c7"
                              : "white",
                          }}
                        >
                          {house?.isRented ? (
                            <Link to={"#"} className="btn  btn-xs">
                              Rented
                            </Link>
                          ) : (
                            <Link to={"#"} className="btn btn-warning btn-xs">
                              Not Rented
                            </Link>
                          )}
                        </td>
                        <th
                          style={{
                            backgroundColor: house?.deleted
                              ? "#f7c7c7"
                              : "white",
                          }}
                        >
                          {house?.isPublished ? (
                            <Link
                              to={"#"}
                              className="btn btn-warning btn-xs"
                              onClick={() => {
                                updateHouse(
                                  house._id,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  !house?.isPublished
                                ).then(() => {
                                  setHouses((p) =>
                                    p.map((q) =>
                                      q._id === house._id
                                        ? { ...q, isPublished: !q.isPublished }
                                        : q
                                    )
                                  );
                                });
                              }}
                            >
                              Un Publish
                            </Link>
                          ) : (
                            <Link
                              to={"#"}
                              className="btn btn-success btn-xs"
                              onClick={() => {
                                updateHouse(
                                  house._id,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  !house?.isPublished
                                ).then(() => {
                                  setHouses((p) =>
                                    p.map((q) =>
                                      q._id === house._id
                                        ? { ...q, isPublished: !q.isPublished }
                                        : q
                                    )
                                  );
                                });
                              }}
                            >
                              Publish
                            </Link>
                          )}
                          <Link
                            to={`/_/seller/house-list/${house._id}`}
                            className="ml-4 btn btn-primary btn-xs"
                          >
                            details
                          </Link>
                        </th>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SellerHouseListPage;
