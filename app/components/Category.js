import React from 'react';
import VoteItem from './VoteItem';

const Category = ({jsonData}) => {
  return (
    <div>
      <h1>{jsonData.Title}</h1>

      <div className="card-group">
        <div className="flex-container">
            {jsonData.VoteItems.map(function(element, index) {
              return <VoteItem title={jsonData.Title} jsonData={element} key={index} />;
            })}
        </div>
      </div>

    </div>
  );
};

Category.propTypes = {
  jsonData: React.PropTypes.object
};

export default Category;
