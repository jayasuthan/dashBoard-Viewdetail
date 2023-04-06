import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const navigate = useNavigate()
  
  const navi = () => {
       navigate('/dashboard')
  }





  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      Name: "",
      mobile: "",
      email: "",
      address: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h1>Fill-up the Form</h1>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="Name"> Name</label>
        <input
          id="Name"
          name="Name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Name}
        />

        {formik.errors.firstName && <p> {formik.errors.firstName} </p>}

        <label htmlFor="mobile"> mobile</label>
        <input
          id="mobile"
          name="mobile"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.mobile}
        />

        {formik.errors.mobile && <p> {formik.errors.mobile} </p>}

        <label htmlFor="email"> email</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        {formik.errors.email && <p> {formik.errors.email} </p>}

        <label htmlFor="address"> address</label>
        <input
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
        />

        {formik.errors.email && <p> {formik.errors.email} </p>}

        <button type="submit">Submit</button>
      </form>

      <button onClick={navi}>Back to DashBoard</button>
    </div>
  );
};

export default Create;
