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

let server;
let mongoServer;

describe("test login-ctrl", () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
    const avatarURL = gravatar.url("max@gmail.com");
    const hashedPassword = await bcrypt.hash("1234567", 10);
    const newUser = await User.create({
      email: "max@gmail.com",
      password: hashedPassword,
      avatarURL,
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(() => {
    server = app.listen(3000);
    console.log("3000!");
  });
  afterEach(() => {
    server.close();
    console.log("server close");
  });
  test("login return token ahd user", async () => {
    const response = await request(app)
      .post("/api/auth/users/login")
      .send({ email: "max@gmail.com", password: "1234567" });
    if (response.statusCode !== 200) {
      console.log(response.body);
    }
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });
});
