import React from 'react';
import '../css/ContentGallery.css';
import GalleryView from '../components/GalleryView';
import Comments from '../components/Comments';

function ContentGallery(props) {

  const content = props.history.location.state.content;
  const { title, type, release, imgSrcs } = content;

  const goBack = () => {
    props.history.goBack();
  }

  return (
    <div className='ContentGallery'>
      <h4 className='BackButton' onClick={goBack}>go back</h4>
      <GalleryView imgs={imgSrcs} title={title} />
      <div className="ContentDetails">
        <h4 className="ContentDetails-Header">details</h4>
        <p>title: {title}</p>
        <p>type: {type}</p>
        <p>release: {release}</p>
      </div>
      <Comments />
    </div>
  );
}

export default ContentGallery;
