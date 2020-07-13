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
  let filteredContent = [];
  if (era === '90s') {
    filteredContent = content.filter(item => item.release >= 1990 && item.release < 2000);
  } else if (era === '00s') {
    filteredContent = content.filter(item => item.release >= 2000 && item.release < 2010);
  } else {
    filteredContent = content;
  }

  console.log(filteredContent);

  filteredContent.forEach((item, i) => {
    tiles.push(<ContentTile content={item} history={props.history} key={i} />);
  });

  return (
    <div className="Explore">
      <h3>exploring {era === 'all' ? 'it all' : `the ${era}`}</h3>
      <div className="Explore-Gallery">
        {tiles}
      </div>
    </div>
  );
}

export default Explore;
