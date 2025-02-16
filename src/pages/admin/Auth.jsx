import Form from "../../components/Form";
import axios from "axios";
import { baseURL } from "../../config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminAuthPage = () => {
  const navigate = useNavigate();

  // If already logged in then redirect to the dashboard page
  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("auth");
    if (isLoggedIn) {
      window.location.replace("/admin");
    }
  }, [navigate]);

  return (
    <div>
      <Form
        loginTitle={"Sign In Admin"}
        email
        password
        pageSwitch={false}
        onSubmit={({
          isLogin,
          nameState: name,
          emailState: email,
          passwordState: password,
          setSuccessMessage,
          setErrMessage,
        }) => {
          console.log(isLogin);
          axios
            .post(`${baseURL}/auth/${isLogin ? "login-user" : "create-user"}`, {
              name,
              email,
              password,
              role: "admin",
            })
            .then(({ data }) => {
              if (isLogin) {
                localStorage.setItem("user", JSON.stringify(data.data?.user));
                localStorage.setItem("auth", data.data?.token);
                setSuccessMessage("Login successfully");
                setTimeout(() => {
                  window.location.replace("/admin");
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

export default AdminAuthPage;
