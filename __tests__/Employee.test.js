const { it } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    // can create new object
    describe("Initialization", () => {
        it("should create an object with name, id, and email properites", () => {
            // Arrange
            const employee = new Employee();

            expect(typeof(employee)).toEqual(typeof "object")
        })
    })
    // can create new instance of employee
    // set name via constructor arguments, id , email
    // test get functions


}
