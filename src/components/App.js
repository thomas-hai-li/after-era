import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import content from '../data/content';
import '../css/App.css';
import Navbar from './Navbar';
import Home from '../views/Home';
import Explore from '../views/Explore';
import ContentGallery from '../views/ContentGallery';

function App() {

  // generate a route for each item in the content array
  let contentRoutes = [];
  content.forEach((item, i) => {
    contentRoutes.push(<Route path={`/explore/${item.title}`} component={ContentGallery} key={i} />);
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar hasLanguageSelector={true} />
        <Route exact path='/' component={Home} />
        <Route exact path='/explore' component={Explore} />
        {contentRoutes}
        <Navbar hasLanguageSelector={false} />
      </div>
    </BrowserRouter>
  );
}

export default App;
