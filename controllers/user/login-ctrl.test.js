const express = require("express");
const request = require("supertest");

const { login } = require("./login-ctrl");
const { User } = require("../../models/user");

const app = express();

describe("Login-ctr test", () => {
  it("shoud return user date with two fields mail and subscription", async () => {
    const email = "max@gmail.com";
    const password = "1234567";
    const user = new User({ email, password });
    const result = await login(email, password);
    expect(result.email).toEqual(email);
    expect(result.password).toEqual(password);
  });
});

// const express = require("express");
// const request = require("supertest");
// const { login } = require("./login-ctrl");
// const app = express();
// app.post("/api/auth/users/login", login);
// let server;
// describe("test login-ctrl", () => {
//   beforeEach(() => {
//     server = app.listen(3000);
//     console.log("3000!");
//   });
//   afterEach(() => {
//     server.close();
//     console.log("server close");
//   });
//   test("login return token ahd user", async () => {
//     const response = await request(app)
//       .post("/api/auth/users/login")
//       .send({ email: "max@gmail.com", password: "1234567" });
//     if (response.statusCode !== 200) {
//       console.log(response.body);
//     }
//     console.log(response.body);
//     expect(response.statusCode).toBe(200);
//   });
// });
