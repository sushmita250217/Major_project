import React from 'react'
import { useTranslation } from 'react-i18next';

const LanguageButton = () => {

     const { i18n } = useTranslation();
     const { t } = useTranslation();
    
      const changeLanguage = (language) => {
        i18n.changeLanguage(language);
      };


  return (  
    <div className="flex items-center justify-center">
    <button
      onClick={() => changeLanguage('en')}
      className="
        px-2 py-1
        text-white
        bg-sky-500
        rounded
        mr-2
        mb-2
        font-roboto
        shadow-md
        text-shadow-sm
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
      "
    >
      {t('english')}
    </button>
  
    <button
      onClick={() => changeLanguage('hi')}
      className="
        px-2 py-1
        text-white
        bg-sky-500
        rounded
        mb-2
        font-roboto
        shadow-md
        text-shadow-sm
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
      "
    >
      {t('hindi')}
    </button>
  </div>
  )
}

export default LanguageButton
