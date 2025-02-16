import Form from "../../components/Form";
import axios from "axios";
import { useEffect } from "react";
import { baseURL } from "../../config";

const SellerAuthPage = () => {
  // If already logged in then redirect to the dashboard page
  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("auth");
    if (isLoggedIn) {
      const role = JSON.parse(localStorage.getItem("user")).role;
      window.location.replace(`/_/${role}`);
    }
  }, []);

  return (
    <div>
      <Form
        title={"Sign Up Seller"}
        loginTitle={"Sign In Seller"}
        name
        email
        password
        relativesNumber
        onSubmit={({
          isLogin,
          nameState: name,
          emailState: email,
          passwordState: password,
          relativesNumberState: relativesNumber,
          setNameState,
          setSuccessMessage,
          setErrMessage,
        }) => {
          axios
            .post(`${baseURL}/auth/${isLogin ? "login-user" : "create-user"}`, {
              name,
              email,
              password,
              role: "seller",
              relativesNumber,
            })
            .then(({ data }) => {
              if (isLogin) {
                localStorage.setItem("user", JSON.stringify(data.data?.user));
                localStorage.setItem("auth", data.data?.token);
                setSuccessMessage("Login successfully");
                setTimeout(() => {
                  window.location.replace("/_/seller");
                }, 300);
              } else {
                setSuccessMessage("Signed up successfully");
                setTimeout(() => {
                  window.location.replace("/auth/seller?login");
                }, 300);
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

export default SellerAuthPage;
