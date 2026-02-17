const request = require("supertest");
const app = require("../app");

describe("Income API", () => {

  test("create income", async () => {
    const res = await request(app)
      .post("/api/income")
      .send({ title: "Salary", amount: 5000 });

    expect(res.statusCode).toBe(201);
  });

  test("fetch income", async () => {
    const res = await request(app).get("/api/income");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});
