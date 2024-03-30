import Joi from "joi";

export const registerSchema = Joi.object({
    username: Joi.string().required().trim().messages({
        "any.required": "Username la truong bat buoc",
        "string.empty": "Username khong duoc de trong",
        "string.trim": "Username khong duoc de khoang trong"
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Email la truong bat buoc",
        "string.email": "Email khong hop le",
        "string.empty": "Email "
    }),
    password: Joi.string().required().messages({
        "any.required": "Password là trường bắt buộc",
        "string.min": "Password phải có ít nhất {#limit} ký tự",
        "string.empty": "Password không được để trống"
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
        "any.required": "Confirm Password la truong bat buoc",
        "any.only": "Confirm Password khong trung khop",
        "string.empty": "Confirm Password khong duoc de trong"
    }),
});