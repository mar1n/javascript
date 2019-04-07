function rot13(message) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    message.split('').forEach(function (letter) {

        if(letter == letter.toUpperCase()) {
           alphabet = alphabet.toUpperCase();
        } else {
            alphabet = alphabet.toLowerCase();
        }
        if(alphabet.indexOf(letter) == -1){
            result.push(letter);
        } else {
            if(alphabet.length - alphabet.indexOf(letter) <= 13) {
                var cipherLetter = 13 - (alphabet.length - alphabet.indexOf(letter));
            } else {
                cipherLetter = alphabet.indexOf(letter) + 13;
            }
            result.push(alphabet.charAt(cipherLetter));
        }

    });
    return result.join('');
}


let randomTest = '3zkn7';
console.log(rot13(randomTest));
