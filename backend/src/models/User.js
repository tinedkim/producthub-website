import mongoose from 'mongoose';
import { compareSync, hashSync } from 'bcryptjs';


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: email => User.doesNotExist({ email }),
            message: "Email already exists"
        }
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

userSchema.pre('save', function () {
    if (this.isModified('password')) {
        this.password = hashSync(this.password, 10);
    }
});
userSchema.statics.doesNotExist = async function (field) {
    return await this.where(field).countDocuments() === 0;
};
userSchema.methods.comparePasswords = function (password) {
    return compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
