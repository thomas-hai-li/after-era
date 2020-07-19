import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../img/logo1.png';
import '../css/Navbar.css';

function Navbar(props) {

  const { t, i18n } = useTranslation();
  const onLanguageChange = (e) => {
    let lang = e.target.value;
    i18n.changeLanguage(lang);
  }

  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <img src={logo} alt="logo" height='100' draggable='false' />
      </div>
      <div className="Navbar-search">
        <input type="search" placeholder={`${t('Navbar.search')} (ie. playstation)`} />
      </div>
      <div className="Navbar-links">
        <NavLink className="Navbar-link" exact to="/">{t('Navbar.home')}</NavLink>
        <NavLink className="Navbar-link" to="/explore">{t('Navbar.explore')}</NavLink>
        <NavLink className="Navbar-link" to="/help">{t('Navbar.help')}</NavLink>
        <div className="LanguageDropdown" style={props.hasLanguageSelector ? { display: "inline" } : { display: "none" }} >
          <select name="language" id="language" onChange={onLanguageChange}>
            <option value="en">EN</option>
            <option value="de">DE</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
