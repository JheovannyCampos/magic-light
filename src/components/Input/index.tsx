import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import { InputForm } from "./styles";

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

  return (
    <>
      <label htmlFor={fieldName}>{label}</label>

      <InputForm
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </>
  );
};
export default Input;
