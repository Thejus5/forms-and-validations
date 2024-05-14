import * as yup from "yup";
import { fetchData } from "../../api/api";

export const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Not a valid email address")
    .required("Email is required")
    .test("API validation", "Couldn't very the email", (value: any) => {
      if (value) {
        let timeoutId: any;
        return new Promise(async (resolve, reject) => {
          console.log(timeoutId);
          clearTimeout(timeoutId);
          timeoutId = setTimeout(async () => {
            try {
              const response = await fetchData(
                `https://emailvalidation.abstractapi.com/v1/?api_key=009b67cb04944ed2a431c90baf654a77&email=${value}`
              );
              console.log(response);
              resolve(true);
            } catch (error) {
              console.log(error);
              reject(error);
            }
          }, 1000);
          console.log(timeoutId)
        });
      } else {
        return false;
      }
    }),

  age: yup
    .number()
    .positive("Not a valid age")
    .integer("Age should be an intiger")
    .test("Age restriction", "You must be 21 years or older", isOldEnough),
  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "Invalid gender")
    .required("Gender is required"),
  country: yup.string(),
  state: yup.string().when("country", {
    is: (val: string | undefined) => !!val, // Check if country is not empty
    then: (schema) => schema.required("Select a state"),
  }),
  city: yup.string().when("state", {
    is: (val: string | undefined) => !!val, // Check if state is not empty
    then: (schema) => schema.required("Select a city"),
  }),
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


//https://app.abstractapi.com/api/email-validation/tester