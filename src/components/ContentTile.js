import React from 'react';
import '../css/ContentTile.css';

function ContentTile(props) {

  const { title, type, era, release, thumbnail } = props.content;

  console.log(title)
  console.log(type)
  console.log(era)
  console.log(release)
  console.log(thumbnail)

  return (
    <div className='ContentTile'>
      <img className='ContentTile-Thumbnail' src={thumbnail} alt={`${title} thumbnail`} />
      <p>Title: <span className="ContentTile-info">{title}</span></p>
      <p>Type: <span className="ContentTile-info">{type}</span></p>
      <p>Release: <span className="ContentTile-info">{release}</span></p>
    </div>
  );
}

export default ContentTile;
