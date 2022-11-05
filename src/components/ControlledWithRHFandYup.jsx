/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../styles.scss';
import FormInput from 'shared/FormInput';
// import PropTypes from "prop-types";

const ControlledFormSchema = yup.object().shape({
  login: yup
    .string()
    .required('Обязательное поле')
    .min(4, 'Логин должен содержать не менее 4-х символов'),
  password: yup
    .string()
    .required('Обязательное поле')
    .min(6, 'Пароль должен содержать не менее 6-ти символов')
    .test('PASSWORD', "Пароль не должен содержать '123456'", (value) => value !== '123456'),
});

const ControlledWithRHFandYup = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(ControlledFormSchema) });

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
      <h1>React Hook Form and Yup</h1>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <FormInput labelTitle="Логин" control={control} name="login" type="text" />
        <FormInput labelTitle="Пароль" control={control} name="password" type="password" />

        <input type="submit" className="submit_btn" disabled={!isValid} />
      </form>
    </section>
  );
};
// UncontolledForm.propTypes = {};

export default ControlledWithRHFandYup;
