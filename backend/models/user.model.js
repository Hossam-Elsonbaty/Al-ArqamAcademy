import mongoose from 'mongoose';

const userApplicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  gender: { type: String, required: function() { return !this.isParent; } },
  dob: { type: String, required: function() { return !this.isParent; } },
  address: String,
  city: String,
  zipCode: Number,
  selectedProgram: { type: String, required: function() { return !this.isParent; } },
  isParent: Boolean,
  children: [
    {
      firstName: String,
      lastName: String,
      gender: String,
      dob: String,
      selectedProgram: String,
    },
  ],
});
const userApplication = mongoose.model('UserApplication',userApplicationSchema);
export default userApplication;
