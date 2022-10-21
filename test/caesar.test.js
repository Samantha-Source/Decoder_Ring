const {caesar} = require("../src/caesar")
const {expect} = require("chai")


//casesar() paramaters
// input - inputed text to be encoded/decoded
// shift - how much each letter is shifted by positive # = shift to right; negative # =shift to left
// encode - whether to encode or decode the message(by default it is set to true)

// If shift value isn't present, 0, less than -25, or greater than 25 function should return false
// Spaces & nonalphabetic symbols should be maintained throughout
// Capital letters should be ignored
// If a letter is shifted "off" the alphabet it should wrap around (e.g. z shifted 3 = c)

describe("caesar", ()=>{
    it("should return false if shift value isn't present", () => {
        const actual = caesar("abc");
        expect(actual).to.be.false
    })

    it("should return false if shift value is greater than 25", () => {
        const actual = caesar("abc", 30);
        expect(actual).to.be.false
    })

    it("should return false if shift value is less than -25", () => {
        const actual = caesar("abc", -30 );
        expect(actual).to.be.false
    })

    it("should maintain spaces and nonalphabetic characters throughout", () => {
        const result = caesar("a b@c$", 1)
        const expected = "b c@d$";
        expect(result).to.eql(expected)
    })

    it("should ignore capital letters", () => {
        const result = caesar("ABcdE", 1);
        const expected = "bcdef";
        expect(result).to.eql(expected)
    })

    it("should wrap letters around to the front of the alphabet if shifted off the end", () => {
        const result = caesar("xyz", 1)
        const expected = "yza"
        expect(result).to.eql(expected)
    })

    it("should wrap letters around to the end of the alphabet if shifted off the beggining", () => {
        const result = caesar("abc", -1)
        const expected = "zab"
        expect(result).to.eql(expected)
    })

    it("should be able to encode messages when encode is set to false", () => {
        const result = caesar("zab", -1, false);
        const expected = "abc";
        expect(result).to.eql(expected)
    })
})
