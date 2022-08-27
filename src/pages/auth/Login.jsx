import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().required("Please enter your mail"),
          password: Yup.string().required("Please enter your password"),
        })}
        onSubmit={(values) => {
          const data = {
            mail: values.email,
            password: values.password,
          };
          alert(data);
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
              <div className="w-full p-6 m-auto bg-white border-t-4 border-purple-600 rounded-md shadow-md border-top lg:max-w-md">
                <h1 className="text-3xl font-semibold text-center text-purple-700">
                  LOGO
                </h1>
                <div className="mt-6">
                  <div>
                    <label className="block text-sm text-gray-800">Email</label>
                    <input
                      name="email"
                      className="text-sm block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Enter your mail"
                      onChange={(e) => setFieldValue(e.target.value)}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm text-gray-800">
                      Password
                    </label>
                    <input
                      name="password"
                      className="text-sm block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Enter your password"
                      onChange={(e) => setFieldValue(e.target.value)}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                  <div className="mt-1">
                    <Link
                      to="#"
                      className="text-xs text-gray-600 hover:underline"
                    >
                      Forget Password?
                    </Link>
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
                  <p
                    className="ml-1 font-medium text-purple-600 hover:underline"
                    onClick={() => navigate("/auth/signup")}
                  >
                    Sign up
                  </p>
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
