import React from 'react';
import '../css/Comments.css';

function Comments(props) {

  return (
    <div className='Comments'>
      <h4 className='Comments-Header'>leave a public comment</h4>
      <div className="NewCommentSection">
        <input className='NewComment-Content' type="text" placeholder="your thoughts" />
        <input className='NewComment-Name' type="name" placeholder="your name" autoComplete="off" />
      </div>
    </div>
  );
}

export default Comments;
