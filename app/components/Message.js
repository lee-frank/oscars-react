import React from 'react';
import StatusConfirmed from './status/StatusConfirmed';
import StatusAlreadyConfirmed from './status/StatusAlreadyConfirmed';
import StatusError from './status/StatusError';
import StatusLoading from './status/StatusLoading';

const Message = ({confirmationDate, confirmedAlready, status, statusText}) => {
  var statusMessage = Object;

  // using 'else' for error messages causes status flicker while loading
  if (status === 200 && !confirmedAlready) {
    statusMessage = <StatusConfirmed />;
  } else if (status === 200 && confirmedAlready) {
    statusMessage = <StatusAlreadyConfirmed confirmationDate={confirmationDate} />;
  } else if (status === 400 | status === 404 | status === 500) {
    statusMessage = <StatusError statusText={statusText} />;
  } else {
    statusMessage = <StatusLoading />;
  }

  return (
    <div className="container">
      <div className="row">
        {statusMessage}
      </div>
    </div>
  );
};

Message.propTypes = {
  confirmationDate: React.PropTypes.string.isRequired,
  confirmedAlready: React.PropTypes.bool.isRequired,
  status: React.PropTypes.number.isRequired,
  statusText: React.PropTypes.string.isRequired
};

export default Message;
