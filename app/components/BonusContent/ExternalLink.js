import React from 'react';

const ExternalLink = ({ExternalLink}) => {
  return (
    <div>
      <a href={ExternalLink}>
        <button type="button" className="btn btn-info-outline">More info</button>
      </a>
    </div>
  );
};

export default ExternalLink;
