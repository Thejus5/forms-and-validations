import { Button } from "@mui/material";
import { FormWrapper } from "./form.styles";
import { useForm } from "react-hook-form";
import { InputComponent } from "../Input/input.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./form.schema";
import { SelectComponent } from "../Select/select.styles";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {/* First Name ================ */}
      <div className="form-sub-section">
        <label htmlFor="firstName">First Name</label>
        <InputComponent id="firstName" {...register("firstName")} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>

      {/* Last Name ================ */}
      <div className="form-sub-section">
        <label htmlFor="lastName">Last Name</label>
        <InputComponent id="lastName" {...register("lastName")} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>

      {/* Eemail ================  */}
      <div className="form-sub-section">
        <label htmlFor="email">Email</label>
        <InputComponent id="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      {/* Age ================  */}
      <div className="form-sub-section">
        <label htmlFor="age">Age</label>
        <InputComponent id="age" type="number" {...register("age")} />
        {errors.age && <span>{errors.age.message}</span>}
      </div>

      {/* Gender ================ */}
      <div className="form-sub-section">
        <label htmlFor="gender">Gender</label>
        <SelectComponent id="gender" {...register("gender")}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </SelectComponent>
        {errors.gender && <span>{errors.gender.message}</span>}
      </div>

      {/* Address ================ */}
      <div className="addressSection">
        <div className="form-sub-section inputWidth">
          <label htmlFor="country">Country</label>
          <InputComponent id="country" type="text" {...register("country")}/>
          {errors.country && <span>{errors.country.message}</span>}
        </div>
        <div className="form-sub-section inputWidth">
          <label htmlFor="state">State</label>
          <InputComponent id="state" type="text" {...register("state")}/>
          {errors.state && <span>{errors.state.message}</span>}
        </div>
        <div className="form-sub-section inputWidth">
          <label htmlFor="city">City</label>
          <InputComponent id="city" type="text" {...register("city")}/>
          {errors.city && <span>{errors.city.message}</span>}
        </div>
      </div>

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </FormWrapper>
  );
}
