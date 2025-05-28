import React from 'react';
import { useTranslation } from 'react-i18next';

const Button = ({ label, onClick }) => {
  const { t } = useTranslation();

  return (
      <button onClick={onClick} className="px-3 py-1 bg-blue-500 text-white rounded-r-2xl font-roboto text-shadow-sm">{t(label)}</button>
  );
};

export default Button;
