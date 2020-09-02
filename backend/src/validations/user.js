import Joi from 'joi';


/*
const pwMessage = 'must be between 6-16 characters, ' +
    'have at least one capital letter, ' +
    'one lowercase letter, one digit, ' +
    'and one special character';

const password = Joi.string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    .options({
        language: {
            string: {
                regex: {
                    base: pwMessage
                }
            }
        }
    });
*/

export const signUp = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(16).required(),
    firstName: Joi.string().alphanum().min(1).max(30).required(),
    lastName: Joi.string().alphanum().min(1).max(30).required(),
    contactNumber: Joi.string().regex(/^[0-9]{7,10}$/).required()
});
export const logIn = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
