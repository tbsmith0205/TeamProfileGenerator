const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and school properties", () => {
      const intern = new Intern("Jane", 3, "jane@gmail.com", "NC State");

      expect(intern.name).toEqual("Jane");
      expect(intern.id).toEqual(3);
      expect(intern.email).toEqual("jane@gmail.com");
      expect(intern.school).toEqual("NC State");
    });
  });
  describe("Functions", () => {
    it("should provide info when the corresponding function is called", () => {
      const intern = new Intern("Jane", 3, "jane@gmail.com", "NC State");

      expect(intern.getName()).toEqual("Jane");
      expect(intern.getId()).toEqual(3);
      expect(intern.getEmail()).toEqual("jane@gmail.com");
      expect(intern.getTitle()).toEqual("Intern");
      expect(intern.getSchool()).toEqual("NC State");
    });
  });
});
