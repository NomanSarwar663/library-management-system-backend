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

const updateUserSchema = Joi.object({
  email: Joi.string().optional().messages({
    "string.empty": `email cannot be empty`,
  }),
  firstName: Joi.string().optional().messages({
    "string.empty": `firstName cannot be empty`,
  }),
  lastName: Joi.string().optional().messages({
    "string.empty": `lastName be empty`,
  }),
  avatar: Joi.string().optional().messages({
    "string.empty": `avatar cannot be empty`,
  }),
});

const contactUsSchema = Joi.object({
  firstName: validationValues.firstName,
  lastName: validationValues.lastName,
  email: validationValues.email,
  message: Joi.string().required().messages({
    "string.empty": "Message cannot be empty",
    "string.min": "Message should be at least 10 characters long",
    "any.required": "Message is required",
  }),
  subject: Joi.string().required().messages({
    "string.empty": "Message cannot be empty",
    "string.min": "Message should be at least 10 characters long",
    "any.required": "Message is required",
  }),
});

const reportIncident = Joi.object({
  createdBy: Joi.string().min(0).required().messages({
    "any.required": `Created By is required`,
  }),
  firstName: validationValues.firstName,
  lastName: validationValues.lastName,
  email: validationValues.email,
  address: Joi.string().optional().messages({
    "string.empty": `Address cannot be empty`,
    "any.required": `Address is required`,
  }),
  countryCode: Joi.string().optional().messages({
    "string.empty": `Country code cannot be empty`,
    "any.required": `Country code is required`,
  }),
  phoneNo: Joi.string().optional().messages({
    "string.empty": `PhoneNo cannot be empty`,
    "any.required": `PhoneNo is required`,
  }),
  incidentStartDate: Joi.object().optional().messages({
    "string.empty": `Incident start date cannot be empty`,
    "any.required": `Incident start date is required`,
  }),
  incidentTime: Joi.object().optional().messages({
    "string.empty": `Incident time cannot be empty`,
    "any.required": `Incident time is required`,
  }),
  incidentDuration: Joi.object().optional().messages({
    "string.empty": `Incident duration cannot be empty`,
    "any.required": `Incident duuration is required`,
  }),
  incidentDesc: Joi.string().optional().messages({
    "string.empty": `Incident description cannot be empty`,
    "any.required": `Incident description is required`,
  }),
  timeOfDay: Joi.string().optional().messages({
    "string.empty": `Time of day cannot be empty`,
    "any.required": `Time of day is required`,
  }),
  weather: Joi.string().optional().messages({
    "string.empty": `Weather cannot be empty`,
    "any.required": `Weather is required`,
  }),
  cloudFormation: Joi.string().optional().messages({
    "string.empty": `Cloud formation cannot be empty`,
    "any.required": `Cloud formation is required`,
  }),
  UAPDetected: Joi.string().optional().messages({
    "string.empty": `UAP detected cannot be empty`,
    "any.required": `UAP detected is required`,
  }),
  noOfUAPs: Joi.number().min(1).optional().messages({
    "any.required": `No of UAPs is required`,
  }),
  lifeFormsDetected: Joi.string().optional().messages({
    "string.empty": `Life Forms detected cannot be empty`,
    "any.required": `Life Forms detected is required`,
  }),
  noOfLifeForms: Joi.number().min(1).optional().messages({
    "any.required": `No of life forms is required`,
  }),
  UAPShape: Joi.string().optional().messages({
    "string.empty": `UAP shape cannot be empty`,
    "any.required": `UAP shape is required`,
  }),
  UAPSize: Joi.number().min(1).optional().messages({
    "any.required": `UAP size is required`,
  }),
  sizeUnit: Joi.string().optional().messages({
    "string.empty": `Size unit cannot be empty`,
    "any.required": `Size unit is required`,
  }),
  lightEmissions: Joi.string().optional().messages({
    "string.empty": `Light Emissions cannot be empty`,
    "any.required": `Light Emissions is required`,
  }),
  colorOfLight: Joi.string().optional().messages({
    "string.empty": `Color of Light cannot be empty`,
    "any.required": `Color of Light is required`,
  }),
  colorOfUAP: Joi.string().optional().messages({
    "string.empty": `Color of UAP cannot be empty`,
    "any.required": `Color of UAP is required`,
  }),
  sound: Joi.string().optional().messages({
    "string.empty": `Sound cannot be empty`,
    "any.required": `Sound is required`,
  }),
  animalReactions: Joi.string().optional().messages({
    "string.empty": `Animal Reactions cannot be empty`,
    "any.required": `Animal Reactions is required`,
  }),
  radarData: Joi.string().optional().messages({
    "string.empty": `Radar data cannot be empty`,
    "any.required": `Radar data is required`,
  }),
  emfEffects: Joi.string().optional().messages({
    "string.empty": `EMF effects cannot be empty`,
    "any.required": `EMF effects is required`,
  }),
  radiation: Joi.string().optional().messages({
    "string.empty": `Radiation cannot be empty`,
    "any.required": `Radiation is required`,
  }),
  direction: Joi.string().optional().messages({
    "string.empty": `Direction cannot be empty`,
    "any.required": `Direction is required`,
  }),
  jetPropulsion: Joi.string().optional().messages({
    "string.empty": `Jet propulsion cannot be empty`,
    "any.required": `Jet propulsion is required`,
  }),
  wingsOrPropellers: Joi.string().optional().messages({
    "string.empty": `Wings or Propellers cannot be empty`,
    "any.required": `Wings or Propellers is required`,
  }),
  speed: Joi.number().min(1).optional().messages({
    "any.required": `Speed is required`,
  }),
  speedUnit: Joi.string().optional().messages({
    "string.empty": `Speed unit cannot be empty`,
    "any.required": `Speed unit is required`,
  }),
  altitude: Joi.number().min(1).optional().messages({
    "any.required": `Altitude is required`,
  }),
  altitudeUnit: Joi.string().optional().messages({
    "string.empty": `Altitude unit cannot be empty`,
    "any.required": `Altitude unit is required`,
  }),
  distance: Joi.number().min(1).optional().messages({
    "any.required": `Distance is required`,
  }),
  distanceUnit: Joi.string().optional().messages({
    "string.empty": `Distance unit cannot be empty`,
    "any.required": `Distance unit is required`,
  }),
  cloakingOrInvisibility: Joi.string().optional().messages({
    "string.empty": `Cloaking or Invisibility cannot be empty`,
    "any.required": `Cloaking or Invisibility is required`,
  }),
  additionalMovement: Joi.string().optional().messages({
    "string.empty": `Additional movement cannot be empty`,
    "any.required": `Additional movement is required`,
  }),
  lifeFormSpecies: Joi.string().optional().messages({
    "string.empty": `Life Form species cannot be empty`,
    "any.required": `Life Form species is required`,
  }),
  clothed: Joi.string().optional().messages({
    "string.empty": `Clothed cannot be empty`,
    "any.required": `Clothed is required`,
  }),
  uniformed: Joi.string().optional().messages({
    "string.empty": `Uniformed cannot be empty`,
    "any.required": `Uniformed is required`,
  }),
  helmet: Joi.string().optional().messages({
    "string.empty": `Helmet cannot be empty`,
    "any.required": `Helmet is required`,
  }),
  avatarOrDrone: Joi.string().optional().messages({
    "string.empty": `Avatar or Drone cannot be empty`,
    "any.required": `Avatar or Drone is required`,
  }),
  eyeSize: Joi.string().optional().messages({
    "string.empty": `Eye size cannot be empty`,
    "any.required": `Eye size is required`,
  }),
  eyeType: Joi.string().optional().messages({
    "string.empty": `Eye type cannot be empty`,
    "any.required": `Eye type is required`,
  }),
  height: Joi.string().optional().messages({
    "string.empty": `Height cannot be empty`,
    "any.required": `Height is required`,
  }),
  heightValue: Joi.number().min(1).optional().messages({
    "any.required": `Height value is required`,
  }),
  lifeFormMeasurement: Joi.string().optional().messages({
    "string.empty": `Life Form Measurement cannot be empty`,
    "any.required": `Life Form Measurement is required`,
  }),
  physique: Joi.string().optional().messages({
    "string.empty": `Physique cannot be empty`,
    "any.required": `Physique is required`,
  }),
  consciousEffects: Joi.string().optional().messages({
    "string.empty": `Conscious Effects cannot be empty`,
    "any.required": `Conscious Effects is required`,
  }),
  additionalWitnesses: Joi.string().optional().messages({
    "string.empty": `Additional Witnesses cannot be empty`,
    "any.required": `Additional Witnesses is required`,
  }),
  noOfWitnesses: Joi.number().min(1).optional().messages({
    "any.required": `No of Witnesses is required`,
  }),
  mentalStateOfObserver: Joi.string().optional().messages({
    "string.empty": `Mental State of Observer cannot be empty`,
    "any.required": `Mental State of Observer is required`,
  }),
  trustFactor: Joi.string().optional().messages({
    "string.empty": `Trust Factor cannot be empty`,
    "any.required": `Trust Factor is required`,
  }),
  additionalWitnessInform: Joi.string().optional().messages({
    "string.empty": `Additional Witness Inform cannot be empty`,
    "any.required": `Additional Witness Information is required`,
  }),
  additionalComments: Joi.string().optional().messages({
    "string.empty": `Additional Comments cannot be empty`,
    "any.required": `Additional Comments is required`,
  }),
  incidentImage: Joi.array().optional().messages({
    "string.empty": `Incident Image cannot be empty`,
    "any.required": `Incident Image is required`,
  }),
  incidentfiles: Joi.array().optional().messages({
    "string.empty": `Incident Video cannot be empty`,
    "any.required": `Incident Video is required`,
  }),
  incidentLink: Joi.string().optional().messages({
    "string.empty": `Incident Link cannot be empty`,
    "any.required": `Incident Link is required`,
  }),
});

/**
 * wrap all validation schemas with validate object
 */
module.exports = {
  registerUserSchema,
  updateUserSchema,
  contactUsSchema,
  reportIncident,
};
