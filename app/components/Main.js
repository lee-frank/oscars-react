import React from 'react';
import Nav from './Nav';
import Category from './Category';
import Summary from './Summary';
import 'whatwg-fetch';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.updateVotes = this.updateVotes.bind(this);
    this.state = {
      jsonData: [],
      votes: []
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
  updateVotes(category, choice) {
    // let newVotes = this.state.votes;
    let newVote = {category: category, choice: choice};
    let voteData = this.state.votes;
    let keyExists = false;

    voteData.map(function(element, index) {
      if (voteData[index].category === newVote.category) {
        voteData[index].choice = newVote.choice;
        keyExists = true;
      }
    });

    if (!keyExists) {
      voteData.push(newVote);
    }

    this.setState({
      votes: voteData
    }, function() {
      console.log(this.state.votes);
    });
  }
  render() {
    return (
      <div className="container">
        <Nav />
        <h1>Welcome! Select your nominee for each of the following categories!</h1>
        <br /><br />

        {this.state.jsonData.map(function(element, index) {
          return <Category
            jsonData={element}
            key={index}
            updateVotes={this.updateVotes} />;
        }, this)}

        <br /><br />

        <h1>Your votes</h1>
        <div className="list-group">
          {this.state.votes.map(function(element, index) {
            return <Summary
              category={element.category}
              choice={element.choice}
              key={index} />;
          }, this)}
        </div>
        <br /><br />
      </div>
    );
  }
}

export default Main;
