const request = require("supertest");
const app = require("../app");

test("GET /users", async () => {
  const res = await request(app).get("/users");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBeTruthy();
});
