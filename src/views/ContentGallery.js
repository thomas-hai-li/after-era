import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/ContentGallery.css';
import GalleryView from '../components/GalleryView';
import Comments from '../components/Comments';

function ContentGallery(props) {

  const { t } = useTranslation();

  const content = props.history.location.state.content;
  const { title, type, release, imgSrcs } = content;

  const goBack = () => {
    props.history.goBack();
  }

  return (
    <div className='ContentGallery'>
      <h4 className='BackButton' onClick={goBack}>← {t('Exploring.goback')}</h4>
      <GalleryView imgs={imgSrcs} title={title} />
      <div className="ContentDetails">
        <h4 className="ContentDetails-Header">{t('Content.details')}</h4>
        <p>{t('Content.title')}: {title}</p>
        <p>{t('Content.type')}: {t(`Content.${type}`)}</p>
        <p>{t('Content.release')}: {release}</p>
      </div>
      <Comments />
    </div>
  );
}

export default ContentGallery;
