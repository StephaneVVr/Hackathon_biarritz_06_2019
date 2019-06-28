const assert = require("assert");
const app = require("./index.js");
const request = require("supertest");

describe("Unit testing the /campuses route", function() {
  it("should return OK status", function() {
    return request(app)
      .get("/campuses")
      .then(function(response) {
        assert.equal(response.status, 200);
      });
  });
});

describe("Unit testing the /wilders route", function() {
  it("should return OK status", function() {
    return request(app)
      .get("/wilders")
      .then(function(response) {
        assert.equal(response.status, 200);
      });
  });
});

describe("Unit testing the /matches route", function() {
  it("should return OK status", function() {
    return request(app)
      .get("/matches")
      .then(function(response) {
        assert.equal(response.status, 200);
      });
  });
});
