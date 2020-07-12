import React from 'react';
import content from '../data/content';
import ContentTile from '../components/ContentTile';
import '../css/Explore.css';

function Explore(props) {

  // parse url query params
  const search = props.history.location.search;
  const params = new URLSearchParams(search);
  let era = params.get('era');
  if (!era) { era = 'all'; }

  // create content tiles based on era
  let tiles = []

  content.forEach((item, i) => {
    tiles.push(<ContentTile content={item} key={i} />);
  });

  return (
    <div className="Explore">
      <h3>We be explorin {era === 'all' ? 'it all' : `the ${era}`}</h3>
      <div className="Explore-Gallery">
        {tiles}
      </div>
    </div>
  );
}

export default Explore;
