function encryptThis(words) {
    let wordsArray = words.split(' ');
    let encryptWord = [];
    wordsArray.forEach((element, index1) => {
        let word =  element.split('');
        word.forEach((value, index) => {
            index === 0 ? encryptWord.push(value.charCodeAt(0)) : index === 1 ? encryptWord.push(word[word.length - 1]) : index === word.length - 1 ? encryptWord.push(word[1]) : encryptWord.push(value);

        });
        index1 < wordsArray.length - 1 ? encryptWord.push(' ') : encryptWord;
    });

    return encryptWord.join('');
}

console.log(encryptThis('hello world'));
