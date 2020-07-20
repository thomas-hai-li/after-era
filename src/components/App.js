import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import content from '../data/content';
import '../css/App.css';
import Navbar from './Navbar';
import HelpModal from './HelpModal';
import Home from '../views/Home';
import Explore from '../views/Explore';
import ContentGallery from '../views/ContentGallery';
import FourOhFour from '../views/FourOhFour';

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // generate a route for each item in the content array
  let contentRoutes = [];
  content.forEach((item, i) => {
    contentRoutes.push(<Route path={`/explore/${item.title}`} component={ContentGallery} key={i} />);
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar helpModalToggle={setModalIsOpen} hasLanguageSelector={true} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/explore' component={Explore} />
          {contentRoutes}
          <Route component={FourOhFour} />
        </Switch>
        <Navbar helpModalToggle={setModalIsOpen} hasLanguageSelector={false} />
        <HelpModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      </div>
    </BrowserRouter>
  );
}

export default App;
