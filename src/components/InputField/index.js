// @flow
import React, { useState, useEffect } from "react";

type Props = {
  placeholder?: string,
  defaultTitle?: string,
  defaultDescription?: string,
  onSubmit: (title: string, description?: string) => void,
  error?: *
};

const inputStyles = {
  border: 0,
  outline: "none",
  padding: ".2em",
  fontSize: "1em",
  width: "100%",
  marginBottom: "2em",
  borderBottom: ".02em solid grey"
};
const InputField = ({
  placeholder,
  defaultDescription,
  defaultTitle,
  onSubmit,
  error
}: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (defaultTitle && defaultDescription) {
      setTitle(defaultTitle);
      setDescription(defaultDescription);
    }
  }, []);

  const submit = e => {
    e.preventDefault();

    title.trim() !== ""
      ? onSubmit(title, description)
      : setErrors({ ...errors, title: "Title should not be empty" });
  };

  return (
    <form
      style={{ width: "100%", borderRadius: "2em", padding: "2em" }}
      onSubmit={submit}
    >
      <input
        style={inputStyles}
        type="text"
        onChange={e => setTitle(e.target.value)}
        onFocus={() => setErrors(null)}
        placeholder={placeholder ? placeholder : "Title"}
      />
      {errors &&
        Object.keys(errors).map((key, i) => (
          <p key={i} style={{ color: "red", opacity: ".8" }}>
            {errors[key]}
          </p>
        ))}
      <textarea
        style={inputStyles}
        value={description}
        type="text"
        onChange={e => setDescription(e.target.value)}
        placeholder={"Description"}
      />
      <button type={"submit"}>Submit</button>
    </form>
  );
};

export default InputField;
