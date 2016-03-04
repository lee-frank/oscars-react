import React from 'react';

const Trailer = ({id}) => {
  return (
    <div>
      <a href={'http://www.cineplex.com/Videos/All-Trailers/' + id}>
        <button type="button" className="btn btn-info-outline">Trailer</button>
      </a>
    </div>
  );
};

Trailer.propTypes = {
  id: React.PropTypes.string
};

export default Trailer;
