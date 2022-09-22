import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import PageAnimation from "../../components/PageAnimation";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../../store/auth/reducers";
import { useEffect } from "react";
import { ACCESS_TOKEN } from "../../utils/Constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginData, isLoading, isError } = useSelector((store) => ({
    loginData: store?.auth?.loginData?.data,
    isLoading: store?.auth?.loading,
    isError: store?.auth?.error,
  }));

  console.log("==loginData==", loginData);

  // useEffect(() => {
  //   localStorage.setItem(ACCESS_TOKEN, loginData?.token);
  //   if(){
  //     navigate("/dashboard");
  //   }
  // }, []);

  const Input = (props) => {
    return (
      <motion.input
        type="text"
        className={`border ${
          props.error && props.touch ? "border-red-600" : "border-black"
        } p-3 w-full rounded-md mt-1`}
        transition={{ duration: 0.1 }}
        whileFocus={{ scale: 1.05 }}
        {...props}
      />
    );
  };

  const Label = (props) => {
    return (
      <motion.label transition={{ duration: 0.5 }} {...props}>
        {props.children}
      </motion.label>
    );
  };

  const Error = (props) => {
    return (
      <ErrorMessage name={props.name}>
        {(msg) => (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            animate={{ opacity: 1 }}
            className="text-red-600"
          >
            {msg}
          </motion.div>
        )}
      </ErrorMessage>
    );
  };

  return (
    <PageAnimation>
      <div className="min-h-screen flex items-center justify-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Please enter valid email")
              .required("Please enter email"),
            password: Yup.string().required("Please enter password"),
          })}
          onSubmit={(values) => {
            dispatch(
              loginApi({
                email: values?.email,
                password: values?.password,
              })
            );
          }}
        >
          {({ errors, touched, handleSubmit, handleChange, handleBlur }) => (
            <Form onSubmit={handleSubmit}>
              <div className="p-6 text-black font-semibold">
                <p className="text-6xl font-bold ">Welcome Back</p>
                <div className="mt-16 flex flex-col gap-6">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Please Enter Email"
                      error={errors.email}
                      touch={touched.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Error name="email" />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Please Enter Password"
                      error={errors.password}
                      touch={touched.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Error name="password" />
                  </div>
                  <button
                    type="submit"
                    className="border border-black rounded-md p-3 mt-4 hover:bg-black hover:text-main"
                  >
                    Login
                  </button>
                  <p
                    className="link text-center mt-4"
                    onClick={() => navigate("/auth/signup")}
                  >
                    Create an account
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </PageAnimation>
  );
};

export default Login;
