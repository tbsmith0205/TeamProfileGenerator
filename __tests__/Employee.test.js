const { it } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

// describe("Employee", () => {
// can create new object

test("should create an object with name, id, and email properites", () => {
  // Arrange
  const employee = new Employee();

  expect(typeof employee).toBe("object");
});
test("can set name via constructor arguments", () => {
  const employee = new Employee("Bob");
  expect(employee.name).toBe("Bob");
});
test("can set id via constructor arguments", () => {
  const employee = new Employee("Bob", 1);
  expect(employee.id).toBe(1);
});
test("can set email via constructor arguments", () => {
  const employee = new Employee("Bob", 1, "bob@gmail.com");
  expect(employee.email).toBe("bob@gmail.com");
});

test("can get name via getName", () => {
  const employee = new Employee("Bob");
  expect(employee.getName()).toBe("Bob");
});
test("can get name via getId", () => {
  const employee = new Employee("Bob", 1);
  expect(employee.getId()).toBe(1);
});
test("can get name via getEmail", () => {
  const employee = new Employee("Bob", 1, "bob@gmail.com");
  expect(employee.getEmail()).toBe("bob@gmail.com");
});

test("can get name via getTitle", () => {
  const employee = new Employee("Bob", 1, "bob@gmail.com");
  expect(employee.getTitle()).toBe("Employee");
});

// });
