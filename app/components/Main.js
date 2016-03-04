import React from 'react';
import Nav from './Nav';
import Category from './Category';
import Summary from './Summary';
import 'whatwg-fetch';
import {Link} from 'react-router';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.updateVotes = this.updateVotes.bind(this);

    this.state = {
      jsonData: [],
      votes: [],
      disabled: true
    };
  }
  componentDidMount() {
    this.loadJson();
  }
  // componentWillReceiveProps(nextProps) {
  //   this.loadJson(nextProps);
  // }
  loadJson() {
    fetch('/app/assets/data.json')
      .then(response => response.json())
      .then(data => this.updateState(data))
      .catch(err => console.log(err));
  }
  updateState(data) {
    this.setState({
      jsonData: data
    }, function() {
      console.log(this.state.jsonData);
    });
  }
  updateVotes(category, choice, imageURL) {
    // let newVotes = this.state.votes;
    let newVote = {category: category, choice: choice, image: imageURL};
    let voteData = this.state.votes;
    let keyExists = false;

    voteData.map(function(element, index) {
      if (voteData[index].category === newVote.category) {
        voteData[index].choice = newVote.choice;
        voteData[index].imageURL = newVote.imageURL;
        keyExists = true;
      }
    });

    if (!keyExists) {
      voteData.push(newVote);
    }

    this.setState({
      votes: voteData
    }, () => {
      this.updateDisableState();
    });
  }
  updateDisableState() {
    this.setState({
      disabled: false
    });
  }
  render() {
    return (
      <div className="container">
        <Nav />
        <h1>Welcome! Select your nominee for each of the following categories!</h1>
        <br /><br />

        <section className="Category">
          {this.state.jsonData.map(function(element, index) {
            return <Category
              jsonData={element}
              key={index}
              updateVotes={this.updateVotes} />;
          }, this)}
        </section>

        <section className="Summary">
          <h1>Your votes</h1>
          <div className="list-group">
            {this.state.votes.map(function(element, index) {
              return <Summary
                category={element.category}
                choice={element.choice}
                key={index} />;
            }, this)}
          </div>

          <Link to={'/submit'}>
            <button type="button" className="btn btn-primary" disabled={this.state.disabled}>Click here to confirm!</button>
          </Link>
        </section>

      </div>
    );
  }
}

export default Main;
