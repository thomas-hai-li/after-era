import React from 'react';
import '../css/Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { era: '00s' };
  }

  onFormChange = e => {
    this.setState({ era: e.target.value });
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: '/explore',
      search: `?era=${this.state.era}`
    });
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-splash">
          <h1 className="Home-splash-text">revisit</h1>
          <h1 className="Home-splash-text">your favorite</h1>
          <h1 className="Home-splash-text">era</h1>
        </div>
        <form className="Home-explore-form" onSubmit={this.onFormSubmit}>
          <p>explore</p>
          <select name="era" id="era" onChange={this.onFormChange}>
            <option value="00s">00s</option>
            <option value="90s">90s</option>
            <option value="all">all</option>
          </select>
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
}

export default Home;
