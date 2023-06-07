const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const gravatar = require("gravatar");
const bcrypt = require("bcrypt");
require("dotenv").config();

const { login } = require("./login-ctrl");
const app = require("../../app");
const { User } = require("../../models/user");

app.post("/api/auth/users/login", login);

let mongoServer;
const email = "max@gmail.com";
const password = "1234567";

describe("test login-ctrl", () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
    const avatarURL = gravatar.url(email);
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      avatarURL,
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  test("login return token ahd user", async () => {
    const response = await request(app)
      .post("/api/auth/users/login")
      .send({ email, password });

    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
    expect(response.body).toHaveProperty("user");
    expect(response.body.user).toHaveProperty("email");

    expect(typeof response.body.user.email).toBe("string");
  });
});
