import React from 'react';

const Lightbox = ({url}) => {
  return (
    <div>
      <a href={url} className="card-link">
        <button type="button" className="btn btn-info-outline">Lightbox</button>
      </a>
    </div>
  );
};

Lightbox.propTypes = {
  url: React.PropTypes.string
};

export default Lightbox;
