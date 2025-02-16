import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../config";

const SearchHousePage = () => {
  const [houses, setHouses] = useState([]);
  const [search, setSearch] = useState({ searchBy: "city", keyword: "" });

  useEffect(() => {
    axios
      .get(`${baseURL}/houses`, {})
      .then(({ data }) => {
        console.log(data?.data?.houses);
        setHouses(data.data?.houses);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
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
      <ul className="mt-10">
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
                      <td>
                        <Link to={`/houses/${house._id}`} className="avatar">
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
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/houses/${house._id}`}
                          className="flex items-center space-x-3"
                        >
                          <div>
                            <div className="font-bold">{house.city}</div>
                            <div className="text-sm opacity-50">
                              {house.streetName}
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td>
                        Apt no: {house?.aptNo}
                        <br />
                        No of Bedrooms: {house?.noOfBedRooms}
                        <br />
                      </td>
                      <td>{house.rentPrice}</td>
                      <td>{house?.isRented ? 'Rented' : 'Not rented'}</td>
                      <td>
                        <Link
                          to={`/houses/${house._id}`}
                          className="btn btn-sm btn-info"
                        >
                          View details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </ul>
    </div>
  );
};

export default SearchHousePage;
