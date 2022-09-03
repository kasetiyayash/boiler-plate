import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import PageAnimation from "../../components/PageAnimation";
import { registerApi } from "../../store/auth/reducers";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
              .oneOf([Yup.ref("password"), null], "Password must match")
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
          }}
        >
          {({ handleSubmit, handleChange, handleBlur }) => (
            <Form onSubmit={handleSubmit}>
              <div className="bg-white p-6 md:p-24 rounded-2xl bg-opacity-30 backdrop-filter backdrop-blur-lg">
                <p className="text-3xl text-sky-900">Create Account</p>
                <div className="mt-8 flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <Label htmlFor="fname">First Name</Label>
                      <Input
                        id="fname"
                        name="fname"
                        type="text"
                        placeholder="Please Enter First Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <Error name="fname" />
                    </div>
                    <div className="flex flex-col">
                      <Label htmlFor="lname">Last Name</Label>
                      <Input
                        id="lname"
                        name="lname"
                        type="text"
                        placeholder="Please Enter Last Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <Error name="lname" />
                    </div>
                  </div>
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
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Please Enter Password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Error name="confirmPassword" />
                  </div>
                  <button type="submit" className="btn mt-2 bg-sky-900">
                    Sign Up
                  </button>
                  <p
                    className="link text-center mt-4"
                    onClick={() => navigate("/auth/login")}
                  >
                    Already have an account
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
