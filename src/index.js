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
    const arr = expr.match(/(.{10}|.)/g);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === '**********') {
            arr[i] = ' '
        }
    }
    
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].match(/(.{2}|.)/g);
        
    }
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === '00') {
                arr[i][j] = '';
            };
            if(arr[i][j] === '10') {
                arr[i][j] = '.' 
            }
            if(arr[i][j] === '11') {
                arr[i][j] = '-'
            }
        }
    }
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].join('')
    }
    for(let i = 0; i < arr.length; i++) {
        for(let key in MORSE_TABLE){
            if (key === arr[i]) {
                arr[i] = MORSE_TABLE[key]
            }
        }
    }
    const res = arr.join('')  
    return res; 
    }    

module.exports = {
    decode
}