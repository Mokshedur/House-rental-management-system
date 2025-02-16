import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../config";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user") || {});
    axios
      .get(`${baseURL}/users/${data?._id}/transactions`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      })
      .then(({ data }) => {
        console.log(data?.data);
        setTransactions(data?.data?.transactions);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="max-w-[600px] mx-auto">
      <h2 className="font-bold mb-3">Transactions</h2>
      {transactions.map((e, i) => (
        <div className="card card-side bg-base-100 shadow-xl mt-5">
          {e?.images?.length ? (
            <figure>
              <img src={`${baseURL}/public/${e?.images[0]}`} alt="Movie" />
            </figure>
          ) : (
            false
          )}
          <div className="card-body">
            <p>City: {e?.city}</p>
            <p>Street name: {e?.streetName}</p>
            <p>Rent price: {e?.transactions?.rentPrice}</p>
            <p>Rented at: {e?.transactions?.rentedAt}</p>
            <p>Owner: {e?.createdBy?.name} - {e?.createdBy?.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
