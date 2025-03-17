import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {

  const { t, i18n : { changeLanguage, language }} = useTranslation()

  const [currentLanguage, setCurrentLanguage ] = useState(language)

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

  return (
    <>
     <h1>{t('header')}</h1>
     <footer></footer>
     <button type="button" onClick={handleChangeLanguage}>Change language</button>
    </>
  )
}

export default App
