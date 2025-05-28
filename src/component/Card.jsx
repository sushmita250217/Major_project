import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Card = ({ city, imageSrc1, temperature, quoteKey }) => {
  const { t } = useTranslation();

  const fontClass = i18n.language === 'hi' ? 'font-hindi' : 'font-roboto';

  // Format date based on selected language
  const currentDate = new Intl.DateTimeFormat(
    i18n.language === 'hi' ? 'hi-IN' : 'en-IN',
    {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  ).format(new Date());

  return (
    <div className="text-center mt-4">
      <h1 className={`text-slate-600 font-bold text-[32px] ${fontClass}`}>{city}</h1>
      <h2 className={`text-slate-500 text-shadow mt-2 ${fontClass}`}>{currentDate}</h2>
      <img src={imageSrc1} alt={t('weather_icon')} className="mx-auto w-32 h-32" />
      <h4 className="text-xl mt-2 font-roboto">{temperature}</h4>
      <p className={`text-lg mt-4 text-slate-600 font-bold ${fontClass}`}>
        {t(quoteKey)}
      </p>
    </div>
  );
};

export default Card;
