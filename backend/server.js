const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const users = require("./routes/api/users");

const app = express();

// CORS middleware
app.use(cors());

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// Connect to MongoDB
const uri = require("./config/keys").mongoURI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB successfully connected")).catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});