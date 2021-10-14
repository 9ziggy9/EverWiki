import React from 'react';

function Preview({textStream}) {

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: textStream}} />
    </>
  );
}

export default Preview;
