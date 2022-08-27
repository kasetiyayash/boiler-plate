import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ErrorMessages from "../../components/ErrorMessages";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          mobileNumber: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("Please enter your first name"),
          lastName: Yup.string().required("Please enter your last name"),
          email: Yup.string()
            .email("Please enter valid email")
            .required("Please enter your mail"),
          mobileNumber: Yup.string().required(
            "Please enter your mobile number"
          ),
          password: Yup.string().required("Please enter your password"),
        })}
        onSubmit={(values) => {
          console.log(values);
          // dispatch({
          //   email: values?.email,
          //   password: values?.password,
          // });s
          // navigate("/dashboard/home");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
              <div className="w-full p-6 m-auto bg-white border-t-4 border-purple-600 rounded-md shadow-md border-top lg:max-w-md">
                <h1 className="text-3xl font-semibold text-center text-purple-700">
                  Sign Up
                </h1>
                <div className="mt-6">
                  <div className="flex justify-center gap-4">
                    <div>
                      <label className="block text-sm text-gray-800">
                        First Name
                      </label>
                      <Field
                        as="input"
                        name="firstName"
                        type="text"
                        className="text-sm block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Enter your first name"
                      />
                      <ErrorMessages name="firstName" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-800">
                        Last Name
                      </label>
                      <Field
                        as="input"
                        name="lastName"
                        type="text"
                        className="text-sm block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Enter your last name"
                      />
                      <ErrorMessages name="lastName" />
                    </div>
                  </div>

                  <div className="mt-6">
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
                      Mobile Number
                    </label>
                    <Field
                      as="input"
                      name="mobileNumber"
                      type="number"
                      className="text-sm block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Enter your mobile number"
                    />
                    <ErrorMessages name="mobileNumber" />
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
                      Sign Up
                    </button>
                  </div>
                </div>
                <p className="flex justify-center mt-8 text-xs font-light text-gray-700">
                  Already have an account?
                  <span
                    className="ml-1 font-medium text-purple-600 hover:underline cursor-pointer"
                    onClick={() => navigate("/auth/login")}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
