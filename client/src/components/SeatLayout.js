import React from 'react';

function SeatLayout(props) {
  const style = {
    display: 'inline-block',
    width: '180px',
    height: '100px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: '50px',
    backgroundColor: props.occupied ? '#f00' : '#fff',
    color: props.occupied ? '#fff' : '#000'
  };

  return (
    <div className="seat" style={style}>
      {props.seatNumber}
    </div>
  );
}

export default SeatLayout;
