const {substitution} = require("../src/substitution")
const {expect} = require("chai")
// Write your tests here!


//3 paramaters: input(text to be encoded/decoded) ; 
//              alphabet(substitution alphabet); 
//              encode(endocde or deocde; default=true)
//
//
//input could include spaces and letters as well as special characters
//spaces should be maintained throughout
//capital letters ignored
//alphabet parametr must be a string of exactly 26 characters, whcih could include special characters, otherwise it should return false
//all the characters in the alphabet parameter must be unique otherwise it should return false


describe("substitution()", () => {    
    describe("Error Handling", () => {
        it("should return false of the alphabet paramater is not exactly 26 characters", () => {
            const actual = substitution("hello", "1234567");
            expect(actual).to.be.false;
        })
        it("should return false if all of the characters in the alphabet parameter are not unique", () => {
            const actual = substitution("world", "1234567890qqwertyuiopasdfg");
            expect(actual).to.be.false;
        })
    })
    describe("Encoding", () => {
        it("should ignore capital letters", () => {
            const expected = "jrufscpw"
            const actual = substitution("ThInKfUL", "xoyqmcgrukswaflnthdjpzibev");
            expect(actual).to.eql(expected)
        })
        it("should maintain spaces throughout", () => {
            const expected = "elp xhm xf mbymwwmfj dne";
            const actual = (substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"));
            expect(actual).to.eql(expected)
        })
        it("should encode properly when the alphabet includes special characters", () => {
            const expected = "y&ii$r&";
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
            expect(actual).to.eql(expected)
        })
        it("should work!", () =>{
            const expected = "ykrrpik"
            const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq")
            expect(actual).to.eql(expected)
            
        })
    })
    describe("Decoding", () => { 
        it("should decode properly when the input contains special characters", () => {
            const expected = "message"
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            expect(actual).to.eql(expected)
        })
        it("should preserve spaces throughout", () => {
            const expected = "you are an excellent spy";
            const actual = substitution('elp xhm xf mbymwwmfj dne', "xoyqmcgrukswaflnthdjpzibev", false);
            expect(actual).to.eql(expected)
        })
        it("should ignore capital letters when decoding", () => {
            const expected = "message";
            const actual = substitution("Y&ii$R&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            expect(actual).to.eql(expected)
        })
    }) 
})