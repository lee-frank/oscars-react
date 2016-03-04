import React from 'react';
import VoteItem from './VoteItem';

const Category = ({jsonData, updateVotes}) => {
  return (
    <div>
      <h1>{jsonData.Title}</h1>

      <div className="card-group">
        <div className="flex-container">
            {jsonData.VoteItems.map(function(element, index) {
              return <VoteItem
                jsonData={element}
                key={index}
                title={jsonData.Title}
                updateVotes={updateVotes} />;
            }, this)}
        </div>
      </div>

    </div>
  );
};

Category.propTypes = {
  jsonData: React.PropTypes.object,
  updateVotes: React.PropTypes.func
};

export default Category;
