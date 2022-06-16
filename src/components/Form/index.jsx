import React from "react";

const Form = ({ input, submit, changeHandler, type, key }) => {
  return (
    <>
      <div key={key} className="konten-form">
        <label>{input.label}</label>
        <br />
        <input
          required
          onChange={changeHandler}
          type={input.type}
          placeholder={input.placeholder}
          value={input.value}
          name={input.name}
          autoComplete="on"
        />
      </div>
    </>
  );
};

export default Form;
