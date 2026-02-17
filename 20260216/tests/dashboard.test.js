const request = require("supertest");
const app = require("../app");

describe("Dashboard API", () => {
  test("should return summary data", async () => {
    const res = await request(app).get("/api/dashboard");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("totalIncome");
    expect(res.body).toHaveProperty("totalExpenses");
  });
});
