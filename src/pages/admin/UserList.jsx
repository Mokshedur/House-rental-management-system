import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../config";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("auth");

    axios
      .get(`${baseURL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data.data);
        setUsers(data?.data?.users);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.role}</td>
              <td>
                {!user?.emailVerified && (
                  <button
                    className="btn btn-xs btn-success mr-5"
                    onClick={() => {
                      axios
                        .post(
                          `${baseURL}/users/${user?._id}/accept-agent`,
                          {},
                          {
                            headers: {
                              Authorization: `Bearer ${localStorage.getItem(
                                "auth"
                              )}`,
                            },
                          }
                        )
                        .then(() => {
                          setUsers((p) =>
                            p.map((q) =>
                              q._id === user._id
                                ? { ...q, emailVerified: true }
                                : q
                            )
                          );
                        });
                    }}
                  >
                    Accept agent
                  </button>
                )}

                <button
                  className="btn btn-xs btn-error"
                  onClick={() => {
                    const token = localStorage.getItem("auth");

                    axios
                      .delete(`${baseURL}/users/${user?._id}`, {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      })
                      .then(({ data }) => {
                        console.log(data.data);
                        setUsers((p) =>
                          p.filter((q) => q._id !== data.data._id)
                        );
                      })
                      .catch((err) => {});
                  }}
                >
                  Delete user
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
