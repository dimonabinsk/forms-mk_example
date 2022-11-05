import React from 'react';
import { Controller } from 'react-hook-form';
import '../styles.scss';
// import PropTypes from "prop-types";

const FormInput = ({ labelTitle, control, name, type }) => (
  <label>
    {labelTitle}
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value = '' }, fieldState: { error } }) => (
        <>
          <input type={type} value={value} onChange={onChange} />
          <i className="error-msg">{error?.message}</i>
        </>
      )}
    />
  </label>
);

// FormInput.propTypes = {};

export default FormInput;
