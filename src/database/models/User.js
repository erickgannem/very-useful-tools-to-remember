import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

});

userSchema.static('comparePasswords', async function compareHandler(plainPassword) {
  const areEqual = await bcrypt.compare(plainPassword, this.password);
  return areEqual;
});

userSchema.pre('save', async function encryptionHandler(next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

const User = model('User', userSchema);

export default User;
