import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ErrorMessages from "../../components/ErrorMessages";

const ForgetPassword = () => {
  const navigate = useNavigate();

  return (
    <>
      <>
        <Formik
          initialValues={{
            email: "",
            mobileNumber: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Please enter valid email")
              .required("Please enter your mail"),
            mobileNumber: Yup.string().required(
              "Please enter your mobile number"
            ),
          })}
          onSubmit={(values) => {
            console.log(values);
            // dispatch({
            //   email: values?.email,
            //   mobileNumber: values?.mobileNumber,
            // });
            // navigate("/dashboard/home");
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white border-t-4 border-purple-600 rounded-md shadow-md border-top lg:max-w-md">
                  <h1 className="text-3xl font-semibold text-center text-purple-700">
                    Forget Password
                  </h1>
                  <div className="mt-6">
                    <div>
                      <label className="block text-sm text-gray-800">
                        Email
                      </label>
                      <Field
                        as="input"
                        name="email"
                        type="text"
                        className="text-sm block w-full px-4 py-2 mt-1 text-slate-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Enter your mail"
                      />
                      <ErrorMessages name="email" />
                    </div>
                    <p className="flex justify-center mt-6 text-xs font-light text-gray-700">
                      OR
                    </p>
                    <div className="mt-4">
                      <label className="block text-sm text-gray-800">
                        Mobile Number
                      </label>
                      <Field
                        as="input"
                        name="mobileNumber"
                        type="number"
                        className="text-sm block w-full px-4 py-2 mt-1 text-slate-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Enter your mobile number"
                      />
                      <ErrorMessages name="mobileNumber" />
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                      >
                        Forget Password
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <p
                      className="text-xs font-medium text-purple-600 hover:underline cursor-pointer"
                      onClick={() => navigate("/auth/login")}
                    >
                      Login
                    </p>
                    <p className="mx-2 text-[11px] font-medium text-slate-400">
                      OR
                    </p>
                    <p
                      className="text-xs font-medium text-purple-600 hover:underline cursor-pointer"
                      onClick={() => navigate("/auth/signup")}
                    >
                      Sign up
                    </p>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </>
    </>
  );
};

export default ForgetPassword;
