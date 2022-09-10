const Joi = require("joi");

const validationValues = {
  email: Joi.string()
    .lowercase()
    .pattern(
      new RegExp(
        "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$"
      )
    )
    .required()
    .messages({
      "string.base": `Email does not have a valid value`,
      "string.pattern.base": `Email does not have a valid value`,
      "string.empty": `Email cannot be empty`,
      "any.required": `Email is required`,
    }),
  password: Joi.string().lowercase().required().min(6).messages({
    "string.pattern.base": `Password does not have a valid value`,
    "string.empty": `Password cannot be empty`,
    "any.required": `Password is required`,
    "string.min": `Password length must be 6 characters long`,
  }),
  firstName: Joi.string().min(3).max(20).required().messages({
    "string.empty": `Name cannot be empty`,
    "any.required": `Name required`,
    "string.min": `First Name length must be atleast 3 characters long`,
    "string.max": `First Name length must be exeed 20 characters`,
  }),
  lastName: Joi.string().min(3).max(20).required().messages({
    "string.empty": `Name cannot be empty`,
    "any.required": `Name required`,
    "string.min": `Last Name length must be atleast 3 characters long`,
    "string.max": `Last Name length must not be exeed 20 characters`,
  }),
};

const registerUserSchema = Joi.object({
  email: validationValues.email,
  firstName: validationValues.firstName,
  lastName: validationValues.lastName,
  password: validationValues.password,
});

const registerBookSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": `Title cannot be empty`,
    "any.required": `Title is required`,
  }),
  isbn: Joi.string().required().messages({
    "string.empty": `ISBN cannot be empty`,
    "any.required": `ISBN is required`,
  }),
  publishYear: Joi.number().required().messages({
    "string.empty": `PublishYear cannot be empty`,
    "any.required": `PublishYear is required`,
  }),
  coverPrice: Joi.number().required().messages({
    "string.empty": `CoverPrice cannot be empty`,
    "any.required": `CoverPrice is required`,
  }),
});

const bookCheckoutSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": `Name cannot be empty`,
    "any.required": `Name is required`,
  }),
  phoneNo: Joi.string().required().messages({
    "string.empty": `PhoneNo cannot be empty`,
    "any.required": `PhoneNo is required`,
  }),
  nationalID: Joi.string().min(11).max(11).required().messages({
    "string.empty": `National ID number cannot be empty`,
    "any.required": `National ID number is required`,
    "string.min": `National ID must be 11 digits long number`,
    "string.max": `National ID must be 11 digits long number`,
  }),
  checkOutDate: Joi.string().required().messages({
    "string.empty": `Check out date cannot be empty`,
    "any.required": `Check out date is required`,
  }),
  returnDate: Joi.string().required().messages({
    "string.empty": `Return date cannot be empty`,
    "any.required": `Return date is required`,
  }),
});

module.exports = {
  registerUserSchema,
  registerBookSchema,
  bookCheckoutSchema,
};
