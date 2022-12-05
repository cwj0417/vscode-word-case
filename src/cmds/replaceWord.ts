const camelReg = /\b[a-z]+([A-Z]{1}[a-z]+)+\b/g;
const cababReg = /\b([a-z]+-)+[a-z]+\b/g;
const pascalReg = /\b([A-Z]{1}[a-z]+)+\b/g;
const snakeReg = /\b([a-z]+_)+[a-z]+\b/g;

const join = (words: string[], type: 'camel' | 'cabab' | 'pascal' | 'snake') => {
    switch (type) {
        case 'camel':
            return words.map((i, idx) => idx === 0 ? i : i[0].toUpperCase() + i.slice(1)).join('');
        case 'cabab':
            return words.join('-');
        case 'pascal':
            return words.map(i => i[0].toUpperCase() + i.slice(1)).join('');
        case 'snake':
            return words.join('_');
    }
};

const replace = (txt: string, type: 'camel' | 'cabab' | 'pascal' | 'snake') => {
    return txt
        .replace(camelReg, (m) => {
            let words = [''];
            for (let l of m) {
                if (l.charCodeAt(0) > 96) {
                    words[words.length - 1] += l;
                } else {
                    words.push(l.toLowerCase());
                }
            }
            return join(words, type);
        })
        .replace(pascalReg, (m) => {
            let words = [];
            for (let l of m) {
                if (l.charCodeAt(0) > 96) {
                    words[words.length - 1] += l;
                } else {
                    words.push(l.toLowerCase());
                }
            }
            return join(words, type);
        })
        .replace(cababReg, (m) => join(m.split('-'), type))
        .replace(snakeReg, (m) => join(m.split('_'), type));
};

export {
    replace
};
