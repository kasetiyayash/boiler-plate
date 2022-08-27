import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ErrorMessages from "../../components/ErrorMessages";
// import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Please enter valid email")
          .required("Please enter your mail"),
        password: Yup.string().required("Please enter your password"),
      })}
      onSubmit={(values) => {
        console.log(values);
        // dispatch({
        //   email: values?.email,
        //   password: values?.password,
        // });
        // navigate("/dashboard/home");
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white border-t-4 border-purple-600 rounded-md shadow-md border-top lg:max-w-md">
              <h1 className="text-3xl font-semibold text-center text-purple-700">
                Login
              </h1>
              <div className="mt-6">
                <div>
                  <label className="block text-sm text-gray-800">Email</label>
                  <Field
                    as="input"
                    name="email"
                    type="text"
                    className="text-sm block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Enter your mail"
                  />
                  <ErrorMessages name="email" />
                </div>
                <div className="mt-6">
                  <label className="block text-sm text-gray-800">
                    Password
                  </label>
                  <Field
                    as="input"
                    name="password"
                    type="text"
                    className="text-sm block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Enter your password"
                  />
                  <ErrorMessages name="password" />
                </div>
                <div className="mt-2">
                  <p
                    to="#"
                    className="text-xs text-gray-600 hover:underline cursor-pointer"
                    onClick={() => navigate("/auth/forget-password")}
                  >
                    Forget Password?
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Login
                  </button>
                </div>
              </div>
              <p className="flex justify-center mt-8 text-xs font-light text-gray-700">
                Don't have an account?
                <span
                  className="ml-1 font-medium text-purple-600 hover:underline cursor-pointer"
                  onClick={() => navigate("/auth/signup")}
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
