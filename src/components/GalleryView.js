import React, { useState } from 'react';
import '../css/GalleryView.css';

function GalleryView(props) {

  // initializing variables and state
  const [spotlightImgIndex, setSpotlightImgIndex] = useState(0);
  const title = props.title;
  const imgs = props.imgs;
  const spotlightSrc = imgs[spotlightImgIndex];

  // event handler
  const onSelectionImgClick = (e, index) => {
    setSpotlightImgIndex(index);
  }

  // populating images that the user can select
  const imgSelection = []
  imgs.forEach((img, i) => {
    imgSelection.push(
      <img
        className={spotlightImgIndex === i ? 'active' : ''}
        src={img}
        key={i}
        draggable='false'
        alt={`some image of ${title}`}
        onClick={e => onSelectionImgClick(e, i)} />
    );
  });

  return (
    <div className='GalleryView'>
      <div className="GalleryView-Selection">
        {imgSelection}
      </div>
      <img src={spotlightSrc} alt={`some image of ${title}`} className="GalleryView-Spotlight" draggable='false' />
    </div>
  );
}

export default GalleryView;
