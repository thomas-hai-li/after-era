import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import content from '../data/content';
import ContentTile from '../components/ContentTile';
import '../css/Explore.css';

function Explore(props) {

  const [searchText, setSearchText] = useState('');
  const { t } = useTranslation();

  const onSearchTextChange = (e) => {
    let search = e.target.value.toLowerCase();
    setSearchText(search);
  }

  // parse url query params
  const search = props.history.location.search;
  const params = new URLSearchParams(search);
  let era = params.get('era');
  if (!era) { era = 'all'; }

  // create header and filter content based on era
  let header = "";
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

  // filter content based on search text
  if (searchText) {
    filteredContent = filteredContent.filter(item => item.title.toLowerCase().startsWith(searchText));
  }

  // create content tiles based on filtered content
  let tiles = [];
  filteredContent.forEach((item, i) => {
    tiles.push(<ContentTile content={item} history={props.history} key={i} />);
  });

  return (
    <div className="Explore">
      <h3>{header}</h3>
      <div className="Explore-Search">
        <input type="search" onChange={onSearchTextChange} placeholder={t('Navbar.search')} />
      </div>
      {(tiles.length === 0) ? <h3 className="Explore-NoResults">no content found :(</h3> :
        <div className="Explore-Gallery">
          {tiles}
        </div>
      }
    </div>
  );
}

export default Explore;
