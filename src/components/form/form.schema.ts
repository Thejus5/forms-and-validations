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
    .integer("Age should be an intiger")
    .test("Age restriction", "You must be 21 years or older", isOldEnough),
  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "Invalid gender")
    .required("Gender is required"),
  state: yup.string().required("Select a state"),
  country: yup.string().required("Select a country"),
  city: yup.string().required("Select a city"),
});

// ===== Custum Validations ===== //

/**
 * Checks if a given value represents an age that is old enough.
 *
 * @param {any} value - The value to be checked. Should be a number representing age.
 * @returns {boolean} Returns true if the age is 21 or older, otherwise returns false.
 * @example
 * isOldEnough(18); // Returns false
 * isOldEnough(21); // Returns true
 */
function isOldEnough(value: any) {
  return value >= 21;
}
