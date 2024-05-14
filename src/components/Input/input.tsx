import { InputComponent } from "./input.styles";

export default function Input({
  label,
  name,
  register
}: {
  label: string;
  name: string;
  register:any
}) {
  return (
    <>
      {/* <label htmlFor={name}>{label}</label> */}
      <InputComponent id={name} name={name} ref={register}/>
    </>
  );
}
