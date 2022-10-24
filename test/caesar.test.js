const {caesar} = require("../src/caesar")
const {expect} = require("chai")



describe("caesar()", ()=>{
    describe("Error handling", () => {
        it("should return false if shift value isn't present.", () => {
            const actual = caesar("abc");
            expect(actual).to.be.false
        })
        it("should return false if the shift value is greater than 25.", () => {
            const actual = caesar("abc", 30);
            expect(actual).to.be.false
        })
        it("should return false if shift value is less than -25.", () => {
            const actual = caesar("abc", -30 );
            expect(actual).to.be.false
        })
    })
    describe("Encoding", () => {
        it("should maintain spaces and non-alphabetic characters throughout.", () => {
            const result = caesar("a b@c$", 1)
            const expected = "b c@d$";
            expect(result).to.eql(expected)
        })
        it("should ignore capital letters.", () => {
            const result = caesar("ABcdE", 1);
            const expected = "bcdef";
            expect(result).to.eql(expected)
        })
        it("should wrap letters around to the front of the alphabet if shifted off the end.", () => {
            const result = caesar("xyz", 1)
            const expected = "yza"
            expect(result).to.eql(expected)
        })
        it("should wrap letters around to the end of the alphabet if shifted off the beggining.", () => {
            const result = caesar("abc", -1)
            const expected = "zab"
            expect(result).to.eql(expected)
        })
        it("should work!", () => {
            const result = caesar("Zebra Magazine", 3);
            const expected = "cheud pdjdclqh"
            expect(result).to.eql(expected)
        })
    })

    describe("Decoding", () => {
        it("should be able to decode messages when encode is set to false.", () => {
            const result = caesar("zab", -1, false);
            const expected = "abc";
            expect(result).to.eql(expected)
        })
        it("should wrap around the end of the alphabet if necessary when encode is set to false.", () => {
            const result = caesar("xyz", -3, false);
            const expected = "abc";
            expect(result).to.eql(expected)
        })
    })
})
