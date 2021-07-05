const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, email, github, and id properties", () => {
      const engineer = new Engineer("John", 2, "john@gmail.com", "john123");

      expect(engineer.name).toEqual("John");
      expect(engineer.id).toEqual(2);
      expect(engineer.email).toEqual("john@gmail.com");
      expect(engineer.github).toEqual("john123");
    });
  });
  describe("Functions", () => {
    it("should provide info when the corresponding function is called", () => {
      const engineer = new Engineer("John", 2, "john@gmail.com", "john123");

      expect(engineer.getName()).toEqual("John");
      expect(engineer.getId()).toEqual(2);
      expect(engineer.getEmail()).toEqual("john@gmail.com");
      expect(engineer.getTitle()).toEqual("Engineer");
      expect(engineer.getGitHub()).toEqual("john123");
    });
  });
});
