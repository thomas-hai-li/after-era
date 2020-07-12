import React from 'react';
import '../css/ContentTile.css';

function ContentTile(props) {

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
      <p>Title: <span className="ContentTile-info">{title}</span></p>
      <p>Type: <span className="ContentTile-info">{type}</span></p>
      <p>Release: <span className="ContentTile-info">{release}</span></p>
    </div>
  );
}

export default ContentTile;
