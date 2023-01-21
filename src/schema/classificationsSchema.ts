import joi from "joi";

const classificationSchema = joi.object({
  name: joi.string().min(3).max(20).required(),
});

export default classificationSchema;
