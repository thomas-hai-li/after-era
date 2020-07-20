import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Comments.css';

function Comments(props) {

  const [comments, setComments] = useState([]);
  const { t } = useTranslation();

  const onPostNewComment = e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let content = formData.get('comment-content');
    let name = formData.get('comment-name');

    if (!content) {
      alert('Write some content to post a new comment.');
    } else {
      // clear form
      e.target.reset();

      if (!name) {
        name = 'Anonymous';
      }

      // add new comment
      let newComments = [...comments];
      newComments.unshift({ content, name });
      setComments(newComments);
    }


  }

  let commentBlocks = [];
  comments.forEach((comment, i) => {
    commentBlocks.push(
      <div className="CommentBlock">
        <p className="CommentBlock-Name">{comment.name} {t('Comments.said')}...</p>
        <p className="CommentBlock-Content">{comment.content}</p>
      </div>
    );
  });

  return (
    <div className='Comments'>
      <h4 className='Comments-Header'>{t('Comments.header')}</h4>
      <form onSubmit={onPostNewComment} className="NewCommentSection">
        <input className='NewComment-Content' name="comment-content" type="text" maxLength="140" placeholder={t('Comments.placeholder.newCommentContent')} autoComplete="off" />
        <input className='NewComment-Name' name="comment-name" type="text" placeholder={t('Comments.placeholder.newCommentName')} autoComplete="off" />
        <button type='submit' className='NewComment-Submit'>{t('Comments.submit')}</button>
      </form>
      <div className='CommentBlock-Section'>
        {commentBlocks}
      </div>
    </div>
  );
}

export default Comments;
