import React from "react";
import { Formik } from "formik";
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()

  return (
    <>
      <Formik
        initialValues={{
          emailField: "",
          pswField: "",
        }}
        validate={(values) => {
          let errors = {};

          if (!values.emailField) {
            errors.emailField = "Field required";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.emailField
            )
          ) {
            errors.emailField = "Username should be an email";
          }
          if (!values.pswField) {
            errors.pswField = "Field required";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          window.alert("Login Sucessful");
          resetForm();
          console.log("Form sent!");
        }}
      >
        {({
          handleBlur,
          errors,
          touched,
          handleChange,
          values,
          handleSubmit,
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            {console.log(errors)}
            <div>
              <label htmlFor="emailField">Email</label>
              <input
                type="email"
                id="emailField"
                name="emailField"
                placeholder="danielburgoa50@gmail.com"
                value={values.emailField}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.emailField && errors.emailField && (
                <div className="error">{errors.emailField}</div>
              )}
            </div>
            <div>
              <label htmlFor="pswField">Password</label>
              <input
                type="text"
                id="pswField"
                name="pswField"
                value={values.pswField}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.pswField && errors.pswField && (
                <div className="error">{errors.pswField}</div>
              )}
            </div>
            <button id="submitBtn" type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default App;
