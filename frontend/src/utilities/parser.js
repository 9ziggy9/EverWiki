import katex from 'katex';

export function parseStyle (text) {
    let newArr = []
    let s = String(text);
    if (s.match(/\[(.*?)\]/g)) {
        const matches = s.match(/\[(.*?)\]/g).map(e => e.slice(1,e.length-1));
        const replacements = s.match(/\[(.*?)\]/g).map(e => {
            let n = 2;
            const style = e[1];
            while(e[n] !== ']' && n < e.length) n++;
            switch (style) {
                case 'i':
                case 'b':
                    return `<${style}>${e.slice(2,n)}</${style}>`;
                case 'm':
                    const preparedString = e.slice(2,n);
                    const katexTest = katex.renderToString(
                        preparedString, {
                        displayMode: true,
                        throwOnError: false
                    });
                    return katexTest;
                default:
                    return e.slice(2,n);
            }
        });
        s.split(/\[|\]/).forEach(e => {
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

export const splitOnNewLines = (string) => string.split('\n');

export const parseBullets = (array) => array.map(e => {
    switch (e[0]) {
      case '*':
        let n = 0;
        while(e[n] === '*') n++;
        return `<h${n+1}>${e.slice(n)}</h${n+1}>`;
      default:
        return `<p>${e}</p>`;
    }
});
