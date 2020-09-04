import Joi from 'joi';


const email = Joi.string()
    .email()
    .required()
    .error(errors => {
        errors.forEach(e => {
            switch (e.code) {
                case "string.empty":
                    e.message = "Email field is required";
                    break;
                case "string.email":
                    e.message = "Email address must be valid";
                default:
                    console.log(e.code)
                    break;
            }
        });
        return errors;
    });

const password = Joi.string()
    .min(6)
    .max(16)
    .required()
    .error(errors => {
        errors.forEach(e => {
            switch (e.code) {
                case "string.empty":
                    e.message = "Password field is required";
                    break;
                case "string.min":
                    e.message = "Password must be between 6-16 characters long";
                case "string.max":
                    e.message = "Password must be between 6-16 characters long";
                default:
                    console.log(e.code)
                    break;
            }
        });
        return errors;
    });

const firstName = Joi.string()
    .required()
    .error(errors => {
        errors.forEach(e => {
            switch (e.code) {
                case "string.empty":
                    e.message = "First Name field is required";
                    break;
                default:
                    console.log(e.code)
                    break;
            }
        });
        return errors;
    });

const lastName = Joi.string()
    .required()
    .error(errors => {
        errors.forEach(e => {
            switch (e.code) {
                case "string.empty":
                    e.message = "Last Name field is required";
                    break;
                default:
                    console.log(e.code)
                    break;
            }
        });
        return errors;
    });

const contactNumber = Joi.string()
    .regex(/^[0-9]{7,10}$/)
    .required()
    .error(errors => {
        errors.forEach(e => {
            switch (e.code) {
                case "string.empty":
                    e.message = "Phone Number field is required";
                    break;
                case "string.pattern.base":
                    e.message = "Phone Number must be valid"
                default:
                    console.log(e.code)
                    break;
            }
        });
        return errors;
    });

export const signUp = Joi.object().keys({
    email,
    password,
    firstName,
    lastName,
    contactNumber
});
export const logIn = Joi.object().keys({
    email,
    password
});
