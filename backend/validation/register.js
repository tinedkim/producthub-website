const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Empty field -> ""
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.contactNumber = !isEmpty(data.contactNumber) ? data.contactNumber : "";

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    } else if (!Validator.isLength(data.password, {
            min: 6,
            max: 30
        })) {
        errors.password = "Password must be at least 6 characters";
    }

    // Name checks
    if (Validator.isEmpty(data.firstName)) {
        errors.name = "First Name field is required";
    }
    if (Validator.isEmpty(data.lastName)) {
        errors.name = "Last Name field is required";
    }

    // Phone number checks
    if (Validator.isEmpty(data.contactNumber)) {
        errors.name = "Phone Number field is required";
    } else if (!Validator.isMobilePhone(data.contactNumber)) {
        errors.name = "Phone Number is invalid"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};