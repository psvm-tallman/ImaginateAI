import { model, models, Schema } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    email: string;
    username: string;
    photo: string;
    firstName: string;
    lastName: string;
    planId: number;
    creditBalance: number;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    photo: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    planId: {type: String, default:1},
    creditBalance: {type: Number, default: 10},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: true},
})

const User = models?.User || model('User', UserSchema);

export default User;