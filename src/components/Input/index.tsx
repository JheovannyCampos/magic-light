import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import InputMask from "react-input-mask";

interface inputProps {
  name: string;
  label: string;
  placeholder: string;
}

const Input = (Props: inputProps) => {
  const { name, label, placeholder, ...rest } = Props;
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  function masks(name) {
    switch (name) {
      case "expense":
        return "R$ 999999";
        break;

      case "phone":
        return "(99) 99999-9999";
        break;

      default:
        return "";
    }
  }

  return (
    <>
      <label htmlFor={fieldName}>{label}</label>
      <InputMask
        className="input"
        id={fieldName}
        ref={inputRef}
        mask={masks(fieldName)}
        defaultValue={defaultValue}
        placeholder={placeholder}
        style={{
          border: "2px solid #e5e5e5",
          width: "20rem",
          height: "3rem",
          borderRadius: "5px",
          margin: "1rem",
          fontFamily: "Roboto",
          fontWeight: "300",
          fontSize: "18px",
        }}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </>
  );
};
export default Input;
