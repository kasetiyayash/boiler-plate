import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import PageAnimation from "../../components/PageAnimation";
import { registerApi } from "../../store/auth/Reducers";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN, USER_ID } from "../../utils/Constants";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formSubmitting, setFormSubmitting] = useState(false);

  const { signUpData, isLoading, isError } = useSelector((store) => ({
    signUpData: store?.auth?.registerData?.data,
    isLoading: store?.auth?.registerData?.loading,
    isError: store?.auth?.registerData?.error,
  }));

  useEffect(() => {
    if ((!isLoading, !isError, formSubmitting)) {
      localStorage.setItem(ACCESS_TOKEN, signUpData?.token);
      localStorage.setItem(USER_ID, signUpData?.user?.id);
      navigate("/dashboard");
    }
  }, [isLoading, isError, formSubmitting]);

  const Input = (props) => (
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
  const Label = (props) => (
    <motion.label transition={{ duration: 0.5 }} {...props}>
      {props.children}
    </motion.label>
  );
  const Error = (props) => (
    <ErrorMessage name={props.name}>
      {(msg) => (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          animate={{ opacity: 1 }}
          className="text-red-700 font-semibold"
        >
          {msg}
        </motion.div>
      )}
    </ErrorMessage>
  );

  return (
    <PageAnimation>
      <div className="min-h-screen flex items-center justify-center">
        <Formik
          initialValues={{
            fname: "",
            lname: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object().shape({
            fname: Yup.string().required("Please enter first name"),
            lname: Yup.string().required("Please enter last name"),
            email: Yup.string()
              .email("Please enter valid email")
              .required("Please enter email"),
            password: Yup.string().required("Please enter password"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Password not matched")
              .required("Please enter password"),
          })}
          onSubmit={(values) => {
            dispatch(
              registerApi({
                first_name: values?.fname,
                last_name: values?.lname,
                email: values?.email,
                password: values?.password,
                confirm_password: values?.confirmPassword,
              })
            );
            setFormSubmitting(true);
          }}
        >
          {({ errors, touched, handleSubmit, handleChange, handleBlur }) => (
            <Form onSubmit={handleSubmit}>
              <div className="p-6 font-semibold text-black">
                <p className="text-6xl font-bold">Create Account</p>
                <div className="mt-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-6 md:flex-row md:gap-4">
                    <div>
                      <Label htmlFor="fname">First Name</Label>
                      <Input
                        id="fname"
                        name="fname"
                        type="text"
                        placeholder="Enter First Name"
                        error={errors.fname}
                        touch={touched.fname}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <Error name="fname" />
                    </div>
                    <div>
                      <Label htmlFor="lname">Last Name</Label>
                      <Input
                        id="lname"
                        name="lname"
                        type="text"
                        placeholder="Enter Last Name"
                        error={errors.lname}
                        touch={touched.lname}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <Error name="lname" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Enter Email"
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
                      placeholder="Enter Password"
                      error={errors.password}
                      touch={touched.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Error name="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Enter Confirm Password"
                      error={errors.confirmPassword}
                      touch={touched.confirmPassword}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Error name="confirmPassword" />
                  </div>
                  <button
                    type="submit"
                    className="border border-black rounded-md p-3 mt-4 hover:bg-black hover:text-main"
                  >
                    Sign Up
                  </button>
                  <p
                    className="link text-center mt-4"
                    onClick={() => navigate("/auth/login")}
                  >
                    Already have an account ?
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

export default SignUp;
