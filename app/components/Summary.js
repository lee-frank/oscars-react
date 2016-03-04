import React from 'react';

const Summary = ({category, choice}) => {
  return (
      <a className="list-group-item">
        <h4 className="list-group-item-heading">{category}</h4>
        <p className="list-group-item-text">{choice}</p>
      </a>
  );
};

Summary.propTypes = {
  category: React.PropTypes.string,
  choice: React.PropTypes.string
};

export default Summary;
