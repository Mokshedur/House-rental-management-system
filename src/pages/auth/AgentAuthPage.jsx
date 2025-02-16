import Form from "../../components/Form";
import axios from "axios";
import { baseURL } from "../../config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AgentAuthPage = () => {
  const navigate = useNavigate();

  // If already logged in then redirect to the dashboard page
  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("auth");
    if (isLoggedIn) {
      window.location.replace("/_/agent");
    }
  }, [navigate]);

  return (
    <div>
      <Form
        title={"Sign Up Agent"}
        loginTitle={"Sign In Agent"}
        name
        email
        password
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
              role: "agent",
            })
            .then(({ data }) => {
              if (isLogin) {
                localStorage.setItem("user", JSON.stringify(data.data?.user));
                localStorage.setItem("auth", data.data?.token);
                setSuccessMessage("Login successfully");
                setTimeout(() => {
                  window.location.replace("/_/agent");
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

export default AgentAuthPage;
