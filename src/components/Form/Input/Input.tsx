/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-shadow */
interface InputProps {
  type: string;
  name?: string;
  value?: any;
  placeHolder?: any;
  simpleValidator?: any;
  handleChange: (name: any, value: any) => void;
  customValidator?: any;
  customMessage?: any;
  inputIcons?: any;
  numberOnly?: any;
  readonly?: any;
}
export function Input({
  type,
  name,
  value,
  placeHolder,
  simpleValidator,
  handleChange,
  customValidator,
  customMessage,
  inputIcons,
  numberOnly = false,
  readonly = false,
}: InputProps) {
  function onChange(e: any) {
    const { name } = e.target;
    const { value } = e.target.value;
    const numerReg = /^[0-9\b]+$/;
    if (
      (numberOnly && numerReg.test(value)) ||
      value === "" ||
      value === null ||
      !numberOnly
    ) {
      handleChange(name, value);
    }
  }

  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        name={name}
        readOnly={readonly}
        onChange={(e) => onChange(e)}
        value={value}
      />
      {inputIcons && <img src={inputIcons} alt="" />}
      {simpleValidator && (
        <p
          className="invalid-feedback"
          style={{ color: "red", textAlign: "left" }}
        >
          {simpleValidator.message(name, value, customValidator, {
            messages: customMessage,
          })}
        </p>
      )}
    </>
  );
}
