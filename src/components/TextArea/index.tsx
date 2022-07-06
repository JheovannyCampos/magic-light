import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import { TextAreaForm } from "./styles";

interface TextAreaProps {
  name: string;
  label: string;
  placeholder: string;
}

const TextArea = (Props: TextAreaProps) => {
  const { name, label, placeholder, ...rest } = Props;
  const TextAreaRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: TextAreaRef,
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

      <TextAreaForm
        id={fieldName}
        ref={TextAreaRef}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </>
  );
};
export default TextArea;
