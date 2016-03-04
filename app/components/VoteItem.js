import React from 'react';

class VoteItem extends React.Component {
    constructor(props) {
      super(props);
      this.handleVote = this.handleVote.bind(this);
    }
    handleVote() {
      // this.props.updateVotes(this.props.title, this.props.jsonData.Content1);
    }
    render() {
      return (
        <div className="card">
          <img className="card-img-top" src={this.props.jsonData.Image.Url} alt={this.props.jsonData.Image.Alt} />
          <div className="card-block">
            <h5 className="card-title">{this.props.jsonData.Content1}</h5>
            <p className="card-text">{this.props.jsonData.Content2}</p>
            <p className="card-text">{this.props.jsonData.Content3}</p>
            <button className="btn btn-primary" ref="voteButton" onClick={this.handleVote}>Vote!</button>
            <br /><br />
            <a href={'http://www.cineplex.com/Videos/All-Trailers/' + this.props.jsonData.Trailer} className="card-link">Trailer</a>
          </div>
        </div>
      );
    }
}

VoteItem.propTypes = {
  jsonData: React.PropTypes.object,
  title: React.PropTypes.string
};

export default VoteItem;
