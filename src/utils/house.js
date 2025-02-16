import axios from "axios";
import { baseURL } from "../config";

const token = localStorage.getItem("auth");

export const uploadImage = (houseId, images) => {
  const formData = new FormData();

  console.log(houseId, images);
  if (images) {
    Array.from(images).map((img) => {
      formData.append("upload", img);
    });

    console.log(houseId, images);

    axios.post(`${baseURL}/upload-image/${houseId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
};

export const updateHouse = (
  houseId,
  city,
  streetName,
  aptNo,
  rentPrice,
  noOfBedRooms,
  otherSpecifications,
  images,
  isPublished,
  isRented,
  cardNo
) => {
  if (images) {
    uploadImage(houseId, images);
  }
  return axios.put(
    `${baseURL}/houses/${houseId}`,
    {
      city,
      streetName,
      aptNo,
      rentPrice,
      noOfBedRooms,
      otherSpecifications,
      isPublished,
      isRented,
      cardNo,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteHouse = (houseId, hardDelete = false) => {
  return axios
    .delete(`${baseURL}/houses/${houseId}?hard=${hardDelete}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => data);
};

export const getHouses = (auth = true) => {
  return axios
    .get(`${baseURL}/houses`, {
      headers: {
        Authorization: auth ? `Bearer ${token}` : "",
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const addNewHouse = ({
  city,
  streetName,
  aptNo,
  rentPrice,
  noOfBedRooms,
  otherSpecifications,
  images,
}) => {
  return axios
    .post(
      `${baseURL}/house`,
      {
        city,
        streetName,
        aptNo,
        salePrice: -1,
        rentPrice,
        noOfBedRooms,
        otherSpecifications,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(({ data }) => {
      if (images) {
        uploadImage(data.data._id, images);
      }

      return data;
    });
};

export const rentHouse = (houseId, card) => {
  return axios
    .post(
      `${baseURL}/houses/${houseId}/rent`,
      {
        cardNo: card,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      }
    )
    .then(({ data }) => data);
};
