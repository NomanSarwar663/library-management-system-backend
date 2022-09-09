const { createResponse, formatResponse } = require("../helpers/utility");
const validate = require("../helpers/validationSchema");
const { BaseError } = require("../helpers/ErrorHandling");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(data) {
  const { firstName, lastName, email, password } = data;
  const response = validate.registerUserSchema.validate({
    firstName,
    lastName,
    email,
    password,
  });

  if (typeof response.error !== "undefined") {
    return createResponse(response);
  }

  const oldUser = await User.findOne({ email });

  if (oldUser) {
    throw new BaseError("User already exist", 400);
  }

  await User.create({
    firstName,
    lastName,
    email: email.toLowerCase(), // sanitize: convert email to lowercase
    password: await bcrypt.hash(password, 10),
  });

  const user = await User.findOne({ email });

  if (user) {
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.JWT_TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    return formatResponse(201, "Success", "User account created", {
      user,
      token,
    });
  }
  throw new BaseError("Unable to register a user", 400);
}

async function login(data) {
  const { email, password } = data;

  if (!(email && password)) {
    throw new BaseError("Email and password is required", 404);
  }
  const user = await User.findOne({ email });
  console.log(process.env.JWT_TOKEN_KEY);
  if (user && (await bcrypt.compare(password, user.password))) {
    token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_TOKEN_KEY,
      {
        expiresIn: "48h",
      }
    );

    return formatResponse(200, "Success", "Login Successfully", {
      token,
      user,
    });
  }
  throw new BaseError("Invalid credentials", 404);
}

module.exports = {
  register,
  login,
};
