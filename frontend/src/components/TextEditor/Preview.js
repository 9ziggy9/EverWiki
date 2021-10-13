import React from 'react';
var Latex = require('react-latex');

function Preview({text, textStream}) {
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: textStream}} />
    </>
  );
}

export default Preview;
