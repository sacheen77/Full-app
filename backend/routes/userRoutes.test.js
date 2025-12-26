const request = require("supertest");
const express = require("express");
const userRoutes = require("../routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

describe("User API", () => {
  it("should return all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([
      { id: 1, name: "sacheen" },
      { id: 2, name: "patil" }
    ]);
  });
});
