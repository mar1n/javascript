function anagrams(word, words) {
    let result = [];
    words.forEach(function(wordSort){
        wordSort.split('').sort().join('') == word.split('').sort().join('') ?  result.push(wordSort) : false ;
    } );

    return result;
}

let word = 'abba';
let words = ['aabb', 'abcd', 'bbaa', 'dada'];
console.log(anagrams(word, words));
