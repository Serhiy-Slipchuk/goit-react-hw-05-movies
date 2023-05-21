import { useState } from 'react';
import css from './SearchForm.module.css';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

const SearchForm = function ({ handlerOnSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handlerInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <form
      className={css.form}
      onSubmit={e => {
        e.preventDefault();
        handlerOnSubmit(inputValue);
        setInputValue('');
      }}
    >
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={handlerInputChange}
        autoComplete="off"
      />
      <Button type="submit" text="Search" />
    </form>
  );
};

SearchForm.propTypes = {
  handlerOnSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
