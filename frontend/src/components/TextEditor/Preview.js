import React from 'react';
import katex from 'katex';

function Preview({text, textStream}) {
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: textStream}} />
    </>
  );
}

export default Preview;
