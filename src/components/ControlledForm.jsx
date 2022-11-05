/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState } from 'react';
import '../styles.scss';
// import PropTypes from "prop-types";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    values: {
      login: '',
      password: '',
    },
    errors: {
      login: '',
      password: '',
    },
  });

  const isAnyErrors = (objectError) => !!Object.values(objectError).filter((value) => value).length;

  // Валидация полей формы
  const validateInput = ({ name, value }) => {
    switch (name) {
      case 'login':
        return value.length <= 3 ? 'Логин должен содержать не менее 4-х символов' : '';
      case 'password':
        return value.length <= 5 ? 'Пароль должен содержать не менее 6-ти символов' : '';
      default:
        return '';
    }
  };

  // Изменение input
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
      errors: {
        ...prev.errors,
        [name]: validateInput({ name, value }),
      },
    }));
  };

  const { login, password } = formData.values;

  // Отправка формы
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const validationMsg = {
      login: validateInput({ name: 'login', value: login }),
      password: validateInput({ name: 'password', value: password }),
    };

    setFormData((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        login: validationMsg.login,
        password: validationMsg.password,
      },
    }));

    if (!isAnyErrors(validationMsg)) {
      alert(`Логин: ${formData.values.login}, Пароль: ${formData.values.password}`);
    }
  };

  return (
    <section>
      <h1>Контролируемая форма</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Логин
          <input
            type="text"
            name="login"
            value={formData.values.login}
            onChange={handleInputChange}
          />
          <i className="error-msg">{formData.errors.login}</i>
        </label>
        <label>
          Пароль
          <input
            type="password"
            name="password"
            value={formData.values.password}
            onChange={handleInputChange}
          />
          <i className="error-msg">{formData.errors.password}</i>
        </label>
        <input type="submit" className="submit_btn" disabled={isAnyErrors(formData.errors)} />
      </form>
    </section>
  );
};
// UncontolledForm.propTypes = {};

export default ControlledForm;
