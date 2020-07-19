import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/ContentTile.css';

function ContentTile(props) {

  const { t } = useTranslation();
  const { title, type, release, thumbnail } = props.content;

  const handleOnClick = e => {
    props.history.push({
      pathname: `/explore/${title.toLowerCase()}`,
      state: { content: props.content }
    });
  }

  return (
    <div className='ContentTile' onClick={handleOnClick}>
      <img className='ContentTile-Thumbnail' src={thumbnail} alt={`${title} thumbnail`} />
      <p>{t('Content.title')}: <span className="ContentTile-info">{title}</span></p>
      <p>{t('Content.type')}: <span className="ContentTile-info">{t(`Content.${type}`)}</span></p>
      <p>{t('Content.release')}: <span className="ContentTile-info">{release}</span></p>
    </div>
  );
}

export default ContentTile;
