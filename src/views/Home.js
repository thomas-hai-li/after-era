import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Home.css';

function Home(props) {

  const { t } = useTranslation();
  const [era, setEra] = useState('00s');

  const onFormChange = e => {
    setEra(e.target.value);
  }

  const onFormSubmit = e => {
    e.preventDefault();
    props.history.push({
      pathname: '/explore',
      search: `?era=${era}`
    });
  }

  return (
    <div className="Home">
      <div className="Home-splash">
        <h1 className="Home-splash-text">{t('Home.1')}</h1>
        <h1 className="Home-splash-text">{t('Home.2')}</h1>
        <h1 className="Home-splash-text">{t('Home.3')}</h1>
      </div>
      <form className="Home-explore-form" onSubmit={onFormSubmit}>
        <p>{t('Home.4')}</p>
        <select name="era" id="era" onChange={onFormChange}>
          <option value="00s">00s</option>
          <option value="90s">90s</option>
          <option value="all">{t('Home.5')}</option>
        </select>
        <button type="submit">{t('Home.6')}</button>
      </form>
    </div>
  );
}

export default Home;
