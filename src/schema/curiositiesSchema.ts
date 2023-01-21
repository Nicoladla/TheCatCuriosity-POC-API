import joi from "joi";

export const curiositiesSchema = joi.object({
  author: joi.string().min(3).required(),
  title: joi.string().min(4).required(),
  description: joi.string().min(30).required(),
  classificationId: joi.number().min(1).required(),
});

export const curiositiesUpdateSchema = joi.object({
  title: joi.string().min(4).required(),
  description: joi.string().min(30).required(),
});
