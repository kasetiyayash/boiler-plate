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
        className="input input-bordered w-full focus:outline-none focus:outline-offset-0"
        transition={{ duration: 0.1 }}
        whileFocus={{ scale: 1.05 }}
        {...props}
      />
    );
  };
  const Label = (props) => {
    return (
      <motion.label
        className="text-sky-900"
        transition={{ duration: 0.5 }}
        {...props}
      >
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
          {({ errors, handleSubmit, handleChange, handleBlur }) => (
            <Form onSubmit={handleSubmit}>
              <div className="bg-white p-6 md:p-24 rounded-2xl bg-opacity-30 backdrop-filter backdrop-blur-lg">
                <p className="text-3xl text-sky-900">Welcome Back, Mere Aka</p>
                <div className="mt-12 flex flex-col gap-6">
                  <div className="flex flex-col">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Please Enter Email"
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Error name="password" />
                  </div>
                  <button type="submit" className="btn mt-2 bg-sky-900">
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
