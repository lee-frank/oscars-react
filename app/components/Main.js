import React from 'react';
import Nav from './Nav';
import Category from './Category';
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

    console.log(voteData);
  }
  render() {
    return (
      <div className="container">
        <Nav />
        <h1>Welcome! Select your nominee for each of the following categories!</h1>
        <br /><br />
        {this.state.jsonData.map(function(element, index) {
          return <Category jsonData={element} key={index} />;
        })}
      </div>
    );
  }
}

export default Main;
