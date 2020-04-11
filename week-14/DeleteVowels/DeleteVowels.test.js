const DeleteVowels = require('./DeleteVowels');
describe("Delete vowels ", ()=>{
      test("It should delete all vowels from a sentence", ()=>{
          const sentence = "A dog is a friendly pet if it’s trained properly";

          expect(DeleteVowels(sentence)).toBe(" dg s  frndly pt f t’s trnd prprly")
      });
});