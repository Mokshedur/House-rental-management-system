import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../config";

const VerifyAccountPage = () => {
  const [verificationMessage, setVerificationMessage] = useState(
    "Verifying account..."
  );
  const params = useParams();

  useEffect(() => {
    axios
      .post(`${baseURL}/auth/verify-account`, {
        token: params.token,
      })
      .then(({ data }) => {
        setVerificationMessage(data?.message || "Account verified");
      })
      .catch((err) => {
        console.log(err)
        setVerificationMessage(err.response.data.error);
      });
  }, [params]);

  return <div>{verificationMessage}</div>;
};

export default VerifyAccountPage;
