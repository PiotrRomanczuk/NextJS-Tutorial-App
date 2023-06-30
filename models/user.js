import { schema, model, models } from 'mongoose';

const UserSchema = new Schema({

    email: {
        type: String,
        unique: [true, 'Email already in use'],
        required: [true, 'The email address is required'],
    },
    username: {
        type: String,
        unique: [true, 'Username already in use'],
        required: [true, 'The username is required'],
        match: [
             /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
            "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ]
    },
    image: {
        type: String,
    }
})