import Form from "../../components/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { baseURL } from "../../config";

const BuyerAuthPage = () => {
  const navigate = useNavigate();

  // If already logged in then redirect to the dashboard page
  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("auth");
    if (isLoggedIn) {
      window.location.replace("/_/buyer");
    }
  }, [navigate]);

  return (
    <div>
      <Form
        title={"Sign Up Buyer"}
        loginTitle={"Sign In Buyer"}
        name
        email
        password
        relativesNumber
        onSubmit={({
          isLogin,
          nameState: name,
          emailState: email,
          passwordState: password,
          relativesNameState: relativeName,
          relativesNumberState: relativeNumber,
          relativesRelationState: relativeRelation,
          setErrMessage,
          setSuccessMessage,
        }) => {
          axios
            .post(`${baseURL}/auth/${isLogin ? "login-user" : "create-user"}`, {
              name,
              email,
              password,
              role: "buyer",
              relativeNumber,
              relativeName,
              relativeRelation,
            })
            .then(({ data }) => {
              if (isLogin) {
                localStorage.setItem("user", JSON.stringify(data.data?.user));
                localStorage.setItem("auth", data.data?.token);
                setSuccessMessage("Login successfully");
                setTimeout(() => {
                  window.location.replace("/_/buyer");
                }, 300);
              } else {
                setSuccessMessage(data?.message || "Signed up successfully");
              }
            })
            .catch((err) => {
              setErrMessage(err?.response?.data?.error || "An error occurred");
              setTimeout(() => {
                setErrMessage("");
              }, 3000);
            });
        }}
      />
    </div>
  );
};

export default BuyerAuthPage;
