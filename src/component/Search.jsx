import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');
   const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 mb-6">
      <input
        type="text"
        placeholder= {t('enter_city')}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-2 py-1 border rounded"
      />
      <button
        type="submit"
        className="
    px-2 py-1
    bg-sky-500
    text-white
    rounded
    transition
    duration-300
    ease-in-out
    hover:bg-sky-600
    hover:scale-105
    active:bg-sky-700
    active:scale-95
    focus:outline-none
    focus:ring-2
    focus:ring-sky-400
    focus:ring-opacity-50
  ">
         {t('search')}
      </button>

    </form>
  );
};

export default Search;
