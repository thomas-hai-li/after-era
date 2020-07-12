import React from 'react';
import '../css/Explore.css';

function Explore(props) {

  const search = props.history.location.search;
  const params = new URLSearchParams(search);
  let era = params.get('era');
  if (!era) { era = 'all'; }

  return (
    <div className="Explore">
      <h3>We be explorin {era === 'all' ? 'it all' : `the ${era}`}</h3>
    </div>
  );
}

export default Explore;
