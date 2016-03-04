import React from 'react';
import toastr from 'toastr';
import BonusContent from './BonusContent';

class VoteItem extends React.Component {
    constructor(props) {
      super(props);
      this.handleVote = this.handleVote.bind(this);
    }
    componentDidMount() {
      toastr.options = {
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      };
    }
    handleVote() {
      this.props.updateVotes(this.props.category, this.props.jsonData.Content1, this.props.jsonData.Image.Url);
      toastr.success(this.props.jsonData.Content1 + ' for ' + this.props.category, 'You voted:');
    }
    render() {
      return (
        <div className="card">
          <img className="card-img-top" src={this.props.jsonData.Image.Url} alt={this.props.jsonData.Image.Alt} />
          <div className="card-block">
            <h5 className="card-title">{this.props.jsonData.Content1}</h5>
            <p className="card-text">{this.props.jsonData.Content2}</p>
            <p className="card-text">{this.props.jsonData.Content3}</p>
            <button type="button" className="btn btn-primary-outline" ref="voteButton" onClick={this.handleVote}>Vote!</button>
            <br /><br />
            <BonusContent jsonData={this.props.jsonData} />
          </div>
        </div>
      );
    }
}

VoteItem.propTypes = {
  jsonData: React.PropTypes.object,
  category: React.PropTypes.string,
  updateVotes: React.PropTypes.func
};

export default VoteItem;
