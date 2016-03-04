import React from 'react';
import Trailer from './BonusContent/Trailer';
import Lightbox from './BonusContent/Lightbox';
import ExternalLink from './BonusContent/ExternalLink';

const BonusContent = ({jsonData}) => {
  var button = Object;

  if (jsonData.Trailer) {
    button = <Trailer id={jsonData.Trailer} />;
  } else if (jsonData.LightboxImage.Url) {
    button = <Lightbox url={jsonData.LightboxImage.Url} />;
  } else if (jsonData.ExternalLink) {
    button = <ExternalLink url={jsonData.ExternalLink} />;
  }

  return (
    <div>
      {button}
    </div>
  );
};

BonusContent.propTypes = {
  jsonData: React.PropTypes.object
};

export default BonusContent;
