import Joi from 'joi';
import express from 'express';
import User from '../models/User';
import { signUp } from '../validations/user';
import { parseError, sessionizeUser } from "../utils/helpers";


const userRouter = express.Router();

userRouter.post("", async (req, res) => {
    try {
        const { email, password, firstName, lastName, contactNumber } = req.body;
        const {error, value} = await signUp.validate({ email, password, firstName, lastName, contactNumber });
        if (error !== undefined) throw error;

        const newUser = new User(value);
        const sessionUser = sessionizeUser(newUser);
        await newUser.save();

        req.session.user = sessionUser;
        res.send(sessionUser);
    } catch (err) {
        res.status(400).send(parseError(err));
    }
});

export default userRouter;
