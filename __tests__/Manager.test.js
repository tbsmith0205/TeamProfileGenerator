const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and office number if propertiess", () => {
      const manager = new Manager("Sarah", 4, "sarah@gmail.com", "220");

      expect(manager.name).toEqual("Sarah");
      expect(manager.id).toEqual(4);
      expect(manager.email).toEqual("sarah@gmail.com");
      expect(manager.officeNumber).toEqual("220");
    });
  });
  describe("Functions", () => {
    it("should provide info when the corresponding function is called", () => {
      const manager = new Manager("Sarah", 4, "sarah@gmail.com", "220");

      expect(manager.getName()).toEqual("Sarah");
      expect(manager.getId()).toEqual(4);
      expect(manager.getEmail()).toEqual("sarah@gmail.com");
      expect(manager.getTitle()).toEqual("Manager");
      expect(manager.getOfficeNumber()).toEqual("220");
    });
  });
});
