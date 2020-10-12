const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arrSymbols = expr.match(/.{1,10}/g);
    let decodeWord = "";

    arrSymbols.forEach(function(symbol) {
        const arrSymbolCodes = symbol.match(/.{1,2}/g);
        let strSymbol = "";

        if (arrSymbolCodes[0] === "**") {
            decodeWord += " ";
        } else {
            arrSymbolCodes.forEach(function(code) {
                switch (code) {
                    case "00":
                        return;
                    case "10":
                        strSymbol += ".";
                        break;
                    case "11":
                        strSymbol += "-";
                        break;
                }
            });
            decodeWord += MORSE_TABLE[strSymbol];
            strSymbol = "";
        }
    });
    return decodeWord;
}

module.exports = {
    decode
}