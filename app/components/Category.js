import React from 'react';
import VoteItem from './VoteItem';

const Category = ({jsonData, updateVotes}) => {
  return (
    <div>
      <br />
      <h1>{jsonData.Title}</h1>
      <br />

      <div className="card-group">
        <div className="flex-container">
            {jsonData.VoteItems.map(function(element, index) {
              return <VoteItem
                jsonData={element}
                key={index}
                category={jsonData.Title}
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
