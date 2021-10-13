import React from 'react';

function Editor({text, setText, textStream, setTextStream}) {

  function parseStyle (text) {
    let newArr = []
    let s = String(text);
    if (s.match(/\{(.*?)\}/g)) {
        const matches = s.match(/\{(.*?)\}/g).map(e => e.slice(1,e.length-1));
        const replacements = s.match(/\{(.*?)\}/g).map(e => {
            let n = 2;
            const style = e[1];
            while(e[n] !== '}' && n < e.length) n++;
            return `<${style}>${e.slice(2,n)}</${style}>`
        });
        s.split(/[\{\}]/).forEach(e => {
            let isVacant = true;
            for (let i in matches) {
            if(e === matches[i]) {
                newArr.push(replacements[i]);
                isVacant=false;
            }
            }
            if(isVacant) {
            newArr.push(e);
            isVacant = true;
            }
        });
    return newArr.join('');
    }
    return s;
  }

  const splitOnNewLines = (string) => string.split('\n');
  const parseBullets = (array) => array.map(e => {
    switch (e[0]) {
      case '*':
        let n = 0;
        while(e[n] === '*') n++;
        return `<h${n+1}>${e.slice(n)}</h${n+1}>`;
      default:
        return `<p>${e}</p>`;
    }
  });

  const editText = (event) => {
    setText(event.target.value);
    setTextStream(
      parseBullets(splitOnNewLines(parseStyle(event.target.value))).join('')
    );
  }

  return (
    <>
      <textarea onChange={editText}>
        {text}
      </textarea>
    </>
  );
}

export default Editor;
