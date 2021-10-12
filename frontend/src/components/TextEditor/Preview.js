import React from 'react';

function Preview({text, textStream}) {
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: textStream}} />
    </>
  );
}

export default Preview;
