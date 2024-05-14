import { Button } from "@mui/material";
import { FormWrapper } from "./form.styles";
import { useForm } from "react-hook-form";
import { InputComponent } from "../Input/input.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./form.schema";
import { SelectComponent } from "../Select/select.styles";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/api";

export default function Form() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [allCitiesData, setAllCitiesData] = useState([]);
  const [countries, setCountries] = useState<any>([]);
  const [states, setStates] = useState<any>([]);
  const [cities, setCities] = useState<any>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // form watchers
  const selectedCountry = watch("country");
  const selectedState = watch("state");

  useEffect(() => {
    fetchData(
      "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
    )
      .then((response) => {
        setIsButtonDisabled(false);
        setAllCitiesData(response);
        setCountries(
          [...new Set(response.map((item: any) => item.country))].sort()
        );
      })
      .catch((err: any) => {
        setIsButtonDisabled(false);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const allStates = allCitiesData.filter(
        (state: any) => state.country === selectedCountry
      );
      setStates(
        [...new Set(allStates.map((item: any) => item.subcountry))].sort()
      );
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      const allCities = allCitiesData.filter(
        (city: any) => city.subcountry === selectedState
      );
      setCities([...new Set(allCities.map((item: any) => item.name))].sort());
    }
  }, [selectedState]);

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
        {/* Country */}
        <div className="form-sub-section inputWidth">
          <label htmlFor="country">Country</label>
          <SelectComponent id="country" {...register("country")}>
            <option value="">Select Country</option>
            {countries.length !== 0 &&
              countries.map((country: string) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
          </SelectComponent>
          {errors.country && <span>{errors.country.message}</span>}
        </div>

        {/* State */}
        <div
          className={`form-sub-section inputWidth ${
            !selectedCountry && "disabledInput"
          }`}
        >
          <label htmlFor="state">State</label>
          <SelectComponent id="state" {...register("state")}>
            <option value="">Select State</option>
            {states.length !== 0 &&
              states.map((state: string) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
          </SelectComponent>
          {errors.state && <span>{errors.state.message}</span>}
        </div>

        {/* City */}
        <div
          className={`form-sub-section inputWidth ${
            !selectedState && "disabledInput"
          }`}
        >
          <label htmlFor="city">City</label>
          <SelectComponent id="city" {...register("city")}>
            <option value="">Select City</option>
            {cities.length !== 0 &&
              cities.map((city: string) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </SelectComponent>
          {errors.city && <span>{errors.city.message}</span>}
        </div>
      </div>

      <Button variant="contained" type="submit" disabled={isButtonDisabled}>
        Submit
      </Button>
    </FormWrapper>
  );
}
