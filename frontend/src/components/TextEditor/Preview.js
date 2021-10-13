import React from 'react';
import katex from 'katex';

function Preview({text, textStream}) {
  // const katexTest = katex.renderToString("\\oint_{\\partial \\Sigma} \\omega = \\int_{\\Sigma} d\\omega", {
  //   displayMode: true,
  //   throwOnError: false
  // });
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: textStream}} />
      {/* <div dangerouslySetInnerHTML={{__html: katexTest}} /> */}
    </>
  );
}

export default Preview;
