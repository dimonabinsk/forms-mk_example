/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles.scss';
// import PropTypes from "prop-types";

const ControlledWithRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  // Отправка формы
  const onFormSubmit = (formData) => {
    console.log(formData);
    const { login, password } = formData;

    alert(`Логин: ${login}, Пароль: ${password}`);
    reset();
  };
  // console.log(register("login"));

  return (
    <section>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label>
          Логин
          <input
            type="text"
            {...register('login', {
              required: 'Обязательное поле',
              minLength: {
                value: 4,
                message: 'Логин должен содержать не менее 4-х символов',
              },
            })}
          />
          <i className="error-msg">{errors.login?.message}</i>
        </label>
        <label>
          Пароль
          <input
            type="password"
            {...register('password', {
              required: 'Обязательное поле',
              minLength: {
                value: 6,
                message: 'Пароль должен содержать не менее 6-ти символов',
              },
              validate: (value) => value !== '123456' || "Пароль не должен содержать '123456'",
            })}
          />
          <i className="error-msg">{errors.password?.message}</i>
        </label>
        <input type="submit" className="submit_btn" />
      </form>
    </section>
  );
};
// UncontolledForm.propTypes = {};

export default ControlledWithRHF;
