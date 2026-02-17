const request = require("supertest");
const app = require("../app");

describe("Expenses API", () => {

  test("create expense", async () => {
    const res = await request(app)
      .post("/api/expenses")
      .send({ title: "Food", amount: 200 });

    expect(res.statusCode).toBe(201);
  });

  test("fetch expenses", async () => {
    const res = await request(app).get("/api/expenses");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});
