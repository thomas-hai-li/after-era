import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Comments.css';

function Comments(props) {

  const { t } = useTranslation();

  return (
    <div className='Comments'>
      <h4 className='Comments-Header'>{t('Comments.header')}</h4>
      <div className="NewCommentSection">
        <input className='NewComment-Content' type="text" placeholder={t('Comments.placeholder.newCommentContent')} />
        <input className='NewComment-Name' type="name" placeholder={t('Comments.placeholder.newCommentName')} autoComplete="off" />
        <button className='NewComment-Submit'>{t('Comments.submit')}</button>
      </div>
    </div>
  );
}

export default Comments;
