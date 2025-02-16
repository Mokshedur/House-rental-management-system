import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Form = ({
  title,
  loginTitle,
  name,
  email,
  password,
  relativesNumber,
  onSubmit,
  pageSwitch = true,
}) => {
  const [nameState, setNameState] = useState();
  const [emailState, setEmailState] = useState();
  const [passwordState, setPasswordState] = useState();
  const [relativesNameState, setRelativesNameState] = useState();
  const [relativesNumberState, setRelativesNumberState] = useState();
  const [relativesRelationState, setRelativesRelationState] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [errMessage, setErrMessage] = useState();

  const location = useLocation();

  const isLoginRoute = location.search.match(/login/);

  return (
    <form
      className="max-w-[500px] mx-auto flex flex-col p-10 border border-light-gray-2 rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit({
          isLogin: location.search.match(/login/) ? true : false,
          nameState,
          setNameState,
          emailState,
          setEmailState,
          passwordState,
          setPasswordState,
          setSuccessMessage,
          setErrMessage,
          relativesNumberState,
          setRelativesNumberState,
          relativesNameState,
          relativesRelationState,
        });
      }}
    >
      <h2 className="text-4xl font-medium leading-10 text-key-dark">
        {isLoginRoute ? loginTitle || title : title}
      </h2>
      {successMessage && (
        <div className="alert alert-success shadow-lg mt-5">
          <div>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>{successMessage || "Error! Task failed successfully."}</span>
          </div>
        </div>
      )}
      {errMessage && (
        <div className="alert alert-error shadow-lg mt-5">
          <div>
            <FontAwesomeIcon icon={faTriangleExclamation} />
            <span>{errMessage || "Error! Task failed successfully."}</span>
          </div>
        </div>
      )}
      {name && !isLoginRoute && (
        <div className="flex flex-col mt-5">
          <label htmlFor="name" className="font-medium text-base text-key-dark">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="px-4 py-4 border border-light-gray-2 rounded-lg mt-2"
            value={nameState}
            onChange={(e) => setNameState(e.target.value)}
            required
          />
        </div>
      )}
      {email && (
        <div className="flex flex-col mt-5">
          <label
            htmlFor="email"
            className="font-medium text-base text-key-dark"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="px-4 py-4 border border-light-gray-2 rounded-lg mt-2"
            value={emailState}
            onChange={(e) => setEmailState(e.target.value)}
            required
          />
        </div>
      )}
      {password && (
        <div className="flex flex-col mt-5">
          <label
            htmlFor="password"
            className="font-medium text-base text-key-dark"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Your password"
            className="px-4 py-4 border border-light-gray-2 rounded-lg mt-2"
            value={passwordState}
            onChange={(e) => setPasswordState(e.target.value)}
            required
          />
        </div>
      )}
      {!isLoginRoute && relativesNumber && (
        <>
          <div className="">
            <h3 className="mt-8 font-bold text-lg border-b border-b-light-gray-2 pb-2">
              Relative (Verification)
            </h3>
          </div>
          <div className="flex flex-col mt-5">
            <label
              htmlFor="r-name"
              className="font-medium text-base text-key-dark"
            >
              Name
            </label>
            <input
              type="text"
              id="r-name"
              placeholder="Relative's name"
              className="px-4 py-4 border border-light-gray-2 rounded-lg mt-2"
              value={relativesNameState}
              onChange={(e) => setRelativesNameState(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <label
              htmlFor="r-relation"
              className="font-medium text-base text-key-dark"
            >
              Relation
            </label>
            <input
              type="text"
              id="r-relation"
              placeholder="Relative's relation"
              className="px-4 py-4 border border-light-gray-2 rounded-lg mt-2"
              value={relativesRelationState}
              onChange={(e) => setRelativesRelationState(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <label
              htmlFor="r-num"
              className="font-medium text-base text-key-dark"
            >
              Number
            </label>
            <input
              type="text"
              id="r-num"
              placeholder="Relative's number"
              className="px-4 py-4 border border-light-gray-2 rounded-lg mt-2"
              value={relativesNumberState}
              onChange={(e) => setRelativesNumberState(e.target.value)}
              required
            />
          </div>
        </>
      )}

      <button className="btn btn-primary mt-5">
        {isLoginRoute ? "Sign In" : "Sign Up"}
      </button>

      {pageSwitch && (
        <div className="mt-5 text-key-dark">
          {location.search.match(/login/) ? (
            <span>
              Don't have an account,{" "}
              <Link to={"?Sign-up"} className="font-bold text-indigo-600">
                Create one
              </Link>
            </span>
          ) : (
            <span>
              Already have an account,{" "}
              <Link to={"?login"} className="font-bold text-indigo-600">
                Login
              </Link>
            </span>
          )}
        </div>
      )}
    </form>
  );
};

export default Form;
