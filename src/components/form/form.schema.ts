import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Not a valid email address")
    .required("Email is required"),
  age: yup
    .number()
    .positive("Not a valid age")
    .integer("Age should be an intiger"),
  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "Invalid gender")
    .required("Gender is required"),
    state: yup.string().required("Select a state"),
    country: yup.string().required("Select a country"),
    city: yup.string().required("Select a city")
});
