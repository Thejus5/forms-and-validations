import { Button, TextField } from "@mui/material";
import { FormWrapper } from "./form.styles";
import { useForm } from "react-hook-form";
import { InputComponent } from "../Input/input.styles";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="form-sub-section">
        <label htmlFor="firstName">First Name</label>
        <InputComponent id="firstName" {...register("firstName")} />
      </div>

      <div className="form-sub-section">
        <label htmlFor="lastName">Last Name</label>
        <InputComponent id="lastName" {...register("lastName")} />
      </div>
      <div className="form-sub-section">
        <label htmlFor="email">Email</label>
        <InputComponent id="email" {...register("email")} />
      </div>
      <div className="form-sub-section">
        <label htmlFor="age">Age</label>
        <InputComponent id="age" {...register("age")} />
      </div>
      <div className="form-sub-section">
        <label htmlFor="gender">Gender</label>
        <InputComponent id="gender" {...register("gender")} />
      </div>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </FormWrapper>
  );
}
