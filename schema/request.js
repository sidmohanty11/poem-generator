import * as yup from "yup";

export const requestValidationSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  toName: yup.string().required("Please enter the name of the special one"),
  feelings: yup
    .string()
    .min(20, "Please enter your feelings in a descriptive manner")
    .required("Feelings can't be empty"),
});
