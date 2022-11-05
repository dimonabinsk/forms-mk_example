import React, { useRef } from 'react';
import '../styles.scss';
// import PropTypes from "prop-types";

const UncontrolledForm = () => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-alert
    alert(`Логин: ${loginRef.current.value}, Пароль: ${passwordRef.current.value}`);
  };
  return (
    <section>
      <h1>Неконтролируемая форма</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Логин
          <input type="text" ref={loginRef} />
        </label>
        <label>
          Пароль
          <input type="password" ref={passwordRef} />
        </label>
        <input type="submit" className="submit_btn" />
      </form>
    </section>
  );
};
// UncontolledForm.propTypes = {};

export default UncontrolledForm;
