import React from 'react';
import { useTranslation } from 'react-i18next';
import content from '../data/content';
import ContentTile from '../components/ContentTile';
import '../css/Explore.css';

function Explore(props) {

  const { t } = useTranslation();

  // parse url query params
  const search = props.history.location.search;
  const params = new URLSearchParams(search);
  let era = params.get('era');
  if (!era) { era = 'all'; }

  // create header and content tiles based on era
  let header = "";
  let tiles = []
  let filteredContent = [];
  if (era === '90s') {
    header = t('Exploring.90s');
    filteredContent = content.filter(item => item.release >= 1990 && item.release < 2000);
  } else if (era === '00s') {
    header = t('Exploring.00s');
    filteredContent = content.filter(item => item.release >= 2000 && item.release < 2010);
  } else {
    header = t('Exploring.all');
    filteredContent = content;
  }

  console.log(filteredContent);

  filteredContent.forEach((item, i) => {
    tiles.push(<ContentTile content={item} history={props.history} key={i} />);
  });

  return (
    <div className="Explore">
      <h3>{header}</h3>
      <div className="Explore-Gallery">
        {tiles}
      </div>
    </div>
  );
}

export default Explore;
