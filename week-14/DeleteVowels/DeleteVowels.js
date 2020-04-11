
const  DeleteVowels =  (sentence) => {

    return sentence.replace(/u|e|o|a|i|U|E|O|A|I/g, '');
}
console.log(DeleteVowels('A dog is a friendly pet if it’s trained properly'));
module.exports = DeleteVowels;