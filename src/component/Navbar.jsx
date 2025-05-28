import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = ({ heading }) => {
  const { t } = useTranslation();

  return (
    <nav className="w-full bg-sky-500">
      <div className="w-full flex justify-center items-center h-16">
        <h1 className="text-3xl text-white font-bold text-shadow-lg font-roboto">
          {t(heading)}
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
