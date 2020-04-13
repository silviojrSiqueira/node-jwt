import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String
  }
});

export default new model('User', UserSchema);
