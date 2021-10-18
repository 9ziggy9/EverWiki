import React from 'react';
import DOMPurify from 'dompurify'; // ah ah ah, you didn't say the magic word

function Preview({textStream}) {
  const sanitizer = DOMPurify.sanitize;

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: sanitizer(textStream)}} />
    </>
  );
}

export default Preview;
