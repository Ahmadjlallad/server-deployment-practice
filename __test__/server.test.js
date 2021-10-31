"use strict";
const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
describe("API Server Testing", () => {
  test("handle invalid URLS ", async () => {
    const response = await request.get("/not-found");
    expect(response.status).toEqual(404);
  });

  test("is home route working correctly", async () => {
    const response = await request.get("/");
    expect(response.text).toEqual("HOME route 🏡");
    expect(response.status).toEqual(200);
  });
  test("data route return a json object", async () => {
    const response = await request.get("/data");
    expect(typeof response.body).toEqual("object");
    expect(response.status).toEqual(200);
  });

  test("stamper middleware works", async () => {
    const response = await request.get("/data");
    expect(response.status).toEqual(200);
    expect(response.body.time).toBeDefined();
  });
});
