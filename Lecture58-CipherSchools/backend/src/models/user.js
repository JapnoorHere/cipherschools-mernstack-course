const { model, Schema } = require("mongoose");
const { isEmail } = require("validator");

const { checkPassword, encryptPassword } = require("../bcrypt");
const { generateToken } = require("../jwt");

const userSchema = new Schema({
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    email: {
        type: String, lowercase: true, trim: true, unique: true,
        validate: {
            validator(email) {
                return isEmail(email);
            }
        }
    },
    password: {
        type: String, trim: true, required: true,
        validate: {
            validator(password) {
                if (password.includes(" ") || password.includes("\n") || password.includes("\t")) {
                    throw new Error(`Password includes space/tab/newLine char`);
                }

                if (password.toLowerCase().includes("password")) {
                    throw new Error(`Password must not contain password`);
                }
                return true;
            }
        }
    },
    type: {
        type: String,
        enum: ["STUDENT", "LIBRARIAN"],
        default: "STUDENT",
    },
    tokens: {
        type: [{ token: String }],
    }
},
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    const user = this;
    if (user.modifiedPaths().includes("password")) {
        user.password = await encryptPassword(user.password);
    }
    next();
});

userSchema.statics.findByEmailAndPasswordForAuth = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error(`Invalid credentials`);
        }
        const encryptedPassword = user.password;
        const isMatch = await checkPassword(password, encryptedPassword);
        if (!isMatch) {
            throw new Error(`Invalid credentials`);
        }
        console.log("Login Successful");
        return user;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

userSchema.methods.generateToken = function () {
    const user = this;
    const userPayload = { _id: user._id.toString(), email: user.email, type: user.type };
    const token = generateToken(userPayload);
    user.tokens.push({ token });
    user.save();
    return token;
}

userSchema.methods.toJSON = function () {
    let user = this.toObject();
    delete user.tokens;
    return user;
};

const User = model("User", userSchema);

module.exports = User;
