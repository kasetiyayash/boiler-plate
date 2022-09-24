import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const Suggestion = () => {

  const Input = (props) => {
    return (
      <motion.textarea
        type="text"
        rows={3}
        className="border border-black p-3 w-full rounded-md mt-1"
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

  return (
    <Formik
      initialValues={{
        data: "",
      }}
      onSubmit={(values) => {}}
    >
      {({ handleSubmit, handleChange, handleBlur }) => (
        <Form onSubmit={handleSubmit}>
          <div className="min-h-screen flex flex-col justify-center align-center p-6 text-black  font-semibold">
            <div className="text-center">
              <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                Suggestions
              </p>
              <p className="mt-8 text-2xl md:text-3xl">
                Your Suggestions Really Matters
              </p>
            </div>
            <div className="mt-16 flex flex-col gap-6">
              <div>
                <Label>Suggestion</Label>
                <Input
                  name="data"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="border border-black rounded-md p-3 mt-4 hover:bg-black hover:text-main"
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Suggestion;
