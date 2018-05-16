import React from 'react';

const validationComponent = (props) => {
  let textLength = "";

  if (props.length < 5 ) { textLength = "Text is too dang short" }
  else { textLength = "Text is long enough" }

  return (
    <div>
      <p> {textLength} </p>
    </div>
  )
};

export default validationComponent;