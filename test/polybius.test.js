const {polybius} = require("../src/polybius")
const {expect} = require("chai")

describe("polybius()", () =>{
    describe("Error Handling", () => {
        it("should return false if there are not an even number of characters in the string, excluding spaces, when decoding", () => { 
            const result = polybius(" 123 45", false)
            expect(result).to.be.false
        })
    })
    describe("Encoding", () => {
        it("should output a string", () => {
            const expected = "3251131343";
            const result = polybius("hello");
            expect(result).to.eql(expected)
        })

        it("should maintain spaces throughout", () => {
            const expected = "4233 11 32113341"
            const result = polybius("in a hand");
            expect(result).to.eql(expected)
        })

        it("should ignore capital letters", () => {
            const expected = "2543241341"
            const result = polybius("WoRLd")
            expect(result).to.eql(expected)
        })

        it("should encode both I and J to 42", () => {
            const expected = "3242 424223"
            const result = polybius("hi jim");
            expect(result).to.equal(expected)
        })
        it("Should Work!", () => {
            const expected = "23513434112251"
            const result = polybius("message")
            expect(result).to.eql(expected)
        })
    })
describe("Decoding", () => {
        it("should decode 42 to (i/j)", () => {
            const expected = "h(i/j) (i/j)(i/j)m"
            const result = polybius("3242 424223", false);
            expect(result).to.eql(expected)
        })
        
        it("should maintain spaces throughout when decoding", () => {
            const expected = "ab c";
            const result = polybius("1121 31", false);
            expect(result).to.eql(expected)
        })
    })
})