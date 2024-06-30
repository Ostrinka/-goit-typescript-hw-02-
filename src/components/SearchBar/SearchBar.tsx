import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { CiSearch } from "react-icons/ci";
import {SearchBarProps} from "./SearchBar.type"
import css from './SearchBar.module.css';

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Text must be entered to search for images');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit"><CiSearch className={css.icon} /></button>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default SearchBar;